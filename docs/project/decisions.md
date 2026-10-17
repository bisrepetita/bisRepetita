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

## 2026-10-17 — Refresh des 22 articles : plus d'essai gratuit, faits alignés
Corps et meta descriptions ne promettent plus d'essai gratuit (14 meta réécrites, title/slug/H1 intacts ; 3 doubles H1 retirés). Faits alignés sur `PRODUCT.md` : Round by Round 1 coach, 50 min, 8 max ; Small Group 4 à 8 ; « un ring » ; Lionel/Jeremy/Eliza nommés par leur rôle seulement. Chaque comparatif porte un bloc `> **Notre avis :**`. Rejeté : réécrire les meta « figées » sans motif. Trace par article : `content/_history/{slug}.json` (dont `needs_validation`). Rouvrir si Nicolas refuse un avis ou un fait.

## 2026-10-17 — `updatedDate` dans la collection blog
Champ optionnel, affiché « Mis à jour le » et exposé en `dateModified` (JSON-LD). Requis par le refresh SEO.

## 2026-10-17 — Cycle : 4 phases comme repère, ressenti d'abord
L'article cycle et la page femmes présentent les phases comme un repère ; le ressenti du jour décide. Raison : la recherche (McNulty 2020, UEFA 2025) ne soutient pas une programmation par phase pour toutes. Rejeté : « cycle syncing » prescriptif.

## 2026-10-17 — `docs/seo/context.md` seul contexte SEO
Doublon `docs/seo-context.md` supprimé ; CTA « essai gratuit », palmarès de Lionel et « ring complet » retirés du contexte lu par les skills.

## 2026-10-17 — Fin de l'essai gratuit sur le site
- Choix : « Essai gratuit / séance offerte » retiré des meta de 8 pages (accueil, tarifs, services) et de la séance découverte corporate (« Sur devis ») ; `/cours-gratuit` supprimée, redirection 301 vers `/offrir-un-cours` dans `vercel.json` (premier fichier de redirections actif sur Vercel).
- Écarté : garder `/cours-gratuit` en page de réservation payante (URL et contenu trompeurs).
- Pourquoi : décision d'octobre (« Offrir un cours » remplace l'essai) ; les meta promettaient une offre inexistante.
- À rouvrir : si un essai revient, ou si la plateforme de réservation continue d'offrir la première séance à la première connexion.
