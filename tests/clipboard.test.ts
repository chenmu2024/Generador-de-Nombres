import test from 'node:test';
import assert from 'node:assert/strict';
import { copyText } from '../src/utils/clipboard';

test('clipboard success, rejection and an unanswered request settle safely', async () => {
  const originalNavigator = Object.getOwnPropertyDescriptor(globalThis, 'navigator');
  const originalWindow = Object.getOwnPropertyDescriptor(globalThis, 'window');
  const errors: string[] = [];
  const setClipboard = (writeText: (text: string) => Promise<void>) => Object.defineProperty(globalThis, 'navigator', { configurable: true, value: { clipboard: { writeText } } });
  Object.defineProperty(globalThis, 'window', { configurable: true, value: { dispatchEvent: (event: CustomEvent<string>) => errors.push(event.detail) } });
  try {
    setClipboard(async text => { assert.equal(text, 'Sofía'); });
    assert.equal(await copyText('Sofía'), true);
    setClipboard(async () => { throw new Error('Permission denied'); });
    assert.equal(await copyText('denied'), false);
    setClipboard(() => new Promise(() => {}));
    assert.equal(await copyText('pending'), false);
    assert.deepEqual(errors, ['denied', 'pending']);
  } finally {
    for (const [key, descriptor] of [['navigator', originalNavigator], ['window', originalWindow]] as const) {
      if (descriptor) Object.defineProperty(globalThis, key, descriptor);
      else Reflect.deleteProperty(globalThis, key);
    }
  }
});
