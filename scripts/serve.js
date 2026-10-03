import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';

const root = resolve('out');
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.xml': 'application/xml', '.txt': 'text/plain', '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp', '.woff2': 'font/woff2' };
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
    let data;
    try { data = await readFile(file); }
    catch { response.statusCode = 404; file = resolve(root, '404.html'); data = await readFile(file); }
    response.setHeader('Content-Type', types[extname(file)] || (file.endsWith('opengraph-image') ? 'image/png' : 'application/octet-stream'));
    response.end(data);
  } catch { response.writeHead(400).end('Bad request'); }
}).listen(Number(process.env.PORT || 3000), '127.0.0.1', () => console.log('Static preview: http://localhost:' + (process.env.PORT || 3000)));
