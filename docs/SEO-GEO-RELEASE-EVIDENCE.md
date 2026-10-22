# SEO/GEO Release Evidence — GeneradorDeNombres.net

> Release candidate for PR #36 (2026-10-07), aligned with chenmu2024/Website-Starter-Standard. **Use this as source-specific evidence, not a promise of rankings or deployment.** Machine-readable per-page evidence is generated during build and uploaded to the GitHub Actions job as seo-geo-release-N.

## Release identity

- Production domain: https://generadordenombres.net/
- Maintained repository: https://github.com/chenmu2024/Generador-de-Nombres
- PR and diff: https://github.com/chenmu2024/Generador-de-Nombres/pull/36
- Fully green candidate job: GitHub Actions [run 37568456257](https://github.com/chenmu2024/Generador-de-Nombres/actions/runs/37568456257) on prior source HEAD 1e8148d5a7d6241eb1a0988fd4696de3e4b97d7a; **later documentation/artifact-only commits must also pass their own checks before merge**.
- Date audited: 2026-10-07.
- Last authoritative keyword contract: tests/fixtures/seo-baseline.json.
- Programmatic route data: docs/SEO-GEO-PROJECT-BRIEF.md; src/data/keywordMaster.ts; src/data/topicClusters.ts.
- L2 machine-readable check: reports/seo-geo-release-audit.json (generated per build; attached from CI when artifact upload is enabled).

## 1. Build and deterministic evidence

| Gate | Method | Observed result in green run #88 |
| --- | --- | --- |
| TypeScript | bun run lint | PASS |
| Regression | bun run test | PASS: 65; failed: 0 |
| Keyword/URL/Title/H1 fixture | scripts/seo-governance-audit.ts | PASS: 46 VERIFIED/LOCKED targets, no drift |
| Static export | bun run build / scripts/verify-export.ts | PASS: 50 distinct pages, one H1/main per page |
| Crawlable internal links | scripts/verify-export.ts | PASS: 5,872 internal href destinations resolve in export |
| Sitemap coverage | scripts/seo-geo-release-audit.ts | PASS: 46 indexable canonical targets + 4 support routes = 50 |
| OG and Twitter social asset | L2 release audit | PASS: shared PNG exported, actual PNG signature, correct social image URL and per-page OG URL/title/description |
| Snippet extractability | L2 release audit | PASS: unique server-rendered summary/focus for every one of 46 topics |
| Primary intent ownership | L2 release audit | PASS: unique primary keyword target for each of 46 routes; no new uncontrolled indexable facets |
| Robots and accidental noindex | L2 release audit | PASS static assets and source-level configuration |
| Hreflang parity | N/A | Single Spanish locale; no fake equivalents or hreflang advertised |

These deterministic checks do not establish the HTTP status, indexing state or AI answer citation of the post-merge production URL.

## 2. Raw-HTML / schema parity

Samples validated in the exported 46-page loop include /, /generador-free-fire, /nombres-free-fire, /nombres-instagram, /nombres-por-letra, /nombres-japoneses, /nombres-gatos and /nombres-para-tiendas.
- One server-rendered canonical and indexable HTML; original H1 and meta keywords unchanged.
- One connected Organization/WebSite/appropriate WebPage or CollectionPage graph; WebApplication for actual tool use, visible FAQ text matches FAQPage graph, BreadcrumbList on child routes (existing scripts/verify-export.ts and tests/seo-geo.test.ts).
- Distinct original summary/limitations from editorialProfiles, with 27 additional reviewed use-case/verification examples.
- No claims about Google eligibility for FAQ rich results or any special AI-rich schema.

## 3. Content / GEO decisions

- No new indexable AI-query landing pages; no duplicated generic longform expansion.
- No fake user reviews, ranking statistics, scraped keyword metrics, made-up etymologies or supposed account availability.
- Homepage and Free Fire article removed unsupported comparative superiority and absolute Unicode/game compatibility wording.
- Optional llms.txt accurately distinguishes site purpose and claims; it is not a Google Search or AI Overviews requirement.
- Common site logo is not falsely tagged as a unique image for every sitemap page.
- Crosslinks, real HTML summaries and use-case-specific warnings are user-facing, not hidden text.

## 4. UX/Performance lab (green run #88, not field CWV)

| Test | Environment | Observed |
| --- | --- | --- |
| Responsive pages | Chromium 360px | 50/50 routes with no horizontal page overflow or visibly broken images |
| Mobile/tablet spot checks | Chromium 390px / 768px | 9 mobile representative pages + tablet checks passed |
| Interaction smoke | Chromium | favorites, search, clipboard, nickname selection, Free Fire, Instagram and contact draft flows passed |
| Home | local Lighthouse lab | Performance **93**, LCP **2,786 ms**, TBT 172 ms, CLS 0 |
| Cultural names | local Lighthouse lab | Performance **95**, LCP **2,749 ms**, TBT 110 ms, CLS 0 |
| Existing production homepage (prior release) | Lighthouse lab fetched before merging PR #36 | Performance **95**, LCP **1,998 ms**, TBT 239 ms, CLS 0 |
| Field CrUX LCP/INP/CLS | unconnected first-party data | **UNKNOWN**; not interchangeable with local lab |
| Cross-device keyboard/color contrast audit for all pages | not exhaustively run | **NOT YET PROVEN**; browser script tests interactions but isn't full WCAG conformance |

**Open optimization:** repeat local mobile LCP samples and inspect initial hero/render budget; local single-run LCP exceeded the 2.5s good-field guideline, though this is not itself field CWV.

## 5. Production verification boundary

Not assumed merely from green CI:
- Deployment of PR #36 merge commit to generadordenombres.net: **pending until merged and host version is confirmed**.
- Live production social image https://generadordenombres.net/opengraph-image.png: **needs post-deploy HTTP 200 + image/png check** (static export file is verified locally).
- Live sitemap/robots/primary URLs: **verify post-deployment** in the actual hosting configuration. Static export and live older homepage were fetched in lab, but they do not prove this release has reached the domain.
- Old Vercel alias redirects and host-specific headers are configured in vercel.json; enforcement depends on actual hosting path.
- Googlebot/OAI-SearchBot genuine IP/WAF access: unknown without CDN logs. A simulated User-Agent alone cannot prove genuine bot access.

## 6. Search Console / AI-search

The currently connected account did not have first-party verified GSC access to generadordenombres.net as of the cited baseline review; **do not report target-site clicks, impressions, country ranking or CTR from another site**. Proxy-site GSC signals are strictly separated in docs/gsc-proxy-intent-study-2026-10-07.md.

Follow-up only once actual GSC ownership/access exists: 28 settled days by URL, query, country and device, canonical selection, indexed coverage, multimodal/image-input signals where relevant; compare matching pre/post periods. Google AI Overviews/AI Mode results are included in Web search reporting, not a separately measurable AI-visibility score.

## 7. Drift baseline and remaining items

- Locked code baseline: tests/fixtures/seo-baseline.json (46 exact id/path/title/h1/keywords records).
- L2 output JSON: reports/seo-geo-release-audit.json (route, canonical, intent, hub, answer length and findings).
- Performance reports: GitHub Actions lighthouse-mobile-N artifact.
- PR #36 changed template, source, sitemap and governance only; full future drift checks should diff canonical, OG/Twitter media, schema nodes, lastmod, navigability, exact keyword owner and route count.
- Open actions with identifiable owner: **site owner/host** verifies domain deployment SHA, live OG MIME response, sitemap health and WAF crawler access; **site owner** grants first-party GSC access when useful; **developer** continues LCP/performance follow-up when field/lab regression appears.
- No claimed ranking/traffic/AI citation gain or official endorsement.

## 8. Sources

- Primary: https://developers.google.com/search/docs/appearance/ai-features
- Primary: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
- Primary: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- Primary: https://developers.google.com/search/docs/appearance/core-web-vitals
- Executable evidence: commit/job output of green CI #88 and project test suite; no manual extrapolation to GSC.


## 9. Google Search Console HTML verification — 2026-10-22

- Scope: add only the owner-supplied Google verification token through `metadata.verification.google` in `src/app/layout.tsx`; preserve all approved routes, keywords, titles, H1 values, canonicals and crawler preferences.
- Source change: `17e95c9da9b26e949dfbc4017962d7e3b7ec0148`; GitHub Vercel commit status reported success for deployment `9QZvEDJpHN1wsS1KaB2KVQHPr5yh`.
- Local checks: `npm run lint` PASS; `npm test` PASS (65/65); `npm run seo:audit` PASS; `npm run build` PASS, including static export verification (50 pages, 5,866 resolving internal links) and SEO/GEO release audit (46 locked indexable routes).
- Export assertion: the supplied `google-site-verification` meta tag occurs exactly once inside the exported homepage `<head>`, before `<body>`.
- Production check: `https://generadordenombres.net/` returned HTTP 200 and its raw `<head>` contained the exact supplied token after deployment.
- Search Console: in the signed-in owner account, submitted the HTML tag method for `https://generadordenombres.net/`; Google displayed `已完成所有权验证` (ownership verified), method `HTML 标记` (HTML tag).
- Keep the verification metadata deployed to retain verification. Ownership verification does not prove indexing, ranking, traffic or field Core Web Vitals. Earlier unverified-access statements above describe their historical baseline and are superseded only for this ownership check.
- Browser/Chromium interaction in this change was limited to the Search Console verification workflow. Lighthouse and a new full responsive visual audit were NOT RUN for this invisible metadata-only change.


## 10. Symbols library release — 2026-10-22

- Scope: one route /simbolos-para-free-fire. Original 46 locked route/title/H1/keyword records preserved by SHA-256 regression; approved fixture appends one entry.
- PASS: npm run lint; npm test (67/67); npm run build, including SEO governance, static export verification (51 pages / 6057 resolving internal links), and SEO/GEO release audit (47 locked indexable routes).
- PASS: raw HTML contains the symbol catalogue, single H1, metadata, self-canonical, FAQ/Breadcrumb/WebApplication schema; sitemap now lists 51 URLs. Search Console verification metadata is retained.
- PASS in Chromium browser: name/code-point and accent-insensitive search; category filtering; empty results; individual clipboard and full nickname clipboard equality; empty nickname disables copy/handoff; paired frames; replacing a frame with one symbol removes the unmatched endpoint; URL-encoded nickname transfer to the existing generator (Álex, emoji, ampersand); feedback remains visible with composer collapsed.
- PASS: widths 360/390/768/1024/1440 have no horizontal page overflow and expose search within the first viewport. Browser error/warning log for the new page was empty.
- Lighthouse mobile lab: see reports/lighthouse-symbols-release.json and UI release evidence. Lab values are not field CWV or ranking evidence.
- SEO gate returned MERGE because the query was an existing secondary keyword; the explicit owner-approved task split and unchanged original keyword mapping are documented in SEO-GEO-PROJECT-BRIEF.md. No automated CREATE pass or numeric demand is claimed.
- Production checks: PASS after Vercel successfully deployed source commit 13c426341a2d5426b1deec1d6a53f2182518ca7a (deployment 94y6zpd3g8875BiUhZyRJayhF8TS): HTTP 200, correct new-page canonical, one H1, server-visible symbol catalogue, sitemap membership, existing generator link to the new page, and preserved Google verification metadata. The live browser rendered the U+2605 search result; the saved task screenshot shows the deployed catalogue. Clipboard equality and nickname-transfer interaction were fully verified on the local production export; slow remote automation prevented an equivalent complete production interaction assertion. No GSC indexing/ranking gain is claimed.
- Revert the symbols-library commit to roll back the new route and its entries. Previous Search Console verification remains in the parent commit.
