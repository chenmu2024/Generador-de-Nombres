# GeneradorDeNombres.net — SEO/GEO Project Brief
Project baseline: 2026-10-07. Implements Website-Starter-Standard for the existing chenmu2024/Generador-de-Nombres repository. No work on -news. The existing 46 owner-approved keyword strings, URLs, Title and H1 remain immutable and are checked by tests/fixtures/seo-baseline.json.

## 1. Identity, audience and cost
Brand/Organization: GeneradorDeNombres.net; canonical domain https://generadordenombres.net/; primary language Spanish (es). Audience: Spanish-speaking people seeking names for games, social media, pets, people or businesses. Geography: not restricted/verified by first-party data. Original value: browser-only tools for generation, filtering, copying, shortlisting, Unicode spacing and editorial name suggestions. Business: ad-supported free utilities; revenue, rank, volume and country splits unverified. Hosting: existing static build; no paid APIs, databases or new recurring cost.

## 2. Approved keyword source and route/intent ownership
Source of truth: src/data/seoData.ts (exact keyword fields) + src/data/keywordMaster.ts (derived intent/ownership) + frozen fixture. VERIFIED in the code means existing owner-approved mapping, **not external SERP or metric verification**. Search Volume/KD/CPC and target-site GSC: unknown/unmeasured.

| Canonical route | Exact locked primary keyword | Current intent model | Policy |
| --- | --- | --- | --- |
| / | generador de nombres | tool | index / self-canonical |
| /nombres-free-fire | nombres para free fire | collection+tool | index / self-canonical |
| /nombres-roblox | nombres para roblox | tool | index / self-canonical |
| /nombres-instagram | nombres para instagram | tool | index / self-canonical |
| /nombres-equipos-futbol | nombres para equipos de futbol | tool | index / self-canonical |
| /nombres-japoneses | nombres japoneses | collection+tool | index / self-canonical |
| /nombres-perritas | nombres para perros hembras | collection+tool | index / self-canonical |
| /nombres-coreanos | nombres coreanos de mujer | collection+tool | index / self-canonical |
| /nombres-franceses | nombres franceses | collection+tool | index / self-canonical |
| /nombres-mayas | nombres mayas | collection+tool | index / self-canonical |
| /nombres-gatos | nombres para gatos | collection+tool | index / self-canonical |
| /nombres-gatos-negros | nombres para gatos negros | collection+tool | index / self-canonical |
| /nombres-gatos-machos | nombres para gatos machos | collection+tool | index / self-canonical |
| /nombres-peluches | nombres para peluches | collection+tool | index / self-canonical |
| /generador-free-fire | generador de nombres para free fire | tool | index / self-canonical |
| /espacios-invisible-ff | espacio invisible free fire | tool | index / self-canonical |
| /nombres-ff-unicos | nombres para free fire que nadie tenga | collection+tool | index / self-canonical |
| /nombres-ff-mujeres | nombres para free fire para mujeres | collection+tool | index / self-canonical |
| /nombres-clanes-ff | nombres para clanes de free fire | collection+tool | index / self-canonical |
| /nombres-anime | nombres de anime | collection+tool | index / self-canonical |
| /nombres-de-mujer | nombres de mujer | collection+tool | index / self-canonical |
| /nombres-de-nina | nombres de niña no comunes | collection+tool | index / self-canonical |
| /nombres-de-nino | nombres de niños con significado | collection+tool | index / self-canonical |
| /nombres-unisex | nombres unisex | collection+tool | index / self-canonical |
| /nombres-raros | nombres raros | collection+tool | index / self-canonical |
| /nombres-por-letra | nombres por letra | directory | index / self-canonical |
| /nombres-con-a | nombres con a | collection+tool | index / self-canonical |
| /nombres-con-b | nombres con b | collection+tool | index / self-canonical |
| /nombres-con-c | nombres con c | collection+tool | index / self-canonical |
| /nombres-con-e | nombres con e | collection+tool | index / self-canonical |
| /nombres-con-f | nombres con f | collection+tool | index / self-canonical |
| /nombres-con-m | nombres con m | collection+tool | index / self-canonical |
| /nombres-con-en | nombres con ñ | collection+tool | index / self-canonical |
| /nombres-con-y | nombres con y | collection+tool | index / self-canonical |
| /nombres-con-z | nombres con z | collection+tool | index / self-canonical |
| /nombres-de-dioses | nombres de dioses | collection+tool | index / self-canonical |
| /nombres-italianos | nombres italianos hombre | collection+tool | index / self-canonical |
| /nombres-rusos | nombres rusos | collection+tool | index / self-canonical |
| /nombres-griegos | nombres griegos | collection+tool | index / self-canonical |
| /nombres-ingles | nombres en ingles | collection+tool | index / self-canonical |
| /nombres-turcos | nombres turcos para niña | collection+tool | index / self-canonical |
| /nombres-chinos | nombres chinos para niña | collection+tool | index / self-canonical |
| /nombres-perros-machos | nombres de perros machos | collection+tool | index / self-canonical |
| /perritas-chihuahua | nombres para perritas chihuahua | collection+tool | index / self-canonical |
| /nombres-caballos | nombres de caballos | collection+tool | index / self-canonical |
| /nombres-para-tiendas | nombre para tienda que vende de todo | tool | index / self-canonical |

Secondary keywords remain in the exact original fields; do not translate, paraphrase, consolidate or silently change them. Current route coverage is 46 indexable SEO URLs plus four support/legal pages, generating 50 sitemap URLs.

## 3. Cannibalization / intent boundaries
Free Fire: /nombres-free-fire is editorial inspiration, /generador-free-fire handles personalized typing. Specific /nombres-ff-unicos, /nombres-ff-mujeres and /nombres-clanes-ff retain distinct selection/tag purposes. Pets: /nombres-gatos general hub and /nombres-gatos-negros /nombres-gatos-machos are narrower. Directory: /nombres-por-letra hub plus distinct A–Z selections; Ñ means contains Ñ, not begins Ñ. Culture pages disclose transliteration and source uncertainty. No route merge without first-party query-to-landing-page evidence and explicit approval for protected fields.

## 4. Indexation, faceted pages and URL policy
46 indexable SEO pages + four legal/support routes use canonical Spanish HTML. No indexable URLs for filters, in-browser nickname inputs, querystrings or internal search states. Root canonical has trailing slash; child canonicals have no trailing slash. Unknown routes must 404, not return a soft-404. Sitemap is generated from canonical routes with material lastmod dates only; no logo-as-universal-image entries. robots.txt links the canonical sitemap and permits public Search crawlers.

## 5. Crawlable internal-link model
Hub graph is coded in src/data/topicClusters.ts. Main hub: /. Supporting hubs: /nombres-free-fire, /nombres-de-mujer, /nombres-por-letra, /nombres-japoneses, /nombres-gatos, /nombres-roblox, /nombres-equipos-futbol. Main navigation plus contextual sibling links use real HTML anchors. BreadcrumbList JSON-LD must follow visible breadcrumbs and stable URLs. No orphan important pages; no forced repetitive exact-match anchor stuffing.

## 6. GEO/AI-search answer plan and original evidence
Each of the 46 pages has a distinct server-rendered editorial summary plus purpose, limitations and real interactive or curated value via src/data/editorialProfiles.ts. Free Fire answers distinguish generated text from actual in-game acceptance; Unicode visible grapheme counts are not an official acceptance test. Instagram/Roblox formatting is not username availability. Personal name etymology requires a source tied to the exact spelling; kanji, hangul, hanja, Cyrillic romanization require appropriate uncertainty. Store-name ideas are not trademark or domain clearance. FAQs must exist visibly; no invented usage numbers, reviews, fake citations or AI-specific doorway pages.

Important example targets: /generador-free-fire (copyable styled name and limitations), /nombres-free-fire (comparative examples vs creator), /nombres-instagram (real-name handle variants with unavailable-username caveat), /espacios-invisible-ff (Unicode code point examples), /nombres-por-letra (letter filtering semantics), /nombres-japoneses (writing ambiguity), /nombres-para-tiendas (non-clearance statement).

## 7. Evidence/source registry
- Google AI Search indexing: https://developers.google.com/search/docs/appearance/ai-features — no special Google AI-only schema; recheck on guideline changes.
- Sitemap and material lastmod: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap — recheck when URLs or page dates change.
- Structured data: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data — rich-result eligibility is separate; verify on schema changes.
- Search crawler directives: https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt — recheck crawler/host changes.
- Unicode segmentation: https://www.unicode.org/reports/tr29/ — boundaries, not game acceptance.
- Editorial method and corrections: https://generadordenombres.net/sobre-nosotros#metodologia and /contacto — site identity; not independent proof of each name meaning.
- Specific etymological/platform facts must cite relevant authoritative item-level sources where they appear. No blanket source attribution.

## 8. Entity and Schema policy
One canonical publisher Organization #organization, WebSite #website, and per-route WebPage/CollectionPage; WebApplication only for real interactive experiences. BreadcrumbList represents the same hierarchy users see. FAQPage must match visible questions and answers; do not promise FAQ rich results. Do not invent expert authors, ratings, SearchAction without URL-backed search, or HowTo rich result eligibility. Machine-readable markup reflects real page content only.

## 9. International and programmatic policy
Currently a single Spanish language; hreflang N/A. No fake es-MX/pt-BR counterparts or machine-translated approved keywords. Programmatic expansion requires real SERP/intent checks, unique tool or data value, quality gate in src/utils/seoPageGate.ts, and human acceptance. Heuristic thresholds are internal QA rather than Google ranking rules.

## 10. Media, social and AI crawler policy
One genuine branded 1200×630 preview is exported as /opengraph-image.png and referenced by Open Graph and Twitter/X previews. Relevant photos and screenshots get appropriate alt and dimensions; site logo is not unique relevant image for every sitemap entry. Existing llms.txt is optional interoperability metadata and not a Google Search requirement. Google-Extended/training crawler preferences are separate from the Search indexing policy; no change to owner preferences without explicit request.

## 11. L1, L2, L3 audits and sign-off
L1: npm run lint, npm test, npm run seo:audit. L2: npm run build invokes scripts/verify-export.ts and scripts/seo-geo-release-audit.ts, creating reports/seo-geo-release-audit.json; CI then performs Chromium and Lighthouse lab checks. L3: requires first-party GSC (28 settled days of page/query/country/device, index coverage and prior-period baseline), field CWV and actual AI referrals if measurable. Third-party GSC references are not target-domain results. Production verification must check deployment SHA, HTTP statuses, robots, sitemap, OG media, redirects, WAF Search crawler access, and functionality: a successful GitHub build alone does not prove production deployment. Do not claim an unobserved release, indexing, ranking, AI citation or additional owner approval.

Approved/frozen: existing route/keyword/Title/H1 snapshot. Pending external proof: first-party GSC permission, country/SERP metrics, crawler logs and live deployment version. All data gaps remain unknown, never invented as zero.
