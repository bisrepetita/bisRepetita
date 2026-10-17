# Handoff — branche `refonte-2026`

## État
Site de test complet dans la nouvelle DA (blanc, encre, photo N&B, Inter), preview Vercel via PR brouillon #1. Build OK (139 pages). SEO : title/canonical identiques à `main` ; meta changées consciemment (essai gratuit retiré) ; diff `design/seo-before.json` vs `seo-after.json`.

Blog (2026-10-17) : 22 articles mis à jour (`updatedDate: 2026-10-17`), sidecars `content/_history/{slug}.json` avec la liste `needs_validation` de chacun. Plan oct.–nov. : `docs/seo/plan-editorial-2026-10-11.md` (12 articles, mini-briefs). Recherches : `docs/_research/2026-10-17-*.md`. Skills SEO RC13 triés dans `~/skills-src/seo-pipeline-v3-rc13/` (rapport `RAPPORT-2026-10-17.md`), **non installés** (commande dans le rapport).

## À trancher (Jon / Nicolas)
- Validation des blocs « Notre avis » et des faits listés dans `needs_validation` ; signature Nicolas sur les textes modifiés (`docs/brand/voice.md`).
- Première séance payante au tarif du format : à confirmer (articles l'écrivent ainsi).
- Corporate : capacités (8 / 12 / 20), rayon (5 ou 30 km), délai de devis, Lionel co-encadrant.
- Protège-dents prêté ou non ; tailles de gants prêtées ; horaires (TODO aussi sur `/studio`).
- Parent-enfant : mineurs, âge, format, prix (bloque l'article du 10 nov.). Offrir un cours : format, prix, validité (bloque l'article du 17 nov., à publier avant le 23 nov.).
- Label Qualitop ou équivalent (sujet assurance en réserve).
- Typo A/B/C/D sur `/styleguide-test` ; quartier, CGV, note Google, `src/config/authors.ts` (« 100+ », JSON-LD Person) ; meta figées des pages (studio, small-group, Nicolas).
- `nicolas-de-boccard.webp` filigrane IA ; covers blog (titre incrusté) à refaire.
- `netlify.toml` ignoré par Vercel : `/about` en 404, en-têtes absents → `vercel.json`.
- Articles programmés : pas de rebuild automatique à la `pubDate` (deploy hook planifié à créer).

## Prochaine étape
Export GSC frais (`/seo-gsc`) → validation Nicolas des avis → brief complet du 1er article du plan (20 oct.).
