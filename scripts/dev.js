import { spawn } from 'node:child_process';

const rawArgs = process.argv.slice(2);
const filteredArgs = [];

for (let i = 0; i < rawArgs.length; i++) {
  const arg = rawArgs[i];
  if (arg === '--host') {
    if (rawArgs[i + 1] && !rawArgs[i + 1].startsWith('-')) {
      filteredArgs.push('-H', rawArgs[i + 1]);
      i++;
    } else {
      filteredArgs.push('-H', '0.0.0.0');
    }
  } else if (arg.startsWith('--host=')) {
    const hostVal = arg.split('=')[1];
    filteredArgs.push('-H', hostVal || '0.0.0.0');
  } else {
    filteredArgs.push(arg);
  }
}

if (!filteredArgs.includes('-p') && !filteredArgs.includes('--port')) {
  filteredArgs.push('-p', '3000');
}
if (!filteredArgs.includes('-H') && !filteredArgs.includes('--hostname')) {
  filteredArgs.push('-H', '0.0.0.0');
}

const child = spawn('npx', ['next', 'dev', ...filteredArgs], {
  stdio: 'inherit',
  env: process.env,
  shell: true,
});

child.on('exit', (code) => {
  process.exit(code ?? 0);
});
