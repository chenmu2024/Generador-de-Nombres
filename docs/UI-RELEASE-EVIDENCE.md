# Symbols library UI release evidence — 2026-10-22

Mode: Operate; reuse incumbent design tokens.

PASS — browser flow: search by Unicode U+2605, accent-insensitive corazon (5 matches), category selection, no matches/reset, symbol copy ★, complete copy 『Álex 👑&』, empty nickname disabled state, paired decoration, removal of unmatched frame endpoint, generator handoff, visible copy feedback while composer is collapsed.

PASS — responsive layout: 360 / 390 / 768 / 1024 / 1440px, no horizontal page overflow, search within first viewport. Labeled native inputs, buttons, radios and details; keyboard focus test recorded after completion. No new animation or external service.

PASS — TypeScript, 67 regression tests, production build and SEO/GEO static-export audits. Mobile Lighthouse final report is reports/lighthouse-symbols-release.json; Final mobile lab scores: performance 82, accessibility 100, best practices 100, SEO 100; LCP 2760 ms, TBT 510 ms, CLS 0. An earlier run before the final feedback-only change scored performance 96 with TBT 119 ms; variation is recorded rather than treated as a guaranteed score. Field INP/CWV remains unknown.

NOT RUN — physical iOS/Android devices, exhaustive screen-reader audit, field CrUX/INP, external-game character acceptance. This page explicitly makes no compatibility or availability promise.

Production interaction and screenshots: pending publication at commit preparation.
