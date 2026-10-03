import { spawnSync } from 'node:child_process';
import { cpSync } from 'node:fs';

for (const script of ['scripts/seo-governance-audit.ts', 'generate-sitemap.ts']) {
  const result = spawnSync(process.execPath, ['--import', 'tsx', script], { stdio: 'inherit' });
  if (result.status !== 0) process.exit(result.status ?? 1);
}
const result = spawnSync(process.execPath, ['node_modules/next/dist/bin/next', 'build'], {
  stdio: 'inherit', env: { ...process.env, NODE_ENV: 'production' },
});
if (result.status !== 0) process.exit(result.status ?? 1);
const verification = spawnSync(process.execPath, ['--import', 'tsx', 'scripts/verify-export.ts'], { stdio: 'inherit' });
if (verification.status !== 0) process.exit(verification.status ?? 1);
cpSync('out', 'dist', { recursive: true });
