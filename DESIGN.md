# GeneradorDeNombres.net — current design-system contract
Documented for Website-Starter-Standard compatibility, 2026-10-07. This **records existing actual tokens and components**; no redesign or replacement brand is proposed in this SEO/GEO release.

## Product and reference principles
A Spanish naming/Unicode-utility website for fast typing, comparing, copying and filtering. Its UX hierarchy is: visible H1/user intent → working tool → evidence-based editorial help → relevant internal links. Reuse common tool pages and components. The generic recommendations of VoltAgent/awesome-design-md inform consistency, but no external brand should be cloned. Keep the current distinctive purple-on-charcoal visual identity.

## Themes, colors and typography
Authoritative CSS variables in src/index.css:
| Role | Token | Existing value |
| --- | --- | --- |
| Canvas | --gdn-bg | #0B0D10 |
| Surface | --gdn-surface | #12161C |
| Raised | --gdn-surface-raised | #181D24 |
| Border | --gdn-border | #252B34 |
| Accent | --gdn-primary | #7151EB |
| Hover | --gdn-primary-hover | #6D4FF2 |
| Main text | --gdn-text | #F4F6F8 |
| Secondary | --gdn-text-secondary | #98A2B3 |
| Success/warning/error | --gdn-success/--gdn-warning/--gdn-error | #22C55E / #F59E0B / #EF4444 |

Typography: Plus Jakarta Sans body, Outfit headings with system fallbacks; monospace for copied Unicode handles/results. Body line-height in article 1.75; content width near 72ch; hero heading responsive 1.85–6rem based on breakpoints. Do not add third-party font downloads without a performance/legality review.

## Layout, spacing, shapes, and elevation
Body shell max-width 7xl, guides max-width 6xl, editorial text reading measure approx 72 characters. Tool controls have minimum 46px desktop/44px mobile and use gdn-tool-shell; tool result cards 16px radius, inputs 12px, larger panels around 20px; existing gdn CSS classes override legacy Tailwind utilities. Prefer borders/contrast over additional blur/shadow. Existing subtle header backdrop blur and purple accent gradient are limited existing treatments, not permission to add glass effects everywhere.

## Components and states
Use SiteHeader, MobileMenuIsland, SearchIsland, FavoritesIsland, SeoGuide, Generator and the task-specific tools, with shared gdn-surface, gdn-tool-result, gdn-tool-input, gdn-primary-button and gdn-chip classes.
Interactive states: visibly differentiated hover, active and focus; disabled controls have appropriate disabled labels; loading never hides the first searchable editorial content; errors use live feedback (not silent success); modal drawers trap and restore focus; clipboard failure exposes fallback.

## Responsive, accessibility and media
360/390 mobile, 768 tablet, 1280/1440 desktop and wide viewports are covered by Chromium CI sampling. Header navigation becomes a scrollable mobile drawer and desktop scroll-constrained dropdown. At 640px and below inputs/buttons have at least 44px targets. Avoid horizontal page overflow; wide data tables scroll inside labeled and keyboard-focusable regions. Support prefers-reduced-motion; no animations necessary for reading editorial answers. Ensure one visible H1, semantic headings, one main, meaningful alt for nondecorative images, preserved focus outlines and good text contrast. Image assets need real file paths and reserved dimensions. OG image is 1200x630.

## SEO/GEO page hierarchy
H1 remains frozen; the tool stays immediately usable; the SeoGuide shows distinct concise editorial summary, limits and selected manually reviewed examples in crawlable HTML. Do not insert a long FAQ wall before the tool or decorative images that delay the primary action. Canonical metadata, share media and schema must agree with visible content.

## Do / don't
Do preserve tokens and original workflow, prioritize useful inputs and clearly labeled copy buttons, sample real mobile layouts, retain correct URLs and honest platform limitations.
Don't add arbitrary vivid colors or one-off font/gradient systems; don't promise gamer-platform support, names' historical origins or username availability; don't add fake AI-targeted text blocks that duplicate every neighboring page.

## Maintenance
Update this file **before** any future design-system changes, and audit actual UI across screen sizes. Website-Starter-Standard is the process reference; src/index.css is the implementation source for exact tokens.
