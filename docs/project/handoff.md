# Handoff — branche `refonte-2026`

## État
Site de test complet dans la nouvelle DA (blanc, encre, photo N&B, Inter), preview Vercel via PR brouillon #1 (https://bis-repetita-git-refonte-2026-bisrepetitas-projects.vercel.app). Rien n'est en prod tant que la refonte n'est pas mergée dans `main`.

Blog :
- 22 articles en ligne rafraîchis ; 5 titres/metas réécrits d'après le rapport GSC (`docs/_research/2026-10-17-bisrepetita-rapport-gsc-3-mois.md`), trace dans `content/_history/`.
- Calendrier 20 oct. → 14 janv. : `docs/seo/plan-editorial-2026-10-11.md` (§3). Maillage et liens retour datés : `docs/seo/maillage.md`.
- 7 articles rédigés en brouillon, non publiés : `content/_drafts/blog/{slug}.article.mdx` (20, 22, 27, 29 oct., 5, 12, 26 nov.). Points en attente dans chaque `{slug}.production.log`. Test de build OK.
- 9 briefs validés sans article : parent-enfant, bon cadeau, Round by Round, manifeste (nov.) ; 5 sujets déc.–janv. Team building de fin d'année abandonné comme article.
- Questions à Nicolas : page https://claude.ai/artifact/JwjJkDiaChgPuczo6iiYbx (réponses dans sa base, collection `reponses` ; lecture via ArtifactData). Source : `docs/seo/questions-nicolas.html`.

## À faire par Jon
- Partager la page de questions à Nicolas, niveau **Contributeur**.
- Relecteurs santé : séance femme (22 oct.), Pilates, ménopause, puis parent-enfant et post-partum.
- Rebuild Vercel planifié (deploy hook) ou déploiement manuel les mardis et jeudis : un article programmé ne sort pas sans build.
- Vérifier sur escalade.ch la date et la distance de la course ; juriste pour la validité du bon cadeau.
- Covers des articles : photos réelles du studio (preset visuel obsolète, aucune clé image).
- `noindex` sur `app.bisrepetita.ch` (outil de réservation).

## Restes techniques
- Domaine www → apex : géré dans les réglages de domaine Vercel (hors `vercel.json`), à vérifier dans le dashboard.
- Pistes GSC non traitées (décisions éditoriales) : fusion `effet-boxe-corps-femme-geneve` + `boxe-femme-massive-epaules-geneve`, pages explorées non indexées (studio privé vs salle, bienfaits cadres, équipement), regroupement du cluster corporate, page « coach de boxe privé à Genève ».

## Prochaine étape
Lire les réponses de Nicolas (ArtifactData `list` sur `reponses`), reporter les faits dans les brouillons, mettre « Notre avis » et signatures à jour, puis publier l'article du 20 oct. (copie dans `src/content/blog/`, `draft: false`, liens retour du jour selon `maillage.md`). Ensuite rédaction des briefs débloqués.
