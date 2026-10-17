---
slug: seance-boxe-femme-specificites
status: brief
planned_pubDate: 2026-10-22
module: C
module_secondary: B
page_type: article
created_on: 2026-10-17
source_plan: docs/seo/plan-editorial-2026-10-11.md §4, mini-brief n° 2
health_review_required: true
---

# Brief SEO : Séance de boxe pour femme, ce qui change vraiment

## Metadata
- Slug: seance-boxe-femme-specificites
- Slug rationale: slug du plan (règle « slug brief = slug final ») ; 4 mots, kebab-case, sans date ; « seance » + « specificites » réservent le terrain « ce qui se passe dans une séance » sans prendre le slug générique `boxe-femme-geneve`, déjà tenu par le hub `/services/boxe-femme` et le guide.
- Page type: article
- Module: C (YMYL léger : plancher pelvien, post-partum, cycle) + B (local, studio de Genève). Pas de module E : ce n'est pas un comparatif, mais le plan demande un bloc « Notre avis » (voir Structure).
- Target word count: 1 500 à 1 800 mots (hors sources)
- Primary keyword: séance de boxe femme
- Date: 2026-10-17
- Persona: Sous-persona B, la femme débutante (25-50 ans), qui a déjà lu ou décidé « boxe » et se demande ce qui sera réellement différent pour son corps. Ses 3 questions : 1) « Est-ce que je fais la même boxe que les hommes, ou une version allégée ? » 2) « Que se passe-t-il pour ma poitrine, mes sauts, mon cycle, ma reprise après une grossesse ? » 3) « À quoi ressemble une séance qui tonifie, concrètement, minute par minute ? »
- Tonalite: respectueux, explicite, net (matrice `docs/brand/voice.md`, ligne « Femme recherchant un cadre sûr ») ; mécanisme plutôt que slogan ; aucune peur instrumentalisée.
- Registre: vouvoiement ; pas d'exclamation ; pas de superlatif ; pas de garantie de résultat ; aucune promesse médicale.
- Signature: « Équipe Bis Repetita » par défaut ; « Nicolas de Boccard » seulement après validation du texte par Nicolas dans le document commenté (`docs/brand/voice.md`, plan §6.5).
- Contexte charge depuis: seo-context.md ✓ (`docs/seo/context.md`, `docs/brand/{identity,message,voice,patte-ecrite,anti-patterns,themes,proofs}.md`, `docs/business/profile.md`, `docs/tarifs-reference.md`, `PRODUCT.md`, `project.yaml`, `docs/_research/2026-10-17-*.md`). `docs/seo/content-map.md` : absent (maillage construit sur `ls src/content/blog` et `ls -R src/pages`).
- Research bundle (`.seo-data/`) : aucun `keywords-*.json` ni `serp-*.json` pour cette requête ; `gsc-bisrepetita-ch-last_3_months.json` = période 2026-03-25 → 2026-06-23 (ancienne, citée comme telle) : « boxe femme geneve » 25 impressions, position 9,3 ; « cours de boxe femme » 7 impressions, position 7,4 ; aucune impression sur « séance de boxe femme ». Pas d'`entities-*.json` (critère 17 non applicable).

## Snippet recommande
**Exception projet** (plan §6.3, `brief-rules.md`) : le `title` du frontmatter est rendu comme H1, il n'existe pas de champ `seoTitle`. Un seul libellé sert donc de title et de H1 ; la règle « H1 ≠ title » ne s'applique pas ici.

- Title (= H1): Séance de boxe pour femme : ce qui change vraiment (50 car.)
- Meta description: Même technique, cadre ajusté : séance type de 60 minutes, brassière, plancher pelvien, cycle, post-partum. Réservez une première séance à Genève. (145 car.)

Recommandation : variante « Solution » ci-dessus, parce que l'intention est informationnelle (« qu'est-ce qui est spécifique ») et que le libellé du plan répond mot pour mot à cette question. La forme « pour femme » est préférée à « femme » seul dans le title parce qu'il est aussi le H1 lu par la lectrice.

## Snippet variantes
| Angle | Title (= H1) | Meta |
|---|---|---|
| Expertise (E-E-A-T) | Séance de boxe femme : ce que le coach adapte, et pourquoi (58 car.) | Ce que le coach ajuste pour une femme : poitrine, sauts, cycle, grossesse. Séance type de 60 minutes, sans contact. Studio de boxe à Genève. (140 car.) |
| Local (GEO) | Séance de boxe pour femme à Genève : ce qui change (50 car.) | Séance type de 60 minutes, sans contact, près de la place des Nations : ce qui change pour une femme et ce qui reste la même boxe. (130 car.) |

## Keyword Cluster
Volumes : **Non vérifié** partout (pas de DataForSEO ; GSC ancien sans impression sur ces requêtes). Aucun chiffre estimé.

| Role | Keyword (query brut) | Volume | Placement | Formulation naturelle (prose) |
|---|---|---|---|---|
| Principal | séance de boxe femme | Non vérifié | Title/H1, meta, 1re phrase de l'intro, H2 séance type | une séance de boxe pour femme / une séance de boxe quand on est une femme |
| Secondaire | programme boxe femme | Non vérifié | H2 séance type, body | le programme d'une séance de boxe pour une femme |
| Secondaire | boxe femme tonifier | Non vérifié | H2 tonification, body, alt image | tonifier son corps par la boxe / la tonification en boxe |
| Secondaire | séance de boxe adaptée femme | Non vérifié | H2 séance type | une séance de boxe adaptée à la personne et au jour |
| Secondaire | brassière boxe | Non vérifié | H2 cinq points (ligne poitrine) | la brassière de sport pour boxer |
| Secondaire | boxe plancher pelvien / boxe fuites urinaires | Non vérifié | H3 plancher pelvien | le plancher pelvien pendant les sauts / les fuites urinaires à l'effort |
| Secondaire | boxe après accouchement | Non vérifié | H3 post-partum | reprendre la boxe après un accouchement |
| Long-tail | boxe pendant les règles séance | Non vérifié | H3 cycle (3-5 phrases + lien), pas de H2 dédié | boxer pendant ses règles (le détail est dans l'article cycle) |
| Long-tail | boxe sans contact femme Genève | Non vérifié | Une seule phrase dans le H2 1, avec lien vers le hub (le sujet appartient à `/services/boxe-femme`) | une boxe sans contact à Genève |
| Long-tail | combien de temps dure une séance de boxe | Non vérifié | H2 séance type (1re phrase) | une séance dure 60 minutes en coaching privé |
| Long-tail | sauter à la corde fuites urinaires | Non vérifié | FAQ | sauter à la corde quand on a des fuites |

**Rappel au writer** : dans le corps de l'article, utilise toujours la colonne "Formulation naturelle", jamais la forme brute du query. Voir `writing-rules.md` (règle 10) / `keyword-naturalization.md`. Vocabulaire imposé pour l'effet sur le corps : « tonifier, tonicité, tonification » ; « renforcement musculaire » reste admis comme terme technique.

## Structure

Ordre imposé : disclaimer santé (italique, 1re ligne du corps) → intro (3-4 phrases) → `> **L'essentiel en bref**` (4-5 puces) → H2 1 à 4 → `## FAQ` → `---` → `## Conclusion` → 1 seul CTA → `---` → `## Sources et Références`. Conclusion et Sources relèvent du contrat de fin d'article (`page-types.md`) ; les H2 de contenu sont au nombre de 5 (FAQ comprise). Aucun H4.

Disclaimer (verbatim) : « *Cet article ne remplace pas un avis médical. En cas de grossesse récente, de douleurs ou de fuites urinaires, demandez l'avis d'un professionnel de santé (médecin, sage-femme, physiothérapeute).* »

Intro : partir de la question réelle « est-ce que je vais faire la même boxe ? » (ouverture autorisée par `patte-ecrite.md` : vraie question avant inscription). Aucune anecdote ni observation attribuée à Nicolas.

### H2: La même boxe, un cadre ajusté
Keywords: séance de boxe femme, boxe sans contact femme Genève
Bloc AEO: Definition (BLUF)
Contenu: Réponse directe dans les deux premières phrases : la technique (garde, appuis, direct, crochet) est la même pour tout le monde ; ce qui change, c'est le cadre et cinq points concrets du corps. Pas de « boxe version rose », pas de sous-univers : la séance d'une femme n'est pas plus douce par principe, elle est ajustée à la personne (protocole déclaré : échange initial, observation à l'échauffement, intensité selon l'état du jour, `docs/brand/proofs.md`). Sans contact : **une phrase au maximum** (on frappe le sac et les pattes d'ours, jamais une autre personne), avec lien vers le hub `/services/boxe-femme`, qui porte ce sujet dans sa FAQ. Ne pas développer.

### H2: Une séance type de 60 minutes, bloc par bloc
Keywords: programme boxe femme, séance de boxe adaptée femme, combien de temps dure une séance de boxe
Bloc AEO: Step-by-step (tableau « Bloc / ce que le coach observe / ce qu'il ajuste », la colonne « ce que vous faites » reste brève)
Contenu: **Recentrage (anti-cannibalisation avec le hub et le guide)** : la suite des blocs est déjà publiée (hub « 60 minutes pensées pour vous », guide « Comment se déroule une séance adaptée »). Cette section ne décrit donc pas les blocs pour eux-mêmes : pour chaque bloc, elle dit **ce que le coach regarde et ce qu'il ajuste** : le souffle et les appuis à l'échauffement, l'état du jour (sommeil, fatigue, douleur, cycle si la pratiquante en parle), les variantes proposées (sans saut, gainage au sol ou debout, pompes inclinées), l'intensité des rounds choisie en fonction de ce qui a été observé. Les blocs eux-mêmes tiennent en une colonne courte. Exemple de séance en coaching privé (60 min, durée publique des formats Solo et Duo) pour une pratiquante qui revient régulièrement, pas une première séance (renvoyer au guide pour celle-ci, ne pas la réécrire). Cinq blocs du plan : 1) échauffement et observation (corde ou variante sans saut, shadow, mobilité ; le coach regarde souffle, appuis, état du jour) ; 2) technique aux pattes d'ours (combinaisons, correction de la garde et de la rotation) ; 3) tonification bras-épaules-sangle abdominale-jambes, au poids du corps, intégrée aux rounds (gainage en garde, squats en appuis, pompes adaptées) ; 4) cardio adapté au sac en rounds courts, intensité choisie ; 5) retour au calme (étirements, respiration, débrief). Les durées par bloc sont **à valider par Nicolas** (voir Décisions requises) ; tant qu'elles ne sont pas validées, le writer écrit des fourchettes cohérentes avec la structure publique du hub (« échauffement / technique aux pattes / circuit tonification et cardio / retour au calme ») sans minutage précis. Mentionner une phrase sur Round by Round (collectif, 50 min, 8 personnes max, 1 coach, sans échange de coups) pour qui préfère le groupe, avec lien.

### H2: Cinq points qui changent vraiment pour le corps
Keywords: brassière boxe, boxe plancher pelvien, boxe après accouchement, boxe pendant les règles séance
Bloc AEO: Comparison (tableau 5 lignes : « Point / ce qui se passe / ce que nous faisons en séance / statut de preuve ») puis 3 H3 pour les points qui demandent une explication. Les deux autres points (poitrine, sans contact) restent dans le tableau et l'intro de section.
Contenu du tableau :
- Poitrine et brassière : douleur mammaire à l'effort fréquente, plus marquée avec la taille de bonnet et l'effort vigoureux (Brown et al., *Br J Sports Med* 2013, marathon de Londres 2012 : 32 % des coureuses, 44 % ne faisaient rien pour la soulager) ; conseil : brassière à maintien adapté à l'effort intense ; sans contact, pas de protège-poitrine nécessaire. Statut : consensus (données de course, extrapolées à la boxe = à présenter comme analogie).
- Sauts et plancher pelvien : voir H3.
- Cycle : voir H3.
- Post-partum : voir H3.
- Sans contact par défaut : aucun échange de coups ; sparring seulement sur demande explicite, bien plus tard (fait studio public). Statut : fait studio.

### H3: Sauts et plancher pelvien
Contenu: Les fuites urinaires à l'effort sont fréquentes chez les sportives : 25,9 % (méta-analyse de 9 études), 20,7 % pour l'incontinence d'effort (Pires et al. 2020). **À écrire dans le texte** : ces chiffres portent sur des sportives de sports à fort impact (sauts, réceptions) ; il n'existe pas de donnée spécifique à la boxe. Ce n'est ni rare ni honteux ; ce n'est pas non plus une fatalité. En séance : variantes sans saut (pas de côté ou montée de genoux au lieu des sautillés et de la corde) sur simple demande, sans justification. Orienter vers un·e physiothérapeute en rééducation périnéale si les fuites persistent. Ne rien promettre sur l'effet de la boxe sur le plancher pelvien. Statut : consensus sur la fréquence ; la variante sans saut est un choix de séance, pas un traitement.

### H3: Cycle : un repère, votre ressenti décide
Contenu: 3 à 5 phrases maximum, puis lien vers `/blog/boxe-regles-cycle-menstruel`. Position du studio : les phases sont un repère, le ressenti du jour décide (observé à l'échauffement). Appui : mobilesport.ch (OFSPO) 1/2026, « Le cycle est un facteur parmi d'autres – ni à négliger, ni à surévaluer » ; McNulty et al. 2020 (effet « trivial », pas de recommandation générale possible) ; consensus UEFA 2025 (lien phase/performance non concluant). **Interdit dans cet article** : le tableau des 4 phases, la liste des symptômes, les signaux d'alerte médicaux, la FAQ règles : tout cela vit dans l'article cycle (anti-cannibalisation).

### H3: Après une grossesse
Contenu: Les sauts, la corde et les déplacements rapides sont des impacts. Repère de la ligne directrice britannique de reprise de la course (Goom, Donnelly, Brockwell, mars 2019) : impacts pas avant 3 mois post-partum environ, et seulement si des tests de charge et d'impact sont passés sans symptôme ; d'ici là, exercices à faible impact progressifs ; bilan de santé pelvienne proposé dès 6 semaines avec un·e physiothérapeute spécialisé·e. Préciser que c'est une recommandation d'experts (niveau « expert opinion » dans le document), conçue pour la course et appliquée ici par analogie aux sauts. Message à écrire, aligné sur « Notre avis » : avant 3 mois post-partum, l'avis du professionnel de santé qui vous suit passe d'abord ; ensuite, technique, pattes d'ours et sac sans sautillés tant que les critères de reprise de l'impact ne sont pas réunis. Statut : consensus d'experts. Ne rien dire du diastasis (sources non relues).

### H2: Tonifier : ce que le mot veut dire en boxe
Keywords: boxe femme tonifier, tonification
Bloc AEO: Evidence-sandwich (affirmation → preuve → conséquence pour la séance)
Contenu: « Tonifier » n'est pas un mécanisme à part : c'est un peu plus de muscle et un peu moins de masse grasse, ce qui donne un aspect plus ferme (recherche, B1 : terme d'usage, pas de processus physiologique distinct). Les femmes gagnent du muscle dans les mêmes proportions relatives que les hommes (Roberts et al. 2020 ; Refalo et al. 2025, 29 études), à partir d'une base plus basse ; une séance de boxe (technique, cardio, renforcement au poids du corps) n'est pas un protocole d'hypertrophie. Une phrase seulement sur « devenir massive », puis lien vers `/blog/boxe-femme-massive-epaules-geneve` ; une phrase sur l'effet dans la durée, puis lien vers `/blog/effet-boxe-corps-femme-geneve`. Aucun délai ni résultat promis.

Bloc avis (fin de cette section, avant la FAQ) — format imposé :
`> **Notre avis :** …` (2 à 4 phrases). Contenu attendu : pour une femme qui débute, la même boxe que tout le monde, en coaching privé ou en duo pour les premières séances, sans contact, avec deux ajustements à demander dès le premier jour si besoin (variante sans saut, brassière adaptée). Ce n'est pas le bon point de départ si vous êtes à moins de trois mois d'un accouchement ou si des fuites ou des douleurs pelviennes sont présentes : l'avis du professionnel de santé qui vous suit (médecin, sage-femme, physiothérapeute) passe d'abord, puis revenir. Texte à faire valider par Nicolas (position de studio).

### H2: FAQ
Keywords: long-tail
Bloc AEO: Self-contained (chaque réponse lisible seule, 2-4 phrases)
Contenu: 3 questions **absentes** de la FAQ du guide complet (ne pas reprendre : danger, épaules, sport de combat, entre amies, quelle boxe, règles) et de celles de l'article cycle :
- « Peut-on sauter à la corde quand on a des fuites urinaires ? » (variante sans saut, physiothérapeute ; renvoi H3)
- « Faut-il une brassière spéciale pour boxer ? » (maintien adapté à l'effort intense ; pas de protège-poitrine sans contact)
- « Une séance de boxe pour femme est-elle moins intense ? » (non : même boxe, intensité réglée sur la personne et le jour, pas sur le genre)

### Conclusion (contrat de fin)
2-3 phrases : même technique, cadre ajusté, cinq points à connaître ; puis le CTA unique.

## Maillage interne (liens sortants)
Toutes les cibles existent (`src/content/blog/*.mdx`, `src/pages/**`). Liens obligatoires marqués *.

| Ancre | Cible | Section |
|---|---|---|
| *les cours de boxe pour femmes au studio | /services/boxe-femme | H2 « La même boxe, un cadre ajusté » |
| *ce que le cycle change, phase par phase | /blog/boxe-regles-cycle-menstruel | H3 cycle |
| *l'effet de la boxe sur le corps d'une femme dans la durée | /blog/effet-boxe-corps-femme-geneve | H2 tonifier |
| *pourquoi la boxe ne rend pas massive | /blog/boxe-femme-massive-epaules-geneve | H2 tonifier |
| choisir ses premiers gants | /blog/gants-de-boxe-femme-debutante | H2 séance type (matériel, une phrase) |
| le déroulé d'une première séance et les peurs du début | /blog/boxe-femme-geneve-guide-complet | Intro ou H2 séance type |
| le cours collectif Round by Round | /services/round-by-round | H2 séance type |

7 liens pour ~1 650 mots : dans la cible (3 à 6 par 1 000 mots). Liens retour à poser à la publication (hors périmètre de ce brief, à signaler au producteur) : depuis `boxe-femme-geneve-guide-complet` (section séance) et `boxe-regles-cycle-menstruel` vers ce nouvel article.

## Image Briefs
Direction : `DESIGN.md` (photo N&B, angles droits, papier blanc, pas de fond noir en aplat, pas d'or) ; négatifs du moodboard (`docs/design/moodboard.md`) : pas de sparring, pas de foule, pas de texte dans l'image. Préférer une **photo réelle du studio** (`src/assets/`) ; une image générée ne doit jamais montrer une personne présentée comme cliente ou coach réel.

### Cover
- placement: cover
- type: photo
- preset: blog-cover-text (mode texte : none ; pas de texte dans l'image)
- subject: une femme en garde face aux pattes d'ours, plan moyen, studio
- description: Photographie N&B, lumière douce de fenêtre, une femme en tenue de sport et brassière, en garde, frappe un direct dans des pattes d'ours tenues hors champ (seules les mains du coach visibles). Fond clair, beaucoup d'espace négatif, aucune agressivité. Point focal : les gants et le regard.
- alt_text: Femme en garde qui frappe un direct dans des pattes d'ours pendant une séance de boxe au studio de Genève
- aspect_ratio: 16:9
- sortie: public/images/blog/seance-boxe-femme-specificites.webp

### Image 2
- placement: after-h2:Une séance type de 60 minutes, bloc par bloc
- type: photo
- preset: blog-inline
- subject: travail au sac en round court
- description: Photo N&B d'une femme qui enchaîne au sac de frappe, cadrage serré sur le buste et les gants, flou de mouvement léger. Pas de visage reconnaissable requis.
- alt_text: Femme qui enchaîne des coups au sac de frappe pendant le bloc cardio d'une séance de boxe
- aspect_ratio: 4:3

### Image 3
- placement: after-h3:Sauts et plancher pelvien
- type: photo
- preset: blog-inline
- subject: variante sans saut de l'échauffement
- description: Photo N&B, plan pieds et jambes, déplacement latéral en appuis sur un sol clair, à la place de la corde à sauter posée au sol. Montre qu'une alternative existe sans dramatiser.
- alt_text: Déplacement latéral en appuis à la place de la corde à sauter, variante sans saut de l'échauffement de boxe
- aspect_ratio: 4:3

### Image 4
- placement: after-h2:Tonifier : ce que le mot veut dire en boxe
- type: photo
- preset: blog-inline
- subject: gainage en garde
- description: Photo N&B d'une femme en position de gainage (planche) gants aux mains, au studio, lumière latérale douce. Corps naturel, athlétique, sans retouche excessive.
- alt_text: Femme en gainage avec gants de boxe, exercice de tonification de la sangle abdominale en séance
- aspect_ratio: 4:3

## Objectif business
Construire l'autorité sur le sous-cluster B (femme débutante) en couvrant l'intention « que se passe-t-il dans une séance » encore absente, et amener la lectrice vers le hub `/services/boxe-femme` puis vers la réservation d'une première séance (`/#planning`). Secondairement : renforcer la cohérence du cluster femmes (liens vers et depuis les articles cycle, effet, massive).

## Angle unique / POV
Mode A (mini-brief n° 2 du plan) : **la technique est la même pour tout le monde ; ce qui change, c'est le cadre et cinq points concrets du corps.** Pas de « boxe version rose », pas de sous-univers « femme » (`PRODUCT.md`, principe 3). Le studio parle de brassière, de fuites urinaires et de post-partum avec des chiffres sourcés et des gestes de séance précis (variante sans saut), là où la SERP parle de « confiance » et de calories.

### Non-cannibalisation avec les articles femmes existants
| Article existant | Ce qu'il couvre | Ce que celui-ci fait à la place |
|---|---|---|
| `boxe-femme-geneve-guide-complet` (requête « boxe femme débutante ») | Peurs (coups, volume, mixité, regard), bénéfices généraux, **déroulé d'une première séance** (10/20/20/10 min), formats, équipement, tarifs, FAQ générale | Ne traite ni les peurs ni les formats ni les prix. La séance décrite ici est une séance de pratique régulière, construite autour de la tonification, pas la première séance ; renvoi explicite au guide pour celle-ci. Aucune question de sa FAQ n'est reprise. |
| `effet-boxe-corps-femme-geneve` (« effet boxe corps femme ») | Résultats dans la durée : posture, tonicité, endurance, délais | Traite ce qui se passe **pendant** la séance et les précautions du corps ; la tonification est définie en une section courte, l'effet dans le temps renvoie à cet article. |
| `quelle-boxe-choisir-femme-geneve` (« quel sport de combat pour une femme ») | Choix de discipline : anglaise, thaï, kickboxing, fitness-boxing | Aucune comparaison de disciplines ; la boxe anglaise est un acquis. Pas de lien nécessaire. |
| `boxe-regles-cycle-menstruel` (« boxe pendant les règles ») | Science du cycle, tableau des 4 phases, symptômes, quand consulter | Un H3 de 3-5 phrases qui donne la position (repère, ressenti) et renvoie vers lui. Pas de tableau, pas de liste de symptômes, pas de FAQ règles. |
| `boxe-femme-massive-epaules-geneve` | Mythe « devenir massive » | Une phrase + lien. |
| Hub `/services/boxe-femme` (requête « boxe femme Genève ») | Section « 60 minutes pensées pour vous » (échauffement, technique aux pattes, circuit tonification et cardio, retour au calme) ; FAQ « Y a-t-il du contact physique ? » (sans contact par défaut) ; encart cycle (séance adaptée à la phase, ressenti d'abord) | Ne reprend ni la suite des blocs (traitée sous l'angle « ce que le coach observe et ajuste »), ni la FAQ sans contact (une phrase + lien), ni l'encart cycle (H3 court + lien article cycle). Le hub reste la page qui répond à « boxe femme Genève » ; cet article renvoie vers lui. |
| Section « Comment se déroule une séance adaptée » du guide complet | Première séance en 4 temps (10/20/20/10 min) : corde, shadow, garde, jab, sac, étirements | Pas de première séance, pas de minutage concurrent ; renvoi explicite. |

Risque résiduel : la requête « séance de boxe femme » pourrait faire remonter le guide (qui contient une section « Comment se déroule une séance adaptée »). Mitigation : title centré sur « ce qui change », lien croisé guide → nouvel article à la publication, et surveillance GSC à 6 semaines (`/seo-cannibalisation`).

## Gap concurrent identifie
Analyse qualitative (WebSearch, outil non Google.ch, pas de bloc « Autres questions posées » observé), complétée par `docs/_research/2026-10-17-concurrence-serp.md` §2 :
- « séance de boxe femme programme tonifier » : résultats surtout anglophones et commerciaux (programmes de 4 semaines type livre ou application, cours « lady boxing » d'un club parisien qui promet « modelage du corps » et « perte de poids ») ; aucun ne parle de brassière, de plancher pelvien ou de post-partum.
- « boxe femme Genève » : créneaux réservés aux femmes, confiance, cardio ; la recherche du 17 oct. note que personne n'écrit explicitement « sans contact ».
- « brassière / plancher pelvien / sauts » côté boxe : uniquement des pages produit (protections femme d'un distributeur sport) ; aucun contenu de séance.
- « boxe tonifier / silhouette femme » : contenus génériques « tonifie sans prendre de volume » ; la recherche note qu'une séance type de tonification détaillée est absente des SERP.
Trou : une séance décrite bloc par bloc + les cinq points du corps féminin, sourcés (statut de preuve), avec les gestes concrets du coach. Non observé dans les résultats consultés le 17 oct.
Date de l'analyse : 2026-10-17

## CTA cible
- Lead chaud: /#planning — « Réserver une première séance » — CTA unique après la Conclusion (pas de séance d'essai gratuite : ne jamais l'écrire, même si `docs/tarifs-reference.md` et la meta actuelle de `/services/boxe-femme` la mentionnent encore).
- Lead tiede: /services/boxe-femme — « les cours de boxe pour femmes au studio » (lien contextuel, H2 1)
- Nurturing: `boxe-ou-pilates-se-tonifier` (publication prévue le 27 oct.) : à lier depuis cet article lors d'un refresh une fois publié, pas avant.

## Sources
Toutes ouvertes le 2026-10-17 et chiffre retrouvé sur la page (accès : 2026-10-17).

| # | Source | Éditeur / revue, année | URL exacte | Ce qui est retrouvé | Statut de preuve |
|---|---|---|---|---|---|
| S1 | Pires T, Pires P, Moreira H, Viana R, « Prevalence of Urinary Incontinence in High-Impact Sport Athletes: A Systematic Review and Meta-Analysis » | J Hum Kinet, 2020;73:279-288 | https://pmc.ncbi.nlm.nih.gov/articles/PMC7386138 | 9 études ; 25,9 % d'incontinence urinaire chez les sportives ; 20,7 % d'incontinence d'effort | Consensus (méta-analyse ; sports à fort impact) |
| S2 | Goom T, Donnelly G, Brockwell E, *Returning to running postnatal – guidelines for medical, health and fitness professionals* | auteurs indépendants, diffusé par Athletics NI, mars 2019 | https://athleticsni.org/download/files/Returning_to_running_postnatal_guideline_for_medical_health_and_fitness_professionals_managing_this_population.05.pdf | « Return to running is not advisable prior to 3 months postnatal » ; faible impact les 3 premiers mois ; bilan pelvien proposé dès 6 semaines | Consensus d'experts (niveau 4 « expert opinion » dans le document) ; course à pied, appliqué par analogie |
| S3 | Brown N, White J, Brasher A, Scurr J, « The experience of breast pain (mastalgia) in female runners of the 2012 London Marathon and its effect on exercise behaviour » | *Br J Sports Med*, 2013, DOI 10.1136/bjsports-2013-092175 (publication confirmée via Crossref) ; texte lu = manuscrit d'auteur déposé par St Mary's University | https://research.stmarys.ac.uk/id/eprint/408/1/Brown-White-Brasher-Scurr-Experience-of-Breast-Pain-Female-Runners.pdf | 32 % de mastalgie, liée à la taille de bonnet (24 % ≤ A à 51 % ≥ F) et plus forte en effort vigoureux ; 44 % sans aucune mesure | Consensus sur le phénomène ; à présenter comme données de course |
| S4 | Roberts BM, Nuckols G, Krieger JW, « Sex Differences in Resistance Training: A Systematic Review and Meta-Analysis » | J Strength Cond Res, 2020;34(5):1448-1460 | https://pubmed.ncbi.nlm.nih.gov/32218059/ | Hypertrophie : 10 études, pas de différence significative (ES = 0,07, p = 0,31) ; force relative du haut du corps en faveur des femmes (ES = −0,60) | Consensus |
| S5 | Refalo MC, Nuckols G, Galpin AJ et al., « Sex differences in absolute and relative changes in muscle size following resistance training in healthy adults: a systematic review with Bayesian meta-analysis » | PeerJ, 2025;13:e19042 | https://peerj.com/articles/19042 (DOI 10.7717/peerj.19042 ; résumé lu via Crossref, la page PeerJ refuse l'outil) | 29 études ; gains absolus légèrement en faveur des hommes (SMD 0,19), gains relatifs similaires (0,69 %) | Consensus |
| S6 | OFSPO, mobilesport.ch, dossier « Le cycle féminin dans le sport » | Office fédéral du sport, 1/2026 | https://assets01.sdd1.ch/assets/lbwp-cdn/mobilesport/files/1767707721/mobile-dossier-1-26-zyklus-der-frau_fr.pdf | « Le cycle est un facteur parmi d'autres – ni à négliger, ni à surévaluer » ; évaluer son impact « de manière individuelle » ; carnet de cycle (« Cycle / Ressenti / Entraînement ») | Source officielle suisse |
| S7 | McNulty KL, Elliott-Sale KJ et al., « The Effects of Menstrual Cycle Phase on Exercise Performance in Eumenorrheic Women: A Systematic Review and Meta-Analysis » | Sports Medicine, 2020;50:1813-1827 | https://doi.org/10.1007/s40279-020-01319-3 | 78 études, 51 en méta-analyse ; effet « trivial » de baisse en début de phase folliculaire | Consensus (qualité des preuves faible) |
| S8 | Verhagen E, …, Elliott-Sale K, « UEFA consensus statement on menstrual cycle tracking in women's football » | BMJ Open Sport Exerc Med, 2025 | https://pmc.ncbi.nlm.nih.gov/articles/PMC12458775 | « Current evidence remains insufficient to confirm or refute significant relationships » (phase / performance, blessure) ; suivi utile pour le bien-être et les irrégularités | Consensus (position statement) |

## Donnees brutes
- Studio : La Voie-Creuse 16, 1202 Genève, près de la place des Nations ; « un ring » (sans mesure, jamais « professionnel »).
- Formats : Solo 60 min (CHF 120), Duo 60 min (CHF 140 la séance), Round by Round 50 min, 8 personnes max, 1 coach, sans échange de coups (CHF 40). Prix uniquement depuis `docs/tarifs-reference.md`, à relire avant publication. Les prix ne sont pas nécessaires à cet article ; n'en mettre au plus qu'un (Round by Round) si le writer le juge utile.
- Sans contact par défaut ; sparring seulement sur demande explicite, après une progression validée (FAQ publique de `/services/boxe-femme`).
- Matériel fourni (gants, bandes) ; vestiaires avec douches (FAQ publique du hub).
- Protocole déclaré : échange initial, observation à l'échauffement, contenu et intensité adaptés (`docs/brand/proofs.md`).
- Équipe : Nicolas (licence SwissBoxing #102860, 20 ans de pratique, 5 ans à la tête du studio). Eliza (coach fitness femme) : nommable avec prénom et rôle seulement, et uniquement si le studio confirme son autorisation (voir Décisions requises) ; par défaut, ne pas la nommer.

## Citations exploitables (GEO — Quotation Addition)
- « Le cycle est un facteur parmi d'autres – ni à négliger, ni à surévaluer. » — OFSPO, dossier mobilesport.ch 1/2026 « Le cycle féminin dans le sport » (S6).
- « Current evidence remains insufficient to confirm or refute significant relationships » (entre phases du cycle et performance ou blessure) — consensus UEFA, *BMJ Open Sport & Exercise Medicine*, 2025 (S8). À citer traduit, avec la mention « traduction ».
- « Return to running is not advisable prior to 3 months postnatal » — Goom, Donnelly, Brockwell, *Returning to running postnatal*, 2019 (S2). À citer traduit.
- « The meta-analysis showed 25.9% prevalence of urinary incontinence in female athletes in different sports. » — Pires et al., *Journal of Human Kinetics*, 2020 (S1).

## Preuves et limites
- Utilisés : protocole d'adaptation (proofs.md, générique, pas un cas client) ; bio Nicolas dans sa portée exacte ; règle sans contact (déclaration validée par Nicolas, RC4 `br2-08` : communication prudente, jamais preuve de conformité).
- Interdits : `100+`, `98 %`, `99 %`, `10K+`, « 20 ans de coaching », « Technique avant intensité », « ring professionnel », séance d'essai gratuite, toute promesse de perte de poids, de « refermer » un diastasis ou de soigner des fuites.
- Aucune anecdote, cas client ou citation de Nicolas inventés. Les chiffres de S1 et S3 viennent de la course et de sports à fort impact, pas de la boxe : le dire.
- **Relecture par un professionnel de santé (physiothérapeute en rééducation périnéale ou sage-femme) avant publication** : H3 plancher pelvien, H3 post-partum, disclaimer, bloc « Notre avis » (plan §6.6, article n° 2).

## Décisions requises
Aucune ne bloque la rédaction ; les points 1 à 3 bloquent la **publication** tant qu'ils ne sont pas tranchés.
1. **Durées de la séance type** (Nicolas) : quel minutage par bloc pour une séance de 60 min en coaching privé ? Le guide publié dit 10/20/20/10 pour une première séance, le hub dit « échauffement / technique aux pattes / circuit tonification et cardio / retour au calme » sans durée. Le writer écrit sans minutage précis tant que ce n'est pas validé.
2. **Variante sans saut** (Nicolas) : le studio confirme-t-il proposer des variantes sans saut (corde, sautillés) sur simple demande ? Si non, reformuler en conseil général.
3. **Relecteur santé** (Jon) : qui relit (physio ou sage-femme), et avant le 22 oct. ? Sans relecture, décaler la publication (règle de repli du plan).
4. **Eliza** (Jon) : son autorisation de publication (prénom + rôle) est-elle acquise ? Par défaut, ne pas la nommer.
5. **Signature** : Nicolas valide-t-il ce texte (signature « Nicolas de Boccard ») ou « Équipe Bis Repetita » ?
6. Hors périmètre, signalé : la meta de `/services/boxe-femme` et `docs/tarifs-reference.md` mentionnent encore une « séance d'essai gratuite », contraire à la décision d'octobre 2026.
