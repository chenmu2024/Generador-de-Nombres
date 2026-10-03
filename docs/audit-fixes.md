# Website audit fixes — 2026-10-03

## Preserved SEO contract

The 46 existing keyword pages retain their exact route, keyword string, title and H1. An independent fixture captured from the original revision checks these fields in both the regression suite and SEO audit. The exported HTML is checked for emitted keywords, canonical URLs, one H1 and one main landmark. No pages were consolidated or added to target new keywords.

## Implemented

- Replaced invented A–Z fallback names with explicit name selections for all 27 letters; route letters initialize the correct selection. Ñ is explicitly a “contains Ñ” selection. Removed unsupported meanings from the tool and corrected the Ñ article with source links.
- Count and trim grapheme clusters, preserving styled Unicode, accents and compound emoji; repaired invisible-space splitting and Fraktur mappings. Visible length does not guarantee game acceptance.
- Selection, TXT export and roulette use the current filtered results. Changing filters resets selection. Roulette timers finish normally and stop on close/unmount.
- Clipboard actions await success; failures offer selectable text in a manual-copy dialog. Favorites validate stored data, tolerate blocked/full storage and synchronize changes.
- Instagram suggestions pass the same basic format checks, including the 30-character boundary. Empty/invalid input gives guidance. Removed unsupported Roblox compatibility promises.
- Added searchable name selections to eight categories that previously only decorated a default word; kept core lists in the initial static HTML.
- Added homepage task shortcuts; corrected brand links and static “trends” wording. Reduced mobile Cookie obstruction, repaired desktop navigation overflow, enlarged mobile buttons and separated card actions from text.
- Bound form labels, exposed checked/pressed states and live messages, added modal focus trapping and restoration, and removed nested main landmarks.
- Added a footer privacy-preference entry. Optional analytics require consent; event hooks recheck consent and strip query/hash information. Feedback saves a per-page choice and sends an anonymous event only with consent.
- Device speech now checks for a matching language voice and reports unavailability. Readings are approximate device synthesis. Editorial text states the limits of unverified etymology.
- Contact prepares email rather than claiming successful delivery, preserves entered text, and provides an email-copy fallback.
- Repaired five corrupt raster assets from the existing SVG logo and added a valid 1200×630 share image. PNG export converts unsupported modern colors in its clone and creates a Blob download.
- Added a host-specific permanent redirect from the production Vercel alias to the canonical domain, preserving preview deployments and existing legacy redirects.
- Made Windows build/preview scripts portable, removed unused legacy dependencies, patched Next.js and the vulnerable transitive nanoid version, and added regression checks to CI.

## Validation

- Frozen Bun 1.4.2 install: passed.
- TypeScript and production export: passed.
- Eleven regression tests: passed (SEO preservation, Unicode boundaries, filters, whitespace, Instagram boundaries, alphabet data/rendering, storage failures, clipboard failures, consent withdrawal, cultural content and speech voice availability).
- Export audit: 50 pages, one H1/main each, preserved emitted keywords/canonicals, 5,009 resolving internal links.
- Raster decoding: all repaired assets and share image decoded successfully.
- Bun dependency audit: no known vulnerabilities found across 156 packages.
- Browser: generation, Unicode count, short filters, select-all, clipboard, favorites, alphabet initial/Ñ selection, Italian search/copy/empty state, Instagram invalid and maximum-length candidates, privacy reopening, mobile menu focus trap/Escape and roulette completion exercised.
- Responsive checks: 360, 390, 768, 1280 and 1440-pixel widths; desktop navigation overflow repaired.
- Saved-file verification passed in isolated Chrome 154: the actual PNG download decoded as 764×650 (207,036 bytes) and was visually inspected. The actual filtered TXT contained 528 names, all at most 12 graphemes with no isolated surrogates; the selected TXT contained exactly the selected first name. Browser download-completed events and disk reads confirmed both formats. The automation's Windows path separator issue was corrected in the test setup; no site download change was needed.
- Homepage axe 4.12.1 at 390×844: 45 passing rules, zero definite violations. One incomplete contrast rule still needs manual judgment for gradients and decorative symbols. Fixed small-text/button/footer contrast and the quick-symbol heading level without changing H1.
- Unthrottled local Chrome lab: homepage desktop LCP 68 ms, mobile LCP 364 ms; CLS 0. Production homepage sample LCP 1,084 ms / CLS 0 before this PR is deployed. These are separate local/network environments, not proof of a percentage improvement or a Lighthouse score. No field INP or CrUX result is claimed.
- Removed remaining native-recording claims; clarified Korean meanings require the specific hanja, corrected known Japanese/French errors and marked unsupported Mayan translations as unverified. Maya and Nahuatl are distinguished; decorative emoji are not represented as Mayan glyphs. Added source links and cultural-content/speech regression tests.

## Remaining external checks

These changes do not establish platform username availability, game character acceptance, native pronunciation, legal compliance or comprehensive etymological verification of all historical article data. Cultural articles still require source-by-source editorial review. Search Console/CrUX access is needed for ranking, keyword cannibalization and real-user performance conclusions. No invented performance score or SERP verification is claimed.

The production host redirect requires deployment. This branch is not a production release; review before merging/deploying. Sample voice behavior on target devices before release. Full historical etymology review and real-user performance remain outstanding.

## Local checks

```text
bun install --frozen-lockfile
bun run lint
bun run test
bun run build
bun run start
```

The preview is available at http://127.0.0.1:3000 after building. It serves the static `out` directory and is a local validation server.
