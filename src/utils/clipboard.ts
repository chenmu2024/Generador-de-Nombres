export async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    window.dispatchEvent(new CustomEvent('gdn-copy-error', { detail: text }));
    return false;
  }
}
