---
status: référence du maillage interne du blog, à tenir à jour à chaque publication
updated_on: 2026-10-17
---

# Maillage interne du blog

Les liens **sortants** de chaque nouvel article sont dans son brief (`content/_drafts/blog/{slug}.md`, section « Maillage interne »). Ce document couvre ce que les briefs ne peuvent pas porter : les **liens entrants** à poser dans l'existant, à la date de publication, et les trous des pages hub.

## 1. Règles

- Chaque article lie son hub en haut de contenu : `/cours-de-boxe-geneve` (débutant, sportif, marque), `/services/boxe-femme` (femme), `/services/corporate` (entreprise).
- 3 à 6 liens internes pour 1 000 mots. Ancres descriptives et variées, jamais « cliquez ici ». Pas deux ancres identiques vers deux cibles différentes.
- Un lien vers un article pas encore publié ne se pose pas : il entre dans la liste du §3 à la date de publication de la cible.
- Jamais de lien vers `/cours-gratuit` (redirigé, l'essai gratuit n'existe plus). CTA : `/#planning`, `/offrir-un-cours`, devis `/services/corporate`.
- Pas de lien entre une intention B2C et une intention B2B qui se ressemblent (ex. `activites-sportives-entreprise-geneve-comparatif` ↔ comparatifs grand public).

## 2. Clusters

| Hub | Articles en ligne | Nouveaux articles (date) |
|---|---|---|
| `/cours-de-boxe-geneve` | premier-cours-de-boxe-preparation, combien-seances-boxe-par-semaine-debutant, a-quel-age-commencer-la-boxe, la-boxe-est-elle-dangereuse-blessures-loisir, equipement-boxe-debutant-geneve, prix-cours-boxe-geneve-2026, studio-boxe-prive-vs-salle-classique-geneve | cours-boxe-prive-petit-groupe-collectif (20 oct.), cardio-boxe-ou-boxe-technique (29 oct.), boxe-preparation-course-escalade (5 nov.), boxe-parent-enfant-seance (10 nov.), boxe-ou-crossfit-hyrox (12 nov.), offrir-cours-boxe-noel-geneve (17 nov.), round-by-round-deroule-seance (19 nov.), ce-que-nous-refusons-studio-boxe (24 nov.), choisir-boxe-anglaise-thai-kickboxing (1 déc.), coaching-boxe-domicile-ou-studio (3 déc.), cours-sport-rembourses-assurance-complementaire (15 déc.), reprendre-boxe-six-semaines-bases (29 déc.) |
| `/services/boxe-femme` | boxe-femme-geneve-guide-complet, boxe-regles-cycle-menstruel, effet-boxe-corps-femme-geneve, boxe-perte-de-poids-femme-geneve, boxe-femme-massive-epaules-geneve, boxe-confiance-en-soi-femme-geneve, boxe-self-defense-femme-geneve, quelle-boxe-choisir-femme-geneve, gants-de-boxe-femme-debutante | seance-boxe-femme-specificites (22 oct.), boxe-ou-pilates-se-tonifier (27 oct.), boxe-menopause-os-equilibre (26 nov.), reprendre-boxe-apres-grossesse (14 janv.) |
| `/services/corporate` | team-building-boxe-geneve-cohesion-equipe, sport-en-entreprise-geneve-guide-drh, activites-sportives-entreprise-geneve-comparatif, prix-programme-sport-entreprise-geneve, bienfaits-boxe-cadres-managers-geneve, burn-out-prevention-sport-cadres-geneve | aucun : le cluster se regroupe (rapport GSC du 2026-10-17) ; section décembre ajoutée à team-building-boxe-geneve-cohesion-equipe le 3 nov. |

## 3. Liens entrants à poser à la publication

Chaque ligne se fait **le jour où l'article cible est publié**, dans le même commit. Ancre proposée entre guillemets.

| Date | Nouvel article (cible) | Article ou page à modifier → section | Ancre |
|---|---|---|---|
| 20 oct. | cours-boxe-prive-petit-groupe-collectif | prix-cours-boxe-geneve-2026 → « Quel format choisir selon votre budget » : **raccourcir** en renvoi (anti-cannibalisation) | « choisir entre cours privé, petit groupe et collectif » |
| 20 oct. | idem | studio-boxe-prive-vs-salle-classique-geneve → section formats | « lequel des cinq formats vous convient » |
| 20 oct. | idem | premier-cours-de-boxe-preparation → avant la réservation | « quel format choisir pour commencer » |
| 22 oct. | seance-boxe-femme-specificites | boxe-femme-geneve-guide-complet → section séance | « ce qui change vraiment dans une séance pour femme » |
| 22 oct. | idem | boxe-regles-cycle-menstruel → après les phases | « comment le coach ajuste la séance » |
| 27 oct. | boxe-ou-pilates-se-tonifier | effet-boxe-corps-femme-geneve → FAQ tonifier | « boxe ou Pilates pour se tonifier » |
| 27 oct. | idem | boxe-perte-de-poids-femme-geneve → H2 « Boxe ou course à pied » (fin) | « et face au Pilates » |
| 27 oct. | idem | seance-boxe-femme-specificites → H3 reprise (lien conditionnel du brief) | voir brief |
| 29 oct. | cardio-boxe-ou-boxe-technique | quelle-boxe-choisir-femme-geneve → H2 « selon votre objectif » | « cardio-boxe ou boxe technique » |
| 29 oct. | idem | cours-boxe-prive-petit-groupe-collectif → H2 5 (lien conditionnel du brief, sens inverse) | « la boxe technique, pas seulement du cardio » |
| 5 nov. | boxe-preparation-course-escalade | burn-out-prevention-sport-cadres-geneve → passage footing | « la boxe en renfort des coureurs » |
| 5 nov. | idem | combien-seances-boxe-par-semaine-debutant → cas sportif | « si vous préparez la Course de l'Escalade » |
| 10 nov. | boxe-parent-enfant-seance | a-quel-age-commencer-la-boxe → section enfants **et** FAQ : remplacer « Nous n'assurons pas de cours enfants » selon D1/D2 | « une séance de boxe parent-enfant » |
| 10 nov. | idem | la-boxe-est-elle-dangereuse-blessures-loisir → section enfants si elle existe | « encadrer un enfant » |
| 12 nov. | boxe-ou-crossfit-hyrox | cardio-boxe-ou-boxe-technique → FAQ | « boxe ou CrossFit » |
| 12 nov. | idem | boxe-preparation-course-escalade → fin | « et face au HYROX » |
| 17 nov. | offrir-cours-boxe-noel-geneve | page `/offrir-un-cours` → bas de page | « nos conseils pour l'offrir à Noël » |
| 17 nov. | idem | premier-cours-de-boxe-preparation → fin | « offrir une première séance » |
| 19 nov. | round-by-round-deroule-seance | cours-boxe-prive-petit-groupe-collectif → H3 Round by Round | « le déroulé d'une séance Round by Round » |
| 19 nov. | idem | page `/services/round-by-round` → FAQ ou section déroulé | « une séance de 50 minutes, minute par minute » |
| 19 nov. | idem | premier-cours-de-boxe-preparation → séance type (différence privé / collectif) | « en cours collectif » |
| 24 nov. | ce-que-nous-refusons-studio-boxe | studio-boxe-prive-vs-salle-classique-geneve → conclusion | « ce que nous refusons de faire » |
| 24 nov. | idem | page `/studio` → présentation | « nos partis pris » |
| 26 nov. | boxe-menopause-os-equilibre | effet-boxe-corps-femme-geneve → section durée | « après 45 ans et à la ménopause » |
| 26 nov. | idem | a-quel-age-commencer-la-boxe → section adultes | « boxe et ménopause » |
| 26 nov. | idem | boxe-regles-cycle-menstruel → fin | « quand le cycle s'arrête » |
| 1 déc. | choisir-boxe-anglaise-thai-kickboxing | quelle-boxe-choisir-femme-geneve → après le H2 « selon votre objectif » | « le comparatif des trois disciplines, pour tous » |
| 1 déc. | idem | cardio-boxe-ou-boxe-technique → FAQ | « boxe anglaise, thaï ou kickboxing » |
| 1 déc. | idem | a-quel-age-commencer-la-boxe → section discipline | « choisir entre boxe anglaise, thaï et kickboxing » |
| 3 déc. | coaching-boxe-domicile-ou-studio | page `/services/coaching-boxe-domicile` → FAQ | « domicile ou studio : comment choisir » |
| 3 déc. | idem | cours-boxe-prive-petit-groupe-collectif → H3 à domicile | « domicile ou studio, la comparaison détaillée » |
| 3 déc. | idem | studio-boxe-prive-vs-salle-classique-geneve → section lieu, si elle existe | « domicile ou studio » |
| 15 déc. | cours-sport-rembourses-assurance-complementaire | prix-cours-boxe-geneve-2026 → conditions ou FAQ | « cours de sport et assurance complémentaire : ce qu'il faut vérifier » |
| 15 déc. | idem | page `/tarifs` → note sous la grille, seulement si Jon et Nicolas l'acceptent, jamais de formule qui promet un remboursement | voir brief |
| 29 déc. | reprendre-boxe-six-semaines-bases | combien-seances-boxe-par-semaine-debutant → fin | « un plan de six semaines pour reprendre » |
| 29 déc. | idem | premier-cours-de-boxe-preparation → fin | « reprendre en janvier » |
| 29 déc. | idem | cours-boxe-prive-petit-groupe-collectif → H2 objectif | « reprendre en janvier, le plan de six semaines » |
| 14 janv. | reprendre-boxe-apres-grossesse | seance-boxe-femme-specificites → point post-partum | « reprendre la boxe après une grossesse, en détail » |
| 14 janv. | idem | boxe-ou-pilates-se-tonifier → passage post-partum | « quand reprendre après un accouchement » |
| 14 janv. | idem | boxe-femme-geneve-guide-complet → section reprise | « reprendre après une naissance » |
| 14 janv. | idem | boxe-menopause-os-equilibre → mention du plancher pelvien | « le plancher pelvien après un accouchement » |
| 14 janv. | idem | page `/services/boxe-femme` → FAQ | « boxe après une grossesse » |

## 4. Trous de l'existant (à corriger sans attendre)

Liens entrants depuis le blog, comptés le 2026-10-17 :

| Article | Entrants | Ajout proposé (source → ancre) |
|---|---|---|
| boxe-self-defense-femme-geneve | 1 | boxe-confiance-en-soi-femme-geneve → « se sentir capable de se défendre » ; `/services/boxe-femme` |
| gants-de-boxe-femme-debutante | 1 | boxe-femme-geneve-guide-complet (matériel) → « choisir ses premiers gants » ; seance-boxe-femme-specificites (brief, déjà prévu) |
| quelle-boxe-choisir-femme-geneve | 2 | boxe-confiance-en-soi-femme-geneve → « quelle boxe choisir » |
| effet-boxe-corps-femme-geneve | 2 | boxe-femme-massive-epaules-geneve → « l'effet réel sur le corps » |
| a-quel-age-commencer-la-boxe | 2 | combien-seances-boxe-par-semaine-debutant → « à quel âge commencer » |
| equipement-boxe-debutant-geneve | 2 | combien-seances-boxe-par-semaine-debutant → « le matériel pour débuter » |
| prix-programme-sport-entreprise-geneve | 2 | team-building-boxe-geneve-cohesion-equipe → « ce que coûte un programme » |
| burn-out-prevention-sport-cadres-geneve | 2 | team-building-boxe-geneve-cohesion-equipe → « prévenir l'épuisement » |

**Pages hub** : seuls `/cours-de-boxe-geneve` et `/services/boxe-femme` lient des articles, à la main (2 et 2). `/services/corporate` et `/services/boxe-femme` n'affichent pas le bloc `RelatedArticles` : l'ajouter avec `filterCategory="corporate"` sur la page corporate. Pour boxe-femme, les catégories (`guide`, `bien-être`) ne séparent pas le cluster femme : poser 3 liens choisis à la main (guide complet, effet sur le corps, séance femme dès le 22 oct.).

## 5. Contrôle

À chaque publication : `npm run build`, puis vérifier qu'aucun lien interne ne casse (`grep -oE '\]\(/[^)# ]*'` sur l'article, chaque cible doit exister dans `dist/`).
