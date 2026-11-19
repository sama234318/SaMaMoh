# Validation record — 19 November 2026

Completed with the supported browser interfaces against the local preview and public production deployment.

- JavaScript syntax and static build checks passed.
- Desktop layout: no document overflow or broken loaded images at a 1363px viewport.
- Search: matching, cleared search and no-results state passed.
- Genre filters: Sci-fi returned two stories; Family returned Little Wonders.
- Watchlist: adding a title, opening the saved list and retaining it after reload passed.
- Film details and player navigation passed.
- Sintel trailer loaded with duration 52.208 seconds; native playback entered playing state.
- Live mobile Big Buck Bunny trailer loaded with duration 33.003 seconds.
- Optional local profile creation and header update passed.
- Plan selection opened the explicit no-billing explanation.
- FAQ expansion displayed its answer.
- At 390px viewport: no horizontal document overflow or broken loaded images; mobile menu, navigation, genre filtering, details and player passed.
- Viewport override reset after testing.
- Public production URL returned HTTP 200 without authentication and was opened independently in both browsers.

Scope limits: no authenticated backend, real subscriptions, commercial film catalogue, exhaustive accessibility audit or cross-device sync. These are explicitly identified as demo boundaries.
