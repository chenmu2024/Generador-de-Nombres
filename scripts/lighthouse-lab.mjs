// Headless Chrome Lighthouse mobile audit for the actual static export and live domain.
// Runs in GitHub Actions without a subscription or an API key.
// Lighthouse scores are synthetic lab measurements, NOT CrUX/field CWV.
import { spawn } from 'node:child_process';
import { mkdir, readFile, writeFile } from 'node:fs/promises';

const reportDir = 'reports';
const LH_VERSION = '13.5.0';
const base = process.env.LIGHTHOUSE_PREVIEW_URL || 'http://127.0.0.1:3000';
const scenarios = [
  { name: 'local-home', url: base + '/', required: true },
  { name: 'local-culture', url: base + '/nombres-italianos', required: true },
  { name: 'production-home', url: 'https://generadordenombres.net/', required: false },
];

function invoke(command, args, timeout = 150000) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { env: { ...process.env, CHROME_PATH: process.env.CHROME_PATH || '/usr/bin/google-chrome' }, stdio: ['ignore', 'pipe', 'pipe'] });
    let output = '';
    const remember = chunk => { output = (output + String(chunk)).slice(-6000); };
    child.stdout.on('data', remember);
    child.stderr.on('data', remember);
    const timer = setTimeout(() => { child.kill('SIGKILL'); reject(new Error('Lighthouse timed out after ' + timeout + 'ms: ' + output)); }, timeout);
    child.on('error', error => { clearTimeout(timer); reject(error); });
    child.on('close', code => {
      clearTimeout(timer);
      if (code === 0) resolve(output);
      else reject(new Error('Lighthouse exit ' + code + ': ' + output));
    });
  });
}

const value = audit => audit?.numericValue == null ? null : Math.round(audit.numericValue);
function summarize(result, name, url) {
  const audits = result.audits || {};
  const rows = audits['network-requests']?.details?.items || [];
  const js = rows.filter(item => item.resourceType === 'Script');
  const css = rows.filter(item => item.resourceType === 'Stylesheet');
  const bytes = items => Math.round(items.reduce((acc, item) => acc + (item.transferSize || 0), 0) / 1024);
  return {
    name,
    requestedUrl: url,
    finalUrl: result.finalDisplayedUrl || result.finalUrl || '',
    score: Math.round((result.categories?.performance?.score || 0) * 100),
    fcpMs: value(audits['first-contentful-paint']),
    lcpMs: value(audits['largest-contentful-paint']),
    tbtMs: value(audits['total-blocking-time']),
    cls: audits['cumulative-layout-shift']?.numericValue == null ? null
      : Number(audits['cumulative-layout-shift'].numericValue.toFixed(3)),
    speedIndexMs: value(audits['speed-index']),
    scriptCount: js.length,
    scriptTransferKb: bytes(js),
    cssTransferKb: bytes(css),
    totalTransferKb: bytes(rows),
    mainThreadMs: value(audits['mainthread-work-breakdown']),
    jsExecutionMs: value(audits['bootup-time']),
    unusedJavascriptKb: audits['unused-javascript']?.details?.overallSavingsBytes
      ? Math.round(audits['unused-javascript'].details.overallSavingsBytes / 1024) : null,
    mostExpensiveScripts: js
      .sort((a, b) => (b.transferSize || 0) - (a.transferSize || 0))
      .slice(0, 5)
      .map(item => ({ path: new URL(item.url).pathname, transferKb: Math.round((item.transferSize || 0) / 1024) })),
    warnings: result.runWarnings || [],
  };
}
await mkdir(reportDir, { recursive: true });
let failed = false;
const summaries = [];
for (const item of scenarios) {
  const output = reportDir + '/lighthouse-' + item.name + '.json';
  console.log('[Lighthouse] Auditing ' + item.name + ' ' + item.url);
  try {
    await invoke('npx', [
      '--yes', 'lighthouse@' + LH_VERSION, item.url,
      '--only-categories=performance',
      '--form-factor=mobile',
      '--output=json',
      '--output-path=' + output,
      '--chrome-flags=--headless --no-sandbox --disable-dev-shm-usage --disable-gpu',
      '--quiet',
    ]);
    const summary = summarize(JSON.parse(await readFile(output, 'utf8')), item.name, item.url);
    summaries.push(summary);
    console.log('[Lighthouse] ' + item.name + ': score=' + summary.score +
      ', LCP=' + summary.lcpMs + 'ms, TBT=' + summary.tbtMs + 'ms, CLS=' + summary.cls +
      ', scripts=' + summary.scriptCount + '/' + summary.scriptTransferKb + 'KB, jsCPU=' + summary.jsExecutionMs + 'ms');
    console.log('[Lighthouse] Top JS: ' + JSON.stringify(summary.mostExpensiveScripts));
  } catch (error) {
    console.log('[Lighthouse] ' + item.name + ': unavailable: ' + String(error));
    summaries.push({ name: item.name, requestedUrl: item.url, error: String(error).slice(0, 550) });
    if (item.required) failed = true;
  }
}
await writeFile(reportDir + '/lighthouse-summary.json', JSON.stringify(summaries, null, 2) + '\n');
const markdown = [
  '# Mobile Lighthouse audit (GitHub Actions lab)',
  '',
  'Lighthouse ' + LH_VERSION + ' / headless Chrome; emulated CPU and network. Not field CWV or a guarantee of search rankings.',
  '',
  '| Scenario | Score | FCP ms | LCP ms | TBT ms | CLS | JS KB | JS evaluation ms |',
  '| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |',
  ...summaries.map(s => [
    '| ' + s.name, s.score ?? 'n/a', s.fcpMs ?? 'n/a', s.lcpMs ?? 'n/a',
    s.tbtMs ?? 'n/a', s.cls ?? 'n/a', s.scriptTransferKb ?? 'n/a',
    s.jsExecutionMs ?? 'n/a | ' + (s.error ? 'error: ' + s.error.replaceAll('|', ' ') : '')
  ].join(' | ')),
  '',
  'Production URLs may still have an older deployment than the PR build. Compare only runs in the same environment and version.',
  '',
].join('\n');
await writeFile(reportDir + '/lighthouse-summary.md', markdown);
console.log('[Lighthouse] Reports written to ' + reportDir);
if (failed) process.exitCode = 1;
