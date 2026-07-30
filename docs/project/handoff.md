# HANDOFF — 2026-07-17

## Epic en cours
Audit contenu + anti-cannibalisation — **pivot focus FEMMES** (valeur + lead-gen)

## État
- **Phase 0 — Hygiène technique (FAIT, déployé)** : redirect 301 `www→apex`, prop `noindex`
  câblé `metadata→BaseLayout→Seo` (actif sur `/blog/tags/*`), tags exclus du sitemap.
- **Phase 1 — Consolidation + quick wins (FAIT, déployé)** : différenciation femmes
  (landing `/services/boxe-femme` transactionnel vs article `boxe-femme-…-guide` informationnel),
  titles CTR-gap réécrits (`boxe-perte-de-poids-femme`, `equipement-boxe-debutant`, `/studio`).
  Commit `2599f57`.
- **Phase 1b — Foyer cannibalisation débutant (FAIT, déployé)** : fusion pillar/article
  (`cours-de-boxe-geneve-guide-debutant` → `/cours-de-boxe-geneve`), 301 ajouté, maillage
  re-pointé. Commit `86edf75`.
- **Phase 2 — Topical map expansion femmes (FAIT, déployé cette session)** :
  `docs/topical-map-boxe-femme-geneve.md` généré (cluster 10 pièces : 6 existantes + 4 à créer,
  scores Brand/Business/Trafic, blueprint de maillage, mini-briefs). Les 4 spokes manquants du
  Layer 1 produits de bout en bout via `@content-creator` mode CLUSTER : brief → validation
  `@brief-critic` (2 tours pour `effet-boxe-corps-femme-geneve` et `boxe-regles-cycle-menstruel`,
  1 tour pour les 2 autres) → `@article-producer` (write → humanizer → sources → enrich → review
  → cover → publish). 0 escalade `needs_human`. Liens entrants du hub `boxe-femme-geneve-guide-complet`
  rebranchés vers les 4 nouveaux spokes. Commit `fd2ea0a`, pushé sur `origin/main`.

## Prochaine étape (par quoi commencer)
**Attendre la traction GSC (2-3 semaines) sur les 4 nouveaux spokes**, puis lancer `/seo-gsc`
pour identifier lequel `deepen` en Layer 2 (candidats notés dans le topical map : self-défense,
perte-de-poids — cf. section "Couverture fan-out"). Ne pas avancer Layer 2 avant cette traction
(discipline de production du topical map, point 1 et 3). En parallèle : penser à forcer
l'indexation GSC de chaque spoke le jour de sa mise en ligne effective (cf. pièges ci-dessous).

## Pièges / contexte chaud
- **Les 4 nouveaux spokes sont programmés, pas encore live** : `pubDate` étalé sur la cadence
  habituelle du projet (mardi/jeudi, ~2x/semaine) — `effet-boxe-corps-femme-geneve` (21/07),
  `boxe-self-defense-femme-geneve` (23/07), `quelle-boxe-choisir-femme-geneve` (28/07),
  `boxe-regles-cycle-menstruel` (30/07). Le site filtre via `src/utils/blog.ts` `isPublished()`
  (`!draft && pubDate <= now`) — **rien à faire côté code**, mais il faut qu'un build/déploiement
  Netlify tourne à/après chaque échéance pour que l'article devienne réellement visible (pas de
  rebuild auto programmé connu — à vérifier si `isPublished()` doit un jour être remplacé par un
  cron de rebuild). Penser à demander l'indexation GSC manuelle dès que chaque page est live.
- **Bug de convention à connaître** : `project_slug` déduit par défaut du basename du CWD
  (`bisRepetita`, dossier imbriqué `apps/bisRepetita/bisRepetita`) ne matche PAS le slug
  réellement enregistré au hub Turso jlabs-content-hub (`bis-repetita`, avec tiret). Tout appel
  `/publish-hub` sur ce projet doit **forcer explicitement** `project_slug="bis-repetita"` sinon
  la requête retombe silencieusement en 404/liste non filtrée. Contourné manuellement à chaque
  invocation cette session — un fix durable (renommer le dossier, ou committer un override dans
  `docs/seo-context.md`) serait à envisager si `/publish-hub` doit continuer à tourner sans
  override manuel sur ce projet.
- **Gap site-wide mineur** : `public/llm.txt` absent — remonté en fail Low (non bloquant) par
  `/seo-review` sur les 4 nouveaux articles ET probablement sur tout le reste du site. À traiter
  une fois, pas par article.
- Données GSC fraîches mais **non committées, hors scope de cette session** :
  `.seo-data/gsc-bisrepetita-ch-last_3_months.json` (modifié) et `-last_28_days.json` (nouveau) —
  laissés tels quels, à traiter séparément si besoin.
- **Focus projet = FEMMES** : tout nouveau contenu = valeur + capture de lead. Meilleur aimant
  actuel : `boxe-perte-de-poids-femme` (353 imp). Meilleur convertisseur : `/services/boxe-femme`.
- Surveiller toujours : query "coach boxe" (159 imp) captée par la home (pos 13.5) > page
  service `/services/coaching-prive` (pos 18.5).
- 4 erreurs `npm run check` préexistantes (PostItem, Form, PricingTable, ZenamuCalendar) —
  hors scope, ne bloquent pas le build.
