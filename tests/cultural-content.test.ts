import test from 'node:test';
import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import KoreanNamesTool from '../src/components/tools/KoreanNamesTool';
import JapaneseNamesTool from '../src/components/tools/JapaneseNamesTool';
import MayaNamesTool from '../src/components/tools/MayaNamesTool';
import { seoData } from '../src/data/seoData';
import { speakName } from '../src/utils/speech';

test('cultural results distinguish unverified etymology and device speech', () => {
  const props = { handleCopyTrending: () => {} };
  const korean = renderToStaticMarkup(React.createElement(KoreanNamesTool, props));
  assert.match(korean, /hanja/);
  assert.doesNotMatch(korean + seoData['nombres-coreanos'].seoText, /Agua pura e inmaculada|Pilar fuerte y honorable|Sabiduría profunda/);
  const japanese = renderToStaticMarkup(React.createElement(JapaneseNamesTool, props));
  assert.doesNotMatch(japanese, /Flor de nieve en la colina|Cinco leyes de la alta nobleza|audio real/);
  const maya = renderToStaticMarkup(React.createElement(MayaNamesTool, props));
  assert.match(maya, /pendientes de verificación/);
  assert.doesNotMatch(maya + seoData['nombres-mayas'].seoText, /Serpiente negra de fuego|Siempre serás amada por los dioses/);
  assert.doesNotMatch(JSON.stringify(Object.values(seoData).map(({subtitle,seoText,faqs}) => ({subtitle,seoText,faqs}))), /audio real|voz real|locución nativa/);
});

test('speech reports missing language voices and uses the requested voice', () => {
  const priorWindow = Object.getOwnPropertyDescriptor(globalThis, 'window');
  const priorUtterance = Object.getOwnPropertyDescriptor(globalThis, 'SpeechSynthesisUtterance');
  let errors = 0;
  let spoken: {text: string; lang?: string} | undefined;
  const voices: {lang: string}[] = [];
  try {
    Object.defineProperty(globalThis, 'window', {configurable:true, value:{
      dispatchEvent: () => { errors++; },
      speechSynthesis: {getVoices: () => voices, cancel: () => {}, speak: (value: typeof spoken) => {spoken=value;}}
    }});
    Object.defineProperty(globalThis, 'SpeechSynthesisUtterance', {configurable:true, value:class { constructor(public text: string) {} }});
    speakName('桜', 'ja-JP');
    assert.equal(errors, 1);
    assert.equal(spoken, undefined);
    voices.push({lang:'es-ES'}, {lang:'ja-JP'});
    speakName('桜', 'ja-JP');
    assert.equal(spoken?.text, '桜');
    assert.equal(spoken?.lang, 'ja-JP');
    assert.equal(errors, 1);
  } finally {
    if(priorWindow) Object.defineProperty(globalThis, 'window', priorWindow); else Reflect.deleteProperty(globalThis, 'window');
    if(priorUtterance) Object.defineProperty(globalThis, 'SpeechSynthesisUtterance', priorUtterance); else Reflect.deleteProperty(globalThis, 'SpeechSynthesisUtterance');
  }
});
