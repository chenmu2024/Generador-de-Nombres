import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import { brotliCompress, gzip, constants as zlibConstants } from 'node:zlib';
import { promisify } from 'node:util';

const root = resolve('out');
const port = Number(process.env.PORT || 3000);
const types = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript',
  '.css': 'text/css', '.json': 'application/json',
  '.xml': 'application/xml', '.txt': 'text/plain',
  '.svg': 'image/svg+xml', '.png': 'image/png',
  '.webp': 'image/webp', '.woff2': 'font/woff2',
};
const compressible = new Set(['.html', '.js', '.css', '.json', '.xml', '.txt', '.svg']);
const encodeBrotli = promisify(brotliCompress);
const encodeGzip = promisify(gzip);
// Reuse compressed assets for the static export. The preview never writes into "out".
const cache = new Map();

async function loadAsset(filename) {
  if (!cache.has(filename)) {
    cache.set(filename, (async () => {
      const body = await readFile(filename);
      const entry = { body };
      if (body.length >= 1024 && compressible.has(extname(filename))) {
        const [br, gz] = await Promise.all([
          encodeBrotli(body, {
            params: { [zlibConstants.BROTLI_PARAM_QUALITY]: 5 },
          }),
          encodeGzip(body, { level: 6 }),
        ]);
        entry.br = br;
        entry.gz = gz;
      }
      return entry;
    })());
  }
  return cache.get(filename);
}

createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    let file = resolve(root, '.' + pathname);
    if (file !== root && !file.startsWith(root + sep)) { response.writeHead(403).end(); return; }
    if (file === root) file = resolve(root, 'index.html');
    try {
      if ((await stat(file)).isDirectory()) {
        try { await stat(resolve(file, 'index.html')); file = resolve(file, 'index.html'); }
        catch { file += '.html'; }
      }
    } catch { if (!extname(file)) file += '.html'; }

    let asset;
    try { asset = await loadAsset(file); }
    catch { response.statusCode = 404; file = resolve(root, '404.html'); asset = await loadAsset(file); }

    const extension = extname(file);
    response.setHeader('Content-Type', types[extension] || (file.endsWith('opengraph-image') ? 'image/png' : 'application/octet-stream'));
    response.setHeader('Vary', 'Accept-Encoding');
    if (file.includes(`${sep}_next${sep}static${sep}`)) {
      response.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    }

    const accepts = String(request.headers['accept-encoding'] || '');
    let body = asset.body;
    if (accepts.includes('br') && asset.br) {
      response.setHeader('Content-Encoding', 'br');
      body = asset.br;
    } else if (accepts.includes('gzip') && asset.gz) {
      response.setHeader('Content-Encoding', 'gzip');
      body = asset.gz;
    }
    response.setHeader('Content-Length', body.length);
    response.end(request.method === 'HEAD' ? undefined : body);
  } catch {
    response.writeHead(400).end('Bad request');
  }
}).listen(port, '127.0.0.1', () => console.log('Static preview (Brotli/gzip): http://localhost:' + port));
