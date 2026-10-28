# Handoff — branche `refonte-2026`

## État
Site de test complet dans la nouvelle DA (blanc, encre, photo N&B, Inter), preview Vercel via PR brouillon #1 (https://bis-repetita-git-refonte-2026-bisrepetitas-projects.vercel.app). Rien n'est en prod tant que la refonte n'est pas mergée dans `main` (redirections et en-têtes de `vercel.json` compris).

Faits du studio : réponses de Nicolas (19 oct.) reportées sur les pages, les 22 articles en ligne (trace dans `content/_history/`), les brouillons et les briefs. Ses réponses brutes restent dans la base de la page de questions.

Blog :
- Calendrier 20 oct. → 14 janv. : `docs/seo/plan-editorial-2026-10-11.md` (§3). Liens retour datés : `docs/seo/maillage.md`.
- 7 brouillons non publiés : `content/_drafts/blog/{slug}.article.mdx` (20, 22, 27, 29 oct., 5, 12, 26 nov.), seo-lint à 0 erreur. Points ouverts dans chaque `{slug}.production.log`.
- Briefs sans article : Round by Round, parent-enfant (bloqué : assurance RC mineurs), manifeste (appel à faire), bon cadeau, et 4 sujets déc.–janv. ; « cours remboursés par l'assurance complémentaire » abandonné.
- Questions à Nicolas : https://claude.ai/artifact/JwjJkDiaChgPuczo6iiYbx (source `docs/seo/questions-nicolas.html`). Deux sections ouvertes en tête : « Avis réécrits » (9 avis à revalider) et « Précisions » (22 questions, dont signature par prénoms des coachs). Lecture : ArtifactData `list`, collection `reponses`, ids `rv_*` et `p_*`.

## À faire par Jon
- Vérifier que Nicolas a toujours accès à la page de questions (niveau Contributeur).
- Relecteurs santé (femme, Pilates, ménopause, parent-enfant, post-partum) ; accords écrits des coachs pour leurs prénoms.
- Moodboard des covers, puis génération via Hermes / ChatGPT.
- Rebuild Vercel planifié (deploy hook) ou déploiement manuel : un article programmé ne sort pas sans build.
- escalade.ch : date et distance ; `noindex` sur `app.bisrepetita.ch` ; domaine www → apex dans les réglages Vercel.

## Restes
- Pistes GSC (décisions éditoriales) : fusion `effet-boxe-corps-femme-geneve` + `boxe-femme-massive-epaules-geneve`, pages explorées non indexées, regroupement du cluster corporate, page « coach de boxe privé à Genève ».
- Signatures : les 22 articles en ligne sont signés « Nicolas de Boccard », les brouillons « Équipe Bis Repetita » ; à trancher après la réponse de Nicolas (`p_signature`).

## Prochaine étape
Lire les réponses `rv_*` et `p_*`. Si `rv_20oct_1` et `rv_20oct_2` sont validés : publier l'article du 20 oct. (copie dans `src/content/blog/`, `draft: false`, cover, liens retour selon `maillage.md`), puis build. Ensuite reporter les précisions et rédiger les briefs débloqués.
