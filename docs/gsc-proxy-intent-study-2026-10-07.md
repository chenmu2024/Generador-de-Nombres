# GSC search-intent reference — 2026-10-07

> **Important ownership/data boundary:** `generadordenombres.net` was **not available** among verified Search Console properties connected to GSC Wizard on 2026-10-07. Attempting to register the URL-prefix property returned `not_found: Site https://generadordenombres.net/ not found in your Google Search Console account`. **No figures in this document measure the target site**, and no target-site growth or ranking improvements are claimed here.

## Verified reference set

Read-only GSC Wizard live Search Console API. Web search, settled 28-day period **2026-09-07 to 2026-10-04** (the unsettled 2026-10-05 onward dates are excluded).

| Connected reference property | Clicks | Impressions | CTR | Avg position |
| --- | ---: | ---: | ---: | ---: |
| `sc-domain:generadordelettering.org` | 23,564 | 392,946 | 6.00% | 6.41 |
| `https://conversordeletrasbonitas.org/` | 87,540 | 1,604,880 | 5.45% | 6.80 |

These properties have different rankings, inventories and audiences; do not attribute their traffic to GeneradorDeNombres.net.

### What searchers actually request on generadordelettering.org

| Search query | Clicks | Impressions | CTR | Avg position | Implication for target-site UX |
| --- | ---: | ---: | ---: | ---: | --- |
| generador de nombres para free fire | 1,777 | 23,794 | 7.47% | 4.33 | Lead directly to input-and-generate workflow on `/generador-free-fire`. |
| crear nombres para free fire | 415 | 4,748 | 8.74% | 4.99 | Ensure typing, generation and copying work without hunting through an article. |
| nombres para free fire | 398 | 12,073 | 3.30% | 7.93 | Keep `/nombres-free-fire` useful as an inspiration/list page rather than duplicating the generator. |
| nombre para free fire | 246 | 8,002 | 3.07% | 7.89 | Same list vs tool distinction; offer a direct path into the generator. |
| simbolos para free fire | 361 | 5,639 | 6.40% | 5.36 | Provide an easily discoverable symbol/spacing route. |
| generador de nombres para instagram | 389 | 991 | 39.25% | 2.47 | Put creation controls on `/nombres-instagram`. |
| nombres para instagram | 309 | 5,486 | 5.63% | 5.11 | Provide example choices and editing, not only a format checker. |
| nombres para instagram con tu nombre | 245 | 656 | 37.35% | 2.06 | Allow someone to type their real name and generate safe syntax candidates. |
| creador de nombres para ig | 275 | 555 | 49.55% | 2.19 | Make intent immediately actionable. |

The top **`generador de nombres para free fire`** query sent **1,754 of 1,777 reported query-page clicks** to the reference site's `/herramientas/letras-free-fire`, but only 26 clicks to its dedicated `/herramientas/generador-de-nombres-para-free-fire` URL. This is evidence of **reference-site search landing-page mismatch**, not proof that our own pages are cannibalizing. Keep our own generator and list intents separated, and assess actual target-domain query-page overlap when data becomes available.

On the reference site, mobile accounted for **21,513 / 23,564 clicks (91.3%)**. Mexico provided **5,941 clicks**. This supports a mobile-first Spanish UX test plan, but not any ranking claim about this repo.

## Implemented from reference signals (not from target GSC)

1. `/nombres-instagram`: name-and-surname input, accent folding, verified-basic-format username candidates, style labels, single and bulk copy. No availability/ownership claims.
2. Core Free Fire paths: top-of-page task navigation clarifies *generate from my text* vs *browse inspiration* vs *invisible character* vs *clan tags*.
3. Regression coverage for URL intent targets, personalized names, and browser-level copy/edit entry.
4. Existing SEO primary/secondary keywords, canonical URLs, `title`, `h1` and structured-data paths remain locked.

## Blocked until first-party GSC data exists

To replace proxy signals with evidence from the actual site:

1. In Google Search Console, verify `generadordenombres.net` (ideally a **domain property**, DNS TXT verification). Verify access for the Google account connected to GSC Wizard. The attempt to register the URL-prefix property on 2026-10-07 returned **not found**, so this step is still required.
2. Add/select the verified site in GSC Wizard and query **28 settled days** of site/page/query/country/device data, ideally with a prior-period comparison.
3. Map each query-page pair onto the locked keyword master: compare `/nombres-free-fire` and `/generador-free-fire`, confirm `/nombres-instagram` performance, and flag unexpected competing landing pages.
4. Prioritize by actual **impressions + position 4–20 + low CTR**, verified indexability and user intent. Before changing a title/H1/keyword/URL, obtain the owner's explicit approval because those fields are locked.
5. Keep performance experiments causal: mark deployment dates; compare the same settled data sources and enough time after indexing. GSC CTR is not a direct A/B test, and a reference-site ranking is not a target-site forecast.

**Sources:** authenticated GSC Wizard `get_site_summary`, `query_search_analytics`, `query_devices`, `query_countries`, and page-filtered query reports; snapshot queried 2026-10-07, settled through 2026-10-04. GSC query tables can omit anonymous queries; row totals need not equal the unfiltered site aggregate.
