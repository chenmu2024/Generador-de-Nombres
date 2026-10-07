'use client';

export default function PrivacySettingsButton() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event('gdn-privacy-settings'))}
      className="hover:text-zinc-300"
    >
      Preferencias de privacidad
    </button>
  );
}
