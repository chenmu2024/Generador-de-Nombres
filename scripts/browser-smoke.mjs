/**
 * Zero-dependency Chromium smoke tests for the Next.js static export.
 * Uses Node 22 WebSocket + Chrome DevTools Protocol, not Playwright or paid APIs.
 * Emulated viewports are lab checks, not real-device tests or field CWV.
 */
import { spawn } from 'node:child_process';
import { access, mkdtemp, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const baseUrl = process.env.SMOKE_BASE_URL || 'http://127.0.0.1:3000';
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const verify = (condition, message) => { if (!condition) throw new Error(message); };

async function findChrome() {
  for (const binary of [process.env.CHROME_BIN, '/usr/bin/google-chrome', '/usr/bin/google-chrome-stable', '/usr/bin/chromium', '/usr/bin/chromium-browser'].filter(Boolean)) {
    try { await access(binary); return binary; } catch {}
  }
  throw new Error('No Chrome/Chromium binary found');
}

async function retry(callback, deadline = 12000) {
  const started = Date.now();
  let lastError;
  while (Date.now() - started < deadline) {
    try {
      const value = await callback();
      if (value) return value;
    } catch (error) { lastError = error; }
    await sleep(120);
  }
  throw new Error('Timed out: ' + (lastError?.message || 'condition false'));
}

function makeProtocol(url) {
  const socket = new WebSocket(url);
  const pending = new Map();
  const errors = [];
  let serial = 0;
  let path = '/';
  socket.onmessage = event => {
    const message = JSON.parse(event.data);
    if (message.id) {
      const promise = pending.get(message.id);
      if (promise) {
        pending.delete(message.id);
        message.error ? promise.reject(new Error(message.error.message)) : promise.resolve(message.result);
      }
    } else if (message.method === 'Runtime.exceptionThrown') {
      const x = message.params?.exceptionDetails;
      errors.push(path + ': ' + (x?.exception?.description || x?.text || 'JavaScript exception'));
    } else if (message.method === 'Network.responseReceived') {
      const response = message.params?.response;
      if (response && response.status >= 400 && response.url.startsWith(baseUrl)) {
        errors.push(path + ': HTTP ' + response.status + ' ' + response.url);
      }
    }
  };
  const opened = new Promise((resolve, reject) => { socket.onopen = resolve; socket.onerror = reject; });
  const call = (method, params = {}) => {
    const id = ++serial;
    return new Promise((resolve, reject) => {
      pending.set(id, { resolve, reject });
      socket.send(JSON.stringify({ id, method, params }));
    });
  };
  const evaluate = async expression => {
    const reply = await call('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true });
    if (reply.exceptionDetails) throw new Error(reply.exceptionDetails.exception?.description || reply.exceptionDetails.text);
    return reply.result?.value;
  };
  return { socket, errors, opened, call, evaluate, setPath: value => { path = value; } };
}

function pageMetrics() {
  const doc = document.documentElement;
  const broken = [];
  document.querySelectorAll('img').forEach(img => {
    const r = img.getBoundingClientRect();
    if (r.top < innerHeight && r.bottom > 0 && img.complete && img.naturalWidth === 0) broken.push(img.currentSrc || img.src);
  });
  return {
    width: innerWidth,
    scrollWidth: Math.max(doc.scrollWidth, document.body.scrollWidth),
    h1: document.querySelectorAll('main h1').length,
    main: document.querySelectorAll('main').length,
    dom: document.getElementsByTagName('*').length,
    broken,
    fcp: Math.round(performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0),
  };
}

function overflowOffenders() {
  return Array.from(document.querySelectorAll('body *')).filter(node => {
    const r = node.getBoundingClientRect();
    return r.width && (r.right > innerWidth + 3 || r.left < -3) && getComputedStyle(node).position !== 'fixed';
  }).slice(0, 7).map(node => node.tagName + ' ' + String(node.className || '').slice(0, 65));
}

const profile = await mkdtemp(join(tmpdir(), 'gdn-chrome-'));
let chrome;
let browser;
try {
  await retry(async () => (await fetch(baseUrl + '/')).ok, 12000);
  chrome = spawn(await findChrome(), [
    '--headless', '--no-sandbox', '--disable-dev-shm-usage', '--disable-gpu',
    '--disable-extensions', '--no-first-run', '--no-default-browser-check',
    '--remote-debugging-port=0', '--user-data-dir=' + profile, 'about:blank',
  ], { stdio: 'ignore' });
  const port = await retry(async () => {
    try { return Number((await readFile(join(profile, 'DevToolsActivePort'), 'utf8')).split('\n')[0]); }
    catch { return false; }
  });
  const list = await (await fetch('http://127.0.0.1:' + port + '/json/list')).json();
  const tab = list.find(item => item.type === 'page');
  verify(tab?.webSocketDebuggerUrl, 'Cannot attach to Chrome');
  browser = makeProtocol(tab.webSocketDebuggerUrl);
  await browser.opened;
  await Promise.all([browser.call('Page.enable'), browser.call('Runtime.enable'), browser.call('Network.enable')]);

  // Deterministic app clipboard test. Real permission/fallback is covered by unit tests.
  await browser.call('Page.addScriptToEvaluateOnNewDocument', {
    source: "Object.defineProperty(navigator, 'clipboard', { configurable:true, value:{ writeText:async function(x){window.__smokeCopied=String(x);}, readText:async function(){return window.__smokeCopied||'';} } });",
  });

  async function setViewport(width, height = 812) {
    await browser.call('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 1, mobile: width < 1000 });
    await browser.call('Emulation.setTouchEmulationEnabled', { enabled: width < 1000, maxTouchPoints: 1 });
  }
  async function go(path) {
    browser.setPath(path);
    const result = await browser.call('Page.navigate', { url: baseUrl + path });
    verify(!result.errorText, 'Navigation failed: ' + result.errorText);
    await retry(() => browser.evaluate("document.readyState === 'complete' && document.querySelectorAll('main h1').length > 0"), 14000);
    await sleep(180);
  }
  async function inspect(path) {
    await go(path);
    const m = await browser.evaluate('(' + pageMetrics.toString() + ')()');
    const overflow = m.scrollWidth - m.width;
    if (overflow > 3) {
      const offenders = await browser.evaluate('(' + overflowOffenders.toString() + ')()');
      throw new Error(path + ': horizontal page overflow by ' + overflow + 'px @' + m.width + 'px: ' + offenders.join(' | '));
    }
    verify(m.main === 1 && m.h1 === 1, path + ': expected one primary main and H1; got ' + JSON.stringify(m));
    verify(m.broken.length === 0, path + ': broken visible images: ' + m.broken.join(', '));
    return { path, ...m };
  }
  async function exists(selector) {
    return browser.evaluate('!!document.querySelector(' + JSON.stringify(selector) + ')');
  }
  async function click(selector) {
    await retry(() => exists(selector), 13000);
    await browser.evaluate('(function(){var n=document.querySelector(' + JSON.stringify(selector) + ');if(n.disabled)throw Error("Disabled control");n.click();return true})()');
  }
  async function type(selector, value) {
    await retry(() => exists(selector), 13000);
    await browser.evaluate('(function(){var n=document.querySelector(' + JSON.stringify(selector) + ');n.focus();n.select();return true})()');
    await browser.call('Input.insertText', { text: value });
  }
  async function until(expression, timeout = 12000) {
    await retry(() => browser.evaluate(expression), timeout);
  }

  const xml = await (await fetch(baseUrl + '/sitemap.xml')).text();
  const paths = [...new Set([...xml.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map(match => new URL(match[1]).pathname.replace(/\/$/, '') || '/'))];
  verify(paths.length >= 46, 'Sitemap contains too few routes: ' + paths.length);

  await setViewport(360);
  const report = [];
  for (const path of paths) report.push(await inspect(path));
  console.log('[Browser] 360px: ' + paths.length + ' sitemap routes with no horizontal page overflow or broken visible images');

  await setViewport(390);
  const representative = ['/', '/nombres-gatos', '/nombres-perritas', '/nombres-de-nino', '/nombres-de-mujer', '/nombres-por-letra', '/generador-free-fire', '/nombres-japoneses', '/nombres-peluches'];
  for (const path of representative) await inspect(path);
  console.log('[Browser] 390px: ' + representative.length + ' representative routes OK');
  await setViewport(768, 1024);
  for (const path of ['/', '/nombres-gatos', '/nombres-de-nino']) await inspect(path);
  console.log('[Browser] 768px: tablet routes OK');

  await setViewport(390);
  await go('/nombres-gatos');
  await type('input[aria-label="Buscar nombres de mascotas"]', 'Nube');
  await until('!!document.querySelector("button[aria-label=\\"Usar Nube en el creador\\"]")');
  await click('button[aria-label="Usar Nube en el creador"]');
  verify(await browser.evaluate("document.querySelector('#catnamestool-field-2')?.value") === 'Nube', 'Pet creator did not receive selected name');
  await click('button[aria-label="Guardar favorito: Nube"]');
  await until('!!document.querySelector("button[aria-label=\\"Quitar de favoritos: Nube\\"]")');
  verify((await browser.evaluate("localStorage.getItem('gdn_favorites') || ''")).includes('Nube'), 'Favorite not persisted');
  await click('button[aria-label="Copiar resultados"]');
  await until("(window.__smokeCopied || '').includes('Nube')");
  console.log('[Browser] pet search, use, clipboard and favorites OK');

  await click('button[aria-label="Abrir menú principal"]');
  await until("!!document.querySelector('#mobile-primary-navigation')");
  await click('button[aria-label="Cerrar menú principal"]');
  await until("!document.querySelector('#mobile-primary-navigation')");
  console.log('[Browser] mobile menu opens and closes');

  await go('/nombres-de-nino');
  await type('input[aria-label="Buscar combinaciones de nombres"]', 'Bastian');
  await until('!!document.querySelector("button[aria-label=\\"Editar combinación Bastian Mateo\\"]")');
  await click('button[aria-label="Editar combinación Bastian Mateo"]');
  verify(await browser.evaluate("document.querySelector('#malenamestool-field-1')?.value") === 'Bastian', 'Compound first input not edited');
  verify(await browser.evaluate("document.querySelector('#malenamestool-field-2')?.value") === 'Mateo', 'Compound second input not edited');
  await click('button[aria-label^="Mis nombres favoritos guardados"]');
  await until('!!document.querySelector("[role=dialog][aria-label=\\"Mis nombres favoritos\\"]")');
  verify(await browser.evaluate("document.querySelector('[role=dialog][aria-label=\"Mis nombres favoritos\"]')?.innerText.includes('Nube')") === true, 'Favorite lost on navigation');
  console.log('[Browser] compound editing and cross-route favorite persistence OK');


  // Verify progressive initial UI stays compact without removing access to any name or symbol.
  await go('/');
  await until('document.querySelectorAll("#gdn-symbol-palette button").length > 0');
  const countRows = 'document.querySelectorAll(\'button[role="checkbox"][aria-label^="Seleccionar "]\').length';
  const countSymbols = 'document.querySelectorAll("#gdn-symbol-palette button").length';
  await until(countRows + ' === 12');
  verify(await browser.evaluate(countSymbols) === 16, 'Expected exactly 16 initial quick symbols');
  await click('button[aria-label="Cargar más nombres"]');
  await until(countRows + ' === 36');
  await click('button[aria-controls="gdn-symbol-palette"]');
  await until(countSymbols + ' > 16');
  await click('button[aria-controls="gdn-symbol-palette"]');
  await until(countSymbols + ' === 16');
  console.log('[Browser] generator initial 12 results, incremental 24, expandable 16-symbol palette OK');

  // Deferred supplements must remain usable when navigated to via their buttons.
  await go('/nombres-free-fire');
  const labels = ['Herramientas Free Fire complementarias', 'Biblioteca de símbolos y ejemplos Free Fire'];
  for (const label of labels) {
    const selector = '[data-deferred-tool="' + label + '"]';
    await until('!!document.querySelector(' + JSON.stringify(selector) + ')');
    if (!(await browser.evaluate('document.querySelector(' + JSON.stringify(selector) + ').dataset.loaded === "true"'))) {
      await click(selector + ' button');
    }
    await until('document.querySelector(' + JSON.stringify(selector) + ').dataset.loaded === "true"');
  }
  await until('!!document.querySelector("[data-deferred-tool] input, [data-deferred-tool] button")');
  console.log('[Browser] Free Fire supplementary modules activate via viewport or manual controls');

  const snapshots = Object.fromEntries(report.map(item => [item.path, item.dom]));
  console.log('[Browser] DOM after progressive rendering: home=' + snapshots['/'] + ' clan=' + snapshots['/nombres-clanes-ff'] + ' unique=' + snapshots['/nombres-ff-unicos'] + ' women=' + snapshots['/nombres-ff-mujeres']);
  verify(snapshots['/'] < 1644, 'Homepage DOM not reduced compared with PR #30 baseline');
  verify(snapshots['/nombres-clanes-ff'] < 1773, 'Free Fire clan page DOM not reduced compared with PR #30 baseline');
  verify(snapshots['/nombres-ff-unicos'] < 1730, 'Free Fire unique page DOM not reduced compared with PR #30 baseline');
  verify(snapshots['/nombres-ff-mujeres'] < 1721, 'Free Fire women page DOM not reduced compared with PR #30 baseline');

  verify(browser.errors.length === 0, 'JavaScript errors or missing assets: ' + browser.errors.slice(0, 12).join('\n'));
  console.log('[Browser] largest DOM: ' + report.slice().sort((a,b) => b.dom - a.dom).slice(0,5).map(x=>x.path+'='+x.dom).join(', '));
  console.log('[Browser] local FCP examples (not field CWV): ' + report.filter(x=>x.fcp>0).sort((a,b)=>b.fcp-a.fcp).slice(0,5).map(x=>x.path+'='+x.fcp+'ms').join(', '));
  console.log('[Browser] PASS');
} finally {
  if (browser) browser.socket.close();
  if (chrome) {
    chrome.kill('SIGTERM');
    await Promise.race([new Promise(resolve => chrome.once('exit', resolve)), sleep(2000).then(()=>chrome.kill('SIGKILL'))]);
  }
  await rm(profile, { recursive: true, force: true, maxRetries: 5, retryDelay: 180 });
}
