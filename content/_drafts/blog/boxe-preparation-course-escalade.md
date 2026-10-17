---
slug: boxe-preparation-course-escalade
status: brief
planned_pubDate: 2026-11-05
module: B
page_type: article
category: guide
author: "Équipe Bis Repetita"
created_on: 2026-10-17
source_plan: docs/seo/plan-editorial-2026-10-11.md §4 n° 6
---

# Brief SEO : Course de l'Escalade, la boxe en renfort du coureur

## Metadata
- Slug: boxe-preparation-course-escalade
- Slug rationale: slug du plan, conservé ; entités « boxe » et « Course de l'Escalade » ; pas d'année ni de numéro d'édition (l'article se met à jour chaque automne sur la même URL, l'édition et la date vont dans le corps).
- Page type: article
- Module: B (SEO local, événement genevois), avec la discipline du module C pour les affirmations santé et blessures : statut de preuve explicite, aucune promesse.
- Target word count: 1 200 à 1 500 mots
- Primary keyword: préparation course de l'Escalade
- Date: 2026-10-17
- Publication prévue : jeudi 5 novembre 2026, soit un mois avant la course
- Persona: Sous-persona C, le sportif en reconversion (ici, le coureur régulier ou occasionnel inscrit à l'Escalade). Ses trois questions : 1) Que peut m'apporter la boxe à un mois de la course, sans me fatiguer les jambes ? 2) Comment la placer dans ma semaine avec mes sorties ? 3) Est-ce que ça réduit le risque de blessure ou me fait gagner du temps ?
- Tonalite: ligne « pratiquant exigeant » de `docs/brand/voice.md` : technique, précis, factuel ; respect total du running (ne pas le dévaloriser). Pas d'exclamation, pas de superlatif.
- Registre: vouvoiement
- Signature: « Équipe Bis Repetita » par défaut ; « Nicolas de Boccard » seulement après validation de ce texte par Nicolas.
- Contexte charge depuis: seo-context.md ✓ (`docs/seo/context.md`, `docs/brand/*`, `docs/business/profile.md`, `docs/tarifs-reference.md`, `PRODUCT.md`, `project.yaml`, plan éditorial §1, §2, §4, §6, `docs/_research/2026-10-17-concurrence-serp.md`, `docs/_research/2026-10-17-sources-sante-parent-enfant-femmes.md` §D3)
- Research bundle : aucun `keywords-*.json` ni `serp-*.json` pour ce sujet ; GSC ancien (`.seo-data/gsc-bisrepetita-ch-last_3_months.json`, 25 mars au 23 juin 2026) : aucune requête « escalade », « course », « running » ou « coureur ». SERP qualitative faite le 2026-10-17. Pas de `entities-*.json` (critère 17 non applicable).

## Décisions requises (non bloquantes, le writer contourne)

| # | Sujet | État | Consigne au writer en attendant |
|---|---|---|---|
| D1 | Parcours et distances 2026 | escalade.ch renvoie 403 (WebFetch et curl, 2026-10-17) ; les sites tiers donnent environ 7,3 à 7,5 km pour l'adulte, non vérifié | Ne pas écrire de distance ni de dénivelé. Jon vérifie sur escalade.ch avant publication ; si confirmé, une phrase dans le H2 1 |
| D2 | Entraînements collectifs gratuits avant la course | Vérifiés pour 2023 seulement (dimanches de novembre, association Sant«e»scalade, page HUG) ; rien trouvé pour 2026 | Ne pas les annoncer pour 2026. Option : « les éditions précédentes ont proposé des entraînements collectifs gratuits le dimanche ; vérifiez le programme 2026 sur escalade.ch », sans date |
| D3 | « Notre avis » et semaine type | Proposition du brief, à faire valider par Nicolas : 1 séance de boxe par semaine (Round by Round ou Solo), jamais la veille de la séance clé de course, allégée ou supprimée la semaine de la course | Rédiger tel que proposé, marqué « à valider » dans le document soumis à Nicolas |
| D4 | Créneaux Round by Round (jours, heures) | Non documentés dans le dépôt | Ne pas citer de jour ni d'heure ; renvoyer au planning |
| D5 | Date de la course | 5 et 6 décembre 2026 vérifiée sur MySwitzerland ; escalade.ch illisible | Écrire la date ; Jon la revérifie sur escalade.ch avant publication |

## Snippet recommande
**Exception projet** : le `title` du frontmatter est rendu comme H1 (pas de champ `seoTitle`, plan §6.3). Un seul libellé sert de title et de H1 ; la règle « H1 ≠ title » ne s'applique pas.

- Title (= H1): Préparer la Course de l'Escalade : la boxe en renfort (53 car.)
- Meta description: Un mois avant la Course de l'Escalade, une séance de boxe par semaine en plus de vos sorties : gainage, haut du corps, intensité courte. Semaine type. (150 car.)

Recommandation : variante Solution. L'intention est « se préparer » ; le verbe « Préparer » porte la requête principale en tête et la meta donne le format concret (une séance par semaine), ce que les plans de course de la SERP ne proposent pas.

## Snippet variantes
| Angle | Title (= H1) | Meta |
|---|---|---|
| Expertise (E-E-A-T) | Course de l'Escalade : la boxe en renfort du coureur (52 car.) | Coach licencié SwissBoxing : ce que la boxe apporte à un coureur avant l'Escalade, ce qu'elle n'apporte pas, et ce que disent les études. (137 car.) |
| Local (GEO) | Escalade à Genève : la boxe dans votre préparation (50 car.) | Préparation de l'Escalade à Genève : la boxe en complément de vos sorties, au studio près de la place des Nations. Semaine type et notre avis. (142 car.) |

## Keyword Cluster
Aucun volume disponible (pas de DataForSEO pour ce sujet) : toute la colonne est « Non vérifié ».

| Role | Keyword (query brut) | Volume | Placement | Formulation naturelle (prose) |
|---|---|---|---|---|
| **Principal** | préparation course de l'Escalade | Non vérifié | Title, H1, meta, intro, H2 1 | la préparation de la Course de l'Escalade |
| Secondaire | entraînement Escalade | Non vérifié | H2 3, body | l'entraînement pour l'Escalade |
| Secondaire | boxe et course à pied | Non vérifié | H2 2, body | la boxe et la course à pied |
| Secondaire | renforcement coureur hiver | Non vérifié | H2 2, H2 4 | le renforcement du coureur en hiver |
| Secondaire | cross-training course à pied | Non vérifié | H2 2, body | le cross-training pour un coureur |
| Secondaire | gainage coureur | Non vérifié | H2 2, body | le gainage pour le coureur |
| Long-tail | combien de séances par semaine avant l'Escalade | Non vérifié | H2 3, FAQ | combien de séances par semaine avant l'Escalade |
| Long-tail | renforcement musculaire blessures course à pied | Non vérifié | H2 4 | le renforcement musculaire et les blessures en course à pied |
| Long-tail | règle des 10 % course à pied | Non vérifié | H2 4, FAQ | la règle des 10 % en course à pied |
| Long-tail | boxe la veille d'une course | Non vérifié | FAQ | faire de la boxe la veille d'une course |
| Long-tail | Course de l'Escalade 2026 date | Non vérifié | Intro, H2 1 | la Course de l'Escalade 2026 |

**Rappel au writer** : dans le corps de l'article, utilise toujours la colonne « Formulation naturelle », jamais la forme brute du query. Voir `writing-rules.md` (règle 10) / `keyword-naturalization.md`.

**Anti-cannibalisation** : aucun article ne traite la course de l'Escalade ni le renfort du coureur. Voisins à ne pas doubler : `boxe-perte-de-poids-femme-geneve` (H2 « Boxe ou course à pied : que choisir pour perdre du poids ? », intention minceur, pas préparation) ; `burn-out-prevention-sport-cadres-geneve` (running et rumination, intention mentale) ; `combien-seances-boxe-par-semaine-debutant` (fréquence pour un débutant en boxe, pas pour un coureur). Ici : un coureur qui ajoute la boxe, pas un choix entre les deux.

## Structure

Intro (80 à 120 mots) : réponse directe. La 48e Course de l'Escalade a lieu les 5 et 6 décembre 2026 en Vieille-Ville (arrivée au parc des Bastions). À un mois de la course, les sorties restent la base ; une séance de boxe par semaine apporte ce que le coureur travaille peu (gainage, haut du corps, coordination, intensité courte), sans promettre un meilleur chrono. Phrase de cadrage : ce que la boxe apporte et n'apporte pas, la semaine type, ce que disent les études, notre avis.

Encart `> **L'essentiel en bref**` (4 puces) : course les 5 et 6 décembre 2026 ; les sorties restent prioritaires ; une séance de boxe par semaine, loin de la séance clé ; le renforcement réduit les blessures dans les études (tous sports confondus ; non démontré pour la boxe), la règle des 10 % ne les réduit pas.

### H2: À un mois de l'Escalade, ce que la boxe apporte au coureur
Keywords: préparation course de l'Escalade, boxe et course à pied, gainage coureur, cross-training course à pied
Bloc AEO: Self-contained answer
Contenu: Réponse en 3 phrases autonomes. Puis quatre apports formulés comme des mécanismes, jamais comme des résultats garantis : le gainage (la garde et la rotation du tronc à chaque coup) ; le haut du corps (épaules, bras, utile pour le balancier) ; la coordination et les appuis (déplacements, changements de direction) ; l'intensité courte par rounds (le souffle sur des efforts brefs). Module B : une phrase d'ancrage local (la course passe en Vieille-Ville ; le studio est à La Voie-Creuse 16, près de la place des Nations). Distance seulement si D1 confirmée. Aucune anecdote de coureur passé au studio.

### H2: Ce que la boxe n'apporte pas avant une course
Keywords: renforcement coureur hiver, cross-training course à pied
Bloc AEO: Evidence sandwich
Contenu: Honnêteté obligatoire : la boxe ne remplace pas les sorties, ne travaille pas l'impact spécifique de la course ni le renforcement des jambes tel qu'étudié. Donnée : la méta-analyse Balsalobre-Fernández 2016 montre un effet net du renforcement sur l'économie de course, mais avec du renforcement des membres inférieurs et de la pliométrie, 2 à 3 fois par semaine pendant 8 à 12 semaines, chez des coureurs de haut niveau ; à quatre semaines de la course et avec une séance de boxe, ne rien promettre sur le chrono. Respect du running : reprendre l'esprit de l'article burn-out (« le running garde toute sa valeur »).

### H2: Une semaine type à quatre semaines de la course
Keywords: entraînement Escalade, combien de séances par semaine avant l'Escalade
Bloc AEO: Step-by-step (tableau semaine)
Contenu: Tableau lundi à dimanche, proposition à valider (D3) : 2 sorties de course (dont la séance clé du coureur, définie par son plan), 1 séance de boxe placée au moins un jour avant ou après la séance clé, repos. Préciser : si le coureur suit déjà un plan à 3 sorties ou plus, la boxe remplace une séance de renforcement ou de cross-training, pas une sortie. La semaine de la course : séance allégée ou supprimée (avis du studio, pas une donnée). Format conseillé : Round by Round (collectif, 8 personnes maximum, 1 coach, 50 min, sans échange de coups, CHF 40) ou coaching Solo (CHF 120) pour corriger la technique ; prix de `tarifs-reference.md` uniquement. Rappel : intensité adaptée à l'état du jour observé à l'échauffement (`proofs.md`).

### H2: Renforcement et blessures : ce que disent les études
Keywords: renforcement musculaire blessures course à pied, règle des 10 % course à pied
Bloc AEO: Evidence sandwich
Contenu: Deux résultats, chacun avec son statut de preuve et sa limite :
- **Consensus** : Lauersen et al. 2014 (*Br J Sports Med*, 25 essais, 26 610 participants) : le renforcement musculaire réduit les blessures sportives à moins d'un tiers (RR 0,315) ; les étirements n'ont pas d'effet net. Limite : tous sports confondus, programmes de renforcement suivis sur plusieurs semaines ; une séance de boxe n'est pas un programme de renforcement étudié. Ne pas écrire « la boxe prévient les blessures ».
- **Mythe partiel** : la règle des 10 % ne protège pas à elle seule. Buist et al. 2008 (*Am J Sports Med*, 532 coureurs débutants, course de 6,7 km) : 20,8 % de blessés avec le programme progressif de 13 semaines, 20,3 % avec le programme standard de 8 semaines, pas de différence. Limite : débutants, une seule distance.
Phrase de prudence : une douleur qui persiste se montre à un professionnel de santé ; l'article ne donne pas de conseil médical.

### H2: Notre avis : pour qui la boxe a du sens avant l'Escalade
Keywords: préparation course de l'Escalade, boxe et course à pied
Bloc AEO: Pros-cons
Contenu: Deux listes courtes « Pour qui » (coureur qui ne fait aucun renforcement ; coureur qui s'ennuie sur le gainage seul ; coureur qui veut un travail du haut du corps et de la coordination en hiver) / « Pas pour qui » (coureur déjà à la limite de sa charge, avec une douleur en cours ; coureur qui vise un chrono et n'a que deux créneaux par semaine : ses deux créneaux vont à la course). Puis le bloc obligatoire :

> **Notre avis :** contenu attendu, 2 à 4 phrases (D3) : par défaut, une séance de boxe par semaine jusqu'à la semaine de la course, en Round by Round ou en Solo, jamais la veille de votre séance clé. La boxe complète la préparation, elle ne remplace pas une sortie. Si vous n'avez que deux créneaux par semaine, gardez-les pour courir et revenez à la boxe après le 6 décembre.

Paragraphe « après la course » (2 à 3 phrases) : décembre et janvier, quand les sorties diminuent, la boxe garde le souffle et la coordination ; lien vers la fréquence des séances.

### H2: Questions fréquentes
Bloc AEO: — (FAQ H3, FAQPage)
H3 proposés (module B, FAQ locale) :
- ### Peut-on faire de la boxe la veille de la Course de l'Escalade ? → plutôt non ; une séance légère au plus tard deux ou trois jours avant (avis du studio, D3).
- ### Faut-il savoir boxer, et où se trouve le studio ? → aucun niveau requis, Round by Round sans échange de coups ; studio à La Voie-Creuse 16, près de la place des Nations, rive droite, la course se court en Vieille-Ville. Pas de temps de trajet chiffré.
- ### La boxe fait-elle gagner du temps sur l'Escalade ? → aucune étude ne le montre pour la boxe ; renvoyer au H2 2.

Fin : `---` → `## Conclusion` (3 à 4 phrases) → un seul CTA → `---` → `## Sources et Références`.

## Maillage interne (liens sortants)
Toutes les cibles existent (`ls src/content/blog`, `ls -R src/pages`, 2026-10-17). Pas de `docs/seo/content-map.md`.

| Ancre | Cible | Section | Obligatoire |
|---|---|---|---|
| le cours collectif Round by Round | /services/round-by-round | H2 3 et « Notre avis » | oui |
| pourquoi le running garde toute sa valeur | /blog/burn-out-prevention-sport-cadres-geneve | H2 2 | oui (plan) |
| combien de séances de boxe par semaine | /blog/combien-seances-boxe-par-semaine-debutant | « Notre avis », paragraphe après la course | oui (plan) |
| le coaching solo pour corriger la technique | /services/coaching-solo | H2 3 | non |
| le guide des cours de boxe à Genève | /cours-de-boxe-geneve | Intro ou H2 1 (lien montant vers le pillar) | oui |
| les risques réels de la boxe de loisir | /blog/la-boxe-est-elle-dangereuse-blessures-loisir | H2 4 | non |

## Image Briefs
Direction visuelle : `DESIGN.md` (photo N&B) fait foi ; négatifs de `docs/design/moodboard.md`. Pas de logo de la course, pas de dossard lisible, pas de photo de la course sans droits.

### Cover
- placement : cover · type : photo · preset : blog-cover-text (texte : none) · ratio 16:9
- subject : un coureur en tenue d'hiver, gants de boxe aux mains, devant un sac de frappe
- description : photographie N&B, lumière douce ; une personne en collant de course et coupe-vent léger, chaussures de running, frappe un sac en garde haute ; fond de studio clair. Dit « le coureur qui vient boxer ». Point focal au centre droit.
- alt_text : Coureur en tenue d'hiver qui travaille au sac de frappe pour préparer la Course de l'Escalade à Genève

### Image 2
- placement : after-h2:À un mois de l'Escalade, ce que la boxe apporte au coureur · type : photo · ratio 4:3
- subject : rotation du tronc sur un direct, vue de trois quarts
- description : N&B, buste et hanches en rotation, garde haute, sans opposition ; illustre le gainage par la frappe.
- alt_text : Rotation du tronc et gainage sur un direct au sac, travail utile au coureur en hiver

### Image 3
- placement : after-h2:Une semaine type à quatre semaines de la course · type : schema · ratio 4:3 · preset : SKIP (schéma à produire hors pipeline image, ou tableau Markdown seul)
- subject : semaine type sur 7 jours (2 sorties, 1 boxe, repos)
- description : bandeau sobre noir sur blanc, sept cases, Inter ; libellés courts ; reprend exactement le tableau validé (D3).
- alt_text : Semaine type de préparation de l'Escalade avec deux sorties de course, une séance de boxe et des jours de repos

### Image 4
- placement : after-h2:Notre avis : pour qui la boxe a du sens avant l'Escalade · type : photo · ratio 4:3
- subject : chaussures de course et gants de boxe posés côte à côte sur un banc de studio
- description : N&B, nature morte, lumière de fin de journée ; dit « les deux se complètent ».
- alt_text : Chaussures de course à pied et gants de boxe posés côte à côte sur un banc de studio à Genève

## Objectif business
Faire venir des coureurs (sous-persona C, conversion élevée) en novembre, vers une première séance (`/#planning`) ou une séance Round by Round, et ouvrir le sous-cluster « sportif en reconversion » avant l'article boxe ou CrossFit / HYROX du 12 novembre. Secondaire : rétention après la course (décembre, janvier).

## Angle unique / POV
Mode A (plan §4 n° 6) : un mois avant la course, la boxe apporte ce que le coureur néglige (gainage, coordination, haut du corps, intensité courte), en complément des sorties et jamais à leur place. Position d'honnêteté : ce que la boxe n'apporte pas, et aucune promesse de chrono ni de prévention des blessures. Angle hors « common ground » : la SERP propose des plans de course ; aucun contenu plaçant une discipline de combat dans la semaine du coureur n'a été trouvé sur les deux requêtes du 2026-10-17.

## Gap concurrent identifie
SERP qualitative (WebSearch, pas Google.ch, pas de PAA observé) sur « préparation Course de l'Escalade entraînement renforcement coureur » et « boxe et course à pied complément renforcement coureur cross-training » :
1. **run-motion.com** : plan de course Escalade en PDF (2017 selon les métadonnées ; contenu illisible par l'outil, résumé de la recherche du 2026-10-17 : plan running de 4 semaines avec gainage, non revérifié).
2. **HUG / Sant«e»scalade** (hug.ch, édition 2023) : entraînements collectifs gratuits les dimanches de novembre, tous niveaux.
3. **Contenus généraux de renforcement du coureur** (Decathlon, Basic-Fit, marathons.com, Walter Learning) : musculation, gainage, prévention ; aucun ne parle de boxe ni de l'Escalade.
4. Campus Coach (plan Escalade, relevé dans `docs/_research/2026-10-17-concurrence-serp.md`).
Ce qu'aucun ne couvre : la boxe comme séance de cross-training dans la semaine du coureur, où la placer, ce qu'elle n'apporte pas, avec des études citées et leurs limites.
Date de l'analyse : 2026-10-17

## CTA cible
- Lead chaud : /#planning — « Réserver une première séance » — CTA unique après la conclusion.
- Lead tiède : /services/round-by-round — « le cours collectif Round by Round » (réservation directe, dans le corps)
- Nurturing : /blog/combien-seances-boxe-par-semaine-debutant ; puis l'article `boxe-ou-crossfit-hyrox` (12 nov., à lier quand il existe)
- Interdits : séance d'essai gratuite (`docs/tarifs-reference.md` dit encore « offerte » : décision d'octobre 2026, ne pas l'écrire), promesse de chrono, de prévention des blessures ou de perte de poids.

## Sources
Toutes ouvertes le 2026-10-17, chiffre retrouvé sur la page.

| ID | Source | Éditeur, année | URL | Ce qui est retrouvé | Statut de preuve |
|---|---|---|---|---|---|
| SRC-001 | 48e Course de l'Escalade | MySwitzerland (Suisse Tourisme), 2026 | https://www.myswitzerland.com/fr-ch/decouvrir/manifestations/48e-course-de-lescalade/ | Samedi 5 et dimanche 6 décembre 2026, parc des Bastions, place de Neuve ; adultes CHF 42, enfants CHF 26 | Fait, à revérifier sur escalade.ch (D5) ; tarifs non nécessaires à l'article |
| SRC-002 | Lauersen JB, Bertelsen DM, Andersen LB, « The effectiveness of exercise interventions to prevent sports injuries », *Br J Sports Med* 48(11):871-7 | BMJ, 2014 | https://pubmed.ncbi.nlm.nih.gov/24100287/ (résumé lu via NCBI E-utilities ; bjsm.bmj.com renvoie 403) | 25 essais, 26 610 participants ; renforcement RR 0,315 (0,207-0,480) ; étirements RR 0,963, pas d'effet ; « Strength training reduced sports injuries to less than 1/3 » | Consensus (méta-analyse d'essais randomisés) ; limite : tous sports |
| SRC-003 | Buist I et al., « No effect of a graded training program on the number of running-related injuries in novice runners », *Am J Sports Med* 36(1):33-39 | SAGE, 2008 (notice Université de Groningue) | https://research.rug.nl/en/publications/no-effect-of-a-graded-training-program-on-the-number-of-running-r/ | 532 coureurs débutants, course de 6,7 km ; 13 semaines (règle des 10 %) 20,8 % vs 8 semaines 20,3 % ; P = 0,90 | Essai randomisé ; « mythe partiel » pour la règle des 10 % ; limite : débutants |
| SRC-004 | Balsalobre-Fernández C, Santos-Concejero J, Grivas GV, « Effects of Strength Training on Running Economy in Highly Trained Runners », *J Strength Cond Res* 30(8):2361-8 | NSCA, 2016 | https://pubmed.ncbi.nlm.nih.gov/26694507/ (résumé lu via NCBI E-utilities) | 5 études, 93 coureurs de haut niveau ; renforcement 2-3 fois par semaine pendant 8-12 semaines, effet net sur l'économie de course (DMS -1,42) | Consensus limité (petit échantillon, haut niveau) ; sert à dire ce que la boxe n'est pas |
| SRC-005 | « À vos baskets pour les entraînements de la Course de l'Escalade 2023 » | HUG, 2023 | https://www.hug.ch/node/32558 | Entraînements gratuits, sans inscription, tous niveaux, les dimanches de novembre 2023 (Versoix, Le Lignon, Belle-Idée, Bastions), association Sant«e»scalade | Fait daté 2023 ; ne vaut pas pour 2026 (D2) |

Rejetées : escalade.ch (403, contenu non lu) ; run-motion PDF (illisible, non cité) ; distance 7,3 km (sites tiers seulement, D1).

## Donnees brutes
- Round by Round : cours collectif, 8 personnes maximum, 1 coach, 50 min, sans échange de coups, CHF 40 la séance (`docs/tarifs-reference.md`).
- Coaching Solo : CHF 120 la séance ; pack 10 séances CHF 1'100, valable 6 mois.
- Studio : La Voie-Creuse 16, 1202 Genève, près de la place des Nations, un ring (sans mesure).
- Nicolas de Boccard : licence SwissBoxing #102860, 20 ans de pratique, 5 ans à la tête du studio.
- Protocole : échange initial, observation à l'échauffement, intensité adaptée à l'état du jour (`proofs.md`, générique).
- Calendrier : publication le 5 novembre, course les 5 et 6 décembre 2026 (quatre semaines).

## Preuves et limites
- Autorisé : bénéfices sportifs présentés comme potentiels et variables ; mécanismes (gainage, coordination, rounds).
- Interdit : « gagner X secondes », « prévenir les blessures », toute promesse médicale, 100+, 98 %, 99 %, « 20 ans de coaching », « ring professionnel », témoignage ou anecdote de coureur inventés, dénigrement du running ou d'un club.
- Chaque chiffre d'étude porte sa limite dans la même phrase ou la suivante.

## Citations exploitables (GEO — Quotation Addition)
- « Strength training reduced sports injuries to less than 1/3 and overuse injuries could be almost halved » — Lauersen, Bertelsen, Andersen, *British Journal of Sports Medicine*, 2014 (https://pubmed.ncbi.nlm.nih.gov/24100287/). Citer avec traduction et la limite « tous sports confondus ».
- « no effect of a graded training program (13 weeks) in novice runners » — Buist et al., *American Journal of Sports Medicine*, 2008 (https://research.rug.nl/en/publications/no-effect-of-a-graded-training-program-on-the-number-of-running-r/).
- Point clé sans citation verbatim : renforcement et pliométrie 2 à 3 fois par semaine pendant 8 à 12 semaines améliorent l'économie de course chez des coureurs entraînés — Balsalobre-Fernández et al., *J Strength Cond Res*, 2016.
