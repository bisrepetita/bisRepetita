# Décisions

## 2026-10-16 — Refonte de test sur Astro, branche `refonte-2026`
On garde Astro 5 + Tailwind v4 + GSAP : l'archi SEO (routes, Seo.astro, Schema JSON-LD, sitemap, collection blog, redirects) y vit et doit rester identique. Seule la couche visuelle est refaite. Choix de Jon. Vérif : diff title/H1/canonical de `dist/` avant/après.

## 2026-10-16 — « Offrir un cours » sur une nouvelle URL
`/offrir-un-cours` est créée (prix et format en attente). `/cours-gratuit` reste en ligne avec ses title/H1, restylée, retirée des CTA principaux. Les CTA « Réserver » pointent vers le planning. Parent-enfant et abonnement : absents tant que non décidés.

## 2026-10-16 — Typo : Inter Display, options sur `/styleguide-test`
Inter (Display pour les titres), tracking serré, petits corps. Les variantes (autres titrages) sont présentées sur `/styleguide-test` (noindex) pour arbitrage de Jon.

## 2026-10-16 — Navbar : panneau « Cours »
Méga-menu blanc deux colonnes : Cours privé (Solo, Duo/Trio, Small Group, Domicile) · Cours collectif (Round by Round) ; ligne secondaire Corporate · Boxe femme · Offrir un cours ; photo N&B au survol.

## 2026-10-16 — Preview Vercel
La branche `refonte-2026` est poussée (jamais `main`) ; le site est déployé par Vercel, la PR brouillon #1 donne la preview.

## 2026-10-16 — Polices hors système tolérées sur `/styleguide-test`
Bodoni Moda (option C) est exclue du détecteur impeccable (`.impeccable/config.json`) car c'est une page de comparaison noindex, pas une police du site. Si Jon retient C : l'inscrire dans `DESIGN.md` et retirer l'exception.
