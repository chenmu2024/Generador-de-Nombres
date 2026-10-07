# GeneradorDeNombres.net — repository rules for AI coding agents

Maintained source: chenmu2024/Generador-de-Nombres, main. Ignore the unrelated -news repository. Apply https://github.com/chenmu2024/Website-Starter-Standard and its SEO-GEO-QUALITY-GATE.md whenever modifying this site.

## Locked SEO contract
- Never rewrite, merge, delete, translate or replace any of the **46 owner-approved route paths, keyword strings, titles and H1 values** without explicit owner approval and baseline migration.
- Exact fixture: tests/fixtures/seo-baseline.json; source: src/data/seoData.ts; keyword mapping src/data/keywordMaster.ts. VERIFIED means owner-approved existing target, **not search-metric validation**.
- New keyword/route requires real SERP intent research and src/utils/seoPageGate.ts; no mass-produced low-value variations.
- Preserve canonical URLs, robots/sitemap parity, real 404s, server-visible summaries, canonical linked hub/spoke graph, honest JSON-LD and image metadata.
- GEO extends core SEO: original helpful user tasks, self-contained verifiable answers, source/limit transparency. No AI-only ranking hacks, invented metrics or fictional testimonials.
- **Do not change Search vs model-training crawler preferences without explicit request.** llms.txt is optional metadata, not a ranking factor.

## Architecture and cost
- 46 Spanish topical indexable routes plus legal/support pages. Keep a single language version until validated localization exists; do not invent hreflang counterparts.
- Original tool logic runs in the browser; avoid paid APIs, servers, databases or new fixed fees.
- Use current dark palette and components documented in DESIGN.md and src/index.css; prioritize tool utility over decorative landing-page content. Do not shift H1, obscure primary input, or add content-only gimmicks.
- Treat cultural claims, historical meanings, player-name acceptance and trademark availability as unverified unless grounded in a relevant exact source.

## Acceptance
- L1: npm run lint && npm test && npm run seo:audit.
- L2: npm run build, which also runs scripts/verify-export.ts + scripts/seo-geo-release-audit.ts; Chromium and Lighthouse CI.
- Track actual build/browser/audit evidence and unresolved production checks in docs/SEO-GEO-RELEASE-EVIDENCE.md.
- Source standards at https://github.com/chenmu2024/Website-Starter-Standard; project route map and proof policy at docs/SEO-GEO-PROJECT-BRIEF.md.
- Never equate a local Lighthouse score or a successful CI with Search Console indexing, organic traffic, field CWV, AI citations or an updated production deployment.
