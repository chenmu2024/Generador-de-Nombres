export function speakName(text: string, language: string): void {
  const report = () => window.dispatchEvent(new CustomEvent('gdn-audio-error', { detail: 'No hay una voz disponible para este idioma. La lectura depende de las voces del dispositivo.' }));
  if (!('speechSynthesis' in window)) { report(); return; }
  const voice = window.speechSynthesis.getVoices().find(item => item.lang.toLowerCase().startsWith(language.slice(0, 2).toLowerCase()));
  if (!voice) { report(); return; }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = voice;
  utterance.lang = voice.lang;
  utterance.rate = 0.9;
  utterance.onerror = report;
  window.speechSynthesis.speak(utterance);
}
