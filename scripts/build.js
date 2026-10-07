import { spawnSync } from 'node:child_process';
import { cpSync, copyFileSync, existsSync, readFileSync } from 'node:fs';

for (const script of ['scripts/seo-governance-audit.ts', 'generate-sitemap.ts']) {
  const result = spawnSync(process.execPath, ['--import', 'tsx', script], { stdio: 'inherit' });
  if (result.status !== 0) process.exit(result.status ?? 1);
}
const result = spawnSync(process.execPath, ['node_modules/next/dist/bin/next', 'build'], {
  stdio: 'inherit', env: { ...process.env, NODE_ENV: 'production' },
});
if (result.status !== 0) process.exit(result.status ?? 1);
// Next's static OG image route is emitted without a .png suffix. Build an
// explicit image asset URL for social crawlers rather than relying on a CDN's
// MIME inference for an extensionless binary file.
const nextOg = 'out/opengraph-image';
const sharedOg = 'out/opengraph-image.png';
if (!existsSync(nextOg)) throw new Error('Missing generated Open Graph route: ' + nextOg);
if (readFileSync(nextOg).subarray(0, 8).toString('hex') !== '89504e470d0a1a0a') {
  throw new Error('Next Open Graph export is not a PNG image.');
}
copyFileSync(nextOg, sharedOg);
const verification = spawnSync(process.execPath, ['--import', 'tsx', 'scripts/verify-export.ts'], { stdio: 'inherit' });
if (verification.status !== 0) process.exit(verification.status ?? 1);
const releaseAudit = spawnSync(process.execPath, ['--import', 'tsx', 'scripts/seo-geo-release-audit.ts'], { stdio: 'inherit' });
if (releaseAudit.status !== 0) process.exit(releaseAudit.status ?? 1);
cpSync('out', 'dist', { recursive: true });
