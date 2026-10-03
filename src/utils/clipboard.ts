export async function copyText(text: string): Promise<boolean> {
  let timeout: ReturnType<typeof setTimeout> | undefined;
  try {
    await Promise.race([
      navigator.clipboard.writeText(text),
      new Promise<never>((_, reject) => {
        timeout = setTimeout(() => reject(new Error('Clipboard request timed out')), 2500);
      }),
    ]);
    return true;
  } catch {
    window.dispatchEvent(new CustomEvent('gdn-copy-error', { detail: text }));
    return false;
  } finally {
    clearTimeout(timeout);
  }
}
