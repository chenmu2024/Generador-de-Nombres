import { readStorage } from './browserStorage';

export function privacyEvent<T extends { url: string }>(event: T): T | null {
  if (readStorage('cookie_consent_choice') !== 'accepted') return null;
  const url = new URL(event.url);
  url.search = '';
  url.hash = '';
  return { ...event, url: url.toString() };
}
