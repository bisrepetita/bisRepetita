---
slug: choisir-boxe-anglaise-thai-kickboxing
status: brief
planned_pubDate: 2026-12-01
module: E
module_secondary: B
page_type: article
primary_keyword: boxe anglaise ou boxe thaï
created_on: 2026-10-17
source_plan: docs/seo/plan-editorial-2026-10-11.md §5 (réserve)
---

# Brief SEO : Boxe anglaise, thaï ou kickboxing : comment choisir (version non genrée)

> **Cannibalisation, point d'attention n° 1.** `quelle-boxe-choisir-femme-geneve` (en ligne depuis le 4 août 2026, mise à jour le 17 octobre) a pour H1 « Boxe, boxe thaï, kickboxing : quelle discipline choisir pour débuter ? » et traite déjà boxe anglaise vs thaï pour une débutante. Cet article ne la double pas : il est **recentré** sur ce qu'elle ne couvre pas (voir « Angle unique » et « Anti-cannibalisation »). Si les données GSC fraîches montrent que l'article existant se positionne déjà sur les requêtes non genrées, la bonne décision est de le rafraîchir et d'abandonner celui-ci (D1).

## Décisions requises

D1 se tranche avant la rédaction ; D2, D3 et D5 avant la publication (validation Nicolas, plan §6.5).

| # | Décision | Qui | Bloque |
|---|---|---|---|
| D1 | **Cannibalisation, test de données** : exporter GSC (`/seo-gsc`, 3 derniers mois) et regarder si `quelle-boxe-choisir-femme-geneve` reçoit déjà des impressions sur « boxe anglaise ou thaï », « différence boxe anglaise boxe thaï », « boxe anglaise kickboxing ». Si elle est dans le top 10 sur ces requêtes non genrées : rafraîchir l'existant (`/seo-refresh`) et **retirer ce brief du calendrier**. Sinon : publier ce brief recentré. L'export de juin 2026 est trop ancien pour décider | Jon | la rédaction |
| D2 | **Périmètre de parole** : Nicolas pratique la boxe anglaise (20 ans, licence SwissBoxing). Rien dans `proofs.md` ne l'autorise à parler d'expérience de la boxe thaï ou du kickboxing. L'article décrit ces disciplines **d'après les règles et fiches officielles citées**, sans « nous avons pratiqué ». Nicolas accepte-t-il aussi de dire au lecteur, dans « Notre avis », que si son envie est de frapper aux jambes, le studio n'est pas le bon endroit (le studio n'enseigne que la boxe anglaise) ? | Nicolas | la publication |
| D3 | **Contact en séance** : formulation à valider mot pour mot : « Round by Round : 1 coach (le CLAUDE.md du dépôt dit encore 2 coachs : à aligner, `business/profile.md`), aucun échange de coups ; dans les autres formats, un contact léger, contrôlé et consenti peut être proposé sur demande ; jamais imposé » (`business/profile.md`, `message.md`) | Nicolas | la publication |
| D4 | **Règles des deux autres disciplines** : l'outil n'a pas ouvert de règlement fédéral de boxe thaï ni de kickboxing (seules les fiches J+S de prévention sont lues). Avant d'écrire le tableau, le writer sourcera une page fédérale ou un règlement par discipline (`/seo-sources`) ; à défaut, le tableau reste au niveau « outils autorisés » (poings ; poings et jambes ; poings, jambes, coudes, genoux) sans règle de compétition | Writer (`/seo-sources`) | le tableau |
| D5 | **Signature** : « Nicolas de Boccard » après relecture du texte, sinon « Équipe Bis Repetita » | Nicolas | la publication |

## Metadata
- Slug: choisir-boxe-anglaise-thai-kickboxing
- Slug rationale: 5 mots, verbe d'action + les trois disciplines, sans date ; volontairement **sans « femme »** pour se distinguer de `quelle-boxe-choisir-femme-geneve` et sans « geneve » pour rester dans la fourchette (l'ancrage local est dans le title/meta et le corps).
- Page type: article
- Module: E adapté (comparatif de disciplines, sans étoiles ni classement de clubs, verdict « Notre avis ») + B (ancrage local Genève)
- Target word count: 1 500 – 1 900 mots
- Primary keyword: boxe anglaise ou boxe thaï
- Intention de recherche (unique) : comparer pour choisir une discipline de combat à pratiquer. Le lecteur hésite entre trois pratiques voisines ; il veut savoir ce que chacune demande (outils, contact, matériel, parcours), pas combien coûte un cours (article prix) ni quel format de cours prendre (article du 20 oct.).
- Date: 2026-10-17
- Date de publication prévue : mardi 1er décembre 2026 (première semaine de décembre, avant les fêtes ; contenu evergreen)
- Persona: Sous-persona A (débutant total curieux, homme ou femme 25–45 ans, qui « ne fait pas la différence entre anglaise, thaï, savate », `docs/seo/context.md`) et sous-persona C (sportif en reconversion). Questions : 1. Quelle est la vraie différence entre ces trois sports ? 2. Lequel est le moins violent pour un début ? 3. Si je veux un jour la compétition ou me défendre, lequel ouvre quoi ?
- Tonalite: net, factuel, sans dénigrement ; technique quand on parle de règles (`docs/brand/voice.md`, matrice de ton).
- Registre: vouvoiement systématique, pas d'exclamation, pas de superlatif.
- Signature : « Équipe Bis Repetita » par défaut ; « Nicolas de Boccard » seulement après sa validation (D5).
- Contexte charge depuis: seo-context.md ✓ (`docs/seo/context.md`, `docs/brand/identity.md`, `message.md`, `voice.md`, `patte-ecrite.md`, `anti-patterns.md`, `proofs.md`, `themes.md`, `docs/business/profile.md`, `docs/tarifs-reference.md`, `PRODUCT.md`, `docs/_research/2026-10-17-concurrence-serp.md`, plan éditorial §1, §2, §5, §6). Pas de `docs/seo/content-map.md` ni de `docs/seo/competitors.md` : maillage établi par `ls src/content/blog`, `ls -R src/pages` et `docs/seo/maillage.md`.
- Research bundle (`.seo-data/`) : aucun `keywords-*.json` ni `serp-*.json` pour ce sujet ; pas de DataForSEO. Contexte SERP : analyse qualitative du 2026-10-17 dans `docs/_research/2026-10-17-concurrence-serp.md` (ligne « boxe anglaise vs thaï vs kickboxing »). Gatekeeper : `.seo-data/gatekeeper-choisir-boxe-anglaise-thai-kickboxing.json` (PASS conditionnel, voir D1). Pas de `entities-*.json` (critère 17 non applicable).

## Snippet recommande

> **Exception projet** : le `title` du frontmatter est rendu comme H1 (pas de champ `seoTitle`). Un seul texte sert de title et de H1 ; la règle « H1 ≠ title » ne s'applique pas ici (plan §6.3).

- Title (= H1) : Boxe anglaise, thaï ou kickboxing : comment choisir (51 car.)
- Meta description : Poings, coudes, genoux, jambes : ce que chaque discipline demande, le contact en séance et le cas où la boxe anglaise n'est pas votre choix. (140 car.)

## Snippet variantes

| Angle | Title (= H1) | Meta description |
|---|---|---|
| **Expertise (E-E-A-T)** — recommandée | Boxe anglaise, thaï ou kickboxing : comment choisir (51 car.) | Poings, coudes, genoux, jambes : ce que chaque discipline demande, le contact en séance et le cas où la boxe anglaise n'est pas votre choix. (140 car.) |
| **Solution (douleur)** | Boxe anglaise ou boxe thaï : laquelle vous convient ? (53 car.) | Outils autorisés, contact, matériel, compétition en Suisse : comparez boxe anglaise, thaï et kickboxing selon votre profil avant de choisir. (140 car.) |
| **Local (GEO)** | Boxe anglaise, thaï ou kickboxing à Genève : laquelle ? (55 car.) | Trois sports de combat voisins, trois façons de s'entraîner à Genève. Ce qui les distingue et notre avis d'un studio de boxe anglaise. (134 car.) |

**Recommandation** : variante Expertise. Elle annonce un verdict (« comment choisir », avec un cas où nous disons non), ce que les comparatifs génériques du top (enseignes de sport, plateformes) ne font pas. « Genève » reste dans la meta de la variante locale, à n'utiliser que si D1 montre que la requête non locale est saturée.

## Keyword Cluster

Volumes : **non vérifiés** (pas de DataForSEO). Aucune de ces requêtes n'apparaît dans l'export GSC mars–juin 2026 consulté (données anciennes, voir D1).

| Role | Keyword (query brut) | Volume | Placement | Formulation naturelle (prose) |
|---|---|---|---|---|
| **Principal** | boxe anglaise ou boxe thaï | Non vérifié | Title/H1, meta, 100 premiers mots, Notre avis | choisir entre la boxe anglaise et la boxe thaï |
| Secondaire | différence boxe anglaise boxe thaï | Non vérifié | H2 1, tableau | ce qui distingue la boxe anglaise de la boxe thaï |
| Secondaire | boxe anglaise ou kickboxing | Non vérifié | H2 1, H3 jambes | boxe anglaise ou kickboxing |
| Secondaire | quel sport de combat choisir | Non vérifié | Intro, H2 3 | quel sport de combat choisir quand on débute |
| Secondaire | boxe thaï ou kickboxing | Non vérifié | H2 1, FAQ | la différence entre boxe thaï et kickboxing |
| Secondaire | boxe anglaise Genève | Non vérifié | H2 4, conclusion | pratiquer la boxe anglaise à Genève |
| Secondaire | kickboxing Genève | Non vérifié | H2 4 (une mention, sans club nommé) | s'entraîner au kickboxing à Genève |
| Long-tail | boxe thaï ou boxe anglaise pour débuter | Non vérifié | H2 3, FAQ | commencer par la boxe anglaise ou par la boxe thaï |
| Long-tail | boxe anglaise sans contact possible | Non vérifié | H3 contact, FAQ | boxer sans recevoir de coups |
| Long-tail | quel sport de combat pour se défendre | Non vérifié | FAQ | quel sport de combat pour se défendre |
| Long-tail | licence boxe Suisse compétition | Non vérifié | H3 compétition | passer de l'entraînement à la compétition en Suisse |

**Rappel au writer** : dans le corps de l'article, utiliser toujours la colonne « Formulation naturelle », jamais la forme brute du query (`writing-rules.md` règle 10). « Round by Round » et « Small Group » sont des noms de formats : majuscules conservées, sans guillemets.

## Structure

Contrat de fin d'article : FAQ → Conclusion → CTA unique → Sources. 6 H2, au plus 3 H3 par H2, aucun H4.

### Avant le premier H2 : encart « L'essentiel en bref » + réponse directe + critères
Keywords: boxe anglaise ou boxe thaï, quel sport de combat choisir
Bloc AEO: Self-contained
Contenu:
- Encart `Tldr` (composant existant) en 4 lignes : ce qui distingue les trois disciplines en une ligne chacune ; le critère qui décide (ce que vous voulez frapper, avec quoi, et si vous acceptez le contact) ; le choix par défaut pour débuter (voir « Notre avis ») ; « Disciplines et fiches officielles relues en octobre 2026 ».
- Réponse directe en 2–3 phrases (BLUF) : le bon sport dépend d'abord des outils que vous voulez apprendre (poings seuls, poings et jambes, ou poings, jambes, coudes et genoux), ensuite du niveau de contact que vous acceptez et du but visé (forme, technique, compétition). Aucune des trois n'est « plus forte » : elles apprennent des choses différentes.
- Phrase de transparence obligatoire : le studio **enseigne la boxe anglaise** ; il ne propose ni boxe thaï ni kickboxing. L'article compare donc les trois d'après les règles et fiches officielles, et dit où le lecteur a intérêt à chercher ailleurs. Aucun club ni enseigne nommé.
- Renvoi unique vers l'article existant : pour une débutante qui hésite sur les peurs et le premier pas, `quelle-boxe-choisir-femme-geneve` ; cet article-ci traite la comparaison de fond, pour tous.

### H2: Boxe anglaise, thaï, kickboxing : ce que chaque discipline autorise
Keywords: différence boxe anglaise boxe thaï, boxe thaï ou kickboxing
Bloc AEO: Comparison
Contenu:
Tableau récapitulatif (module E §2), colonnes : Discipline | Ce qui frappe | Ce que l'on apprend en premier | Contact habituel à l'entraînement | Matériel de départ. Trois lignes seulement (boxe anglaise ; kickboxing ; boxe thaï), pas de quatrième discipline (le cardio-boxe sur musique relève de `cardio-boxe-ou-boxe-technique`, ne pas le reprendre ici). Contenu de la colonne « ce qui frappe » à sourcer (D4) : poings seuls ; poings et jambes ; poings, jambes, coudes et genoux. Une phrase par discipline sous le tableau, sans jugement de valeur. **Ne pas reprendre** le tableau « discipline / en une phrase / idéale pour » de l'article existant : ici, les colonnes sont factuelles (outils, contact, matériel), pas « idéale pour ».

### H2: Ce qui change dans une séance : contact, matériel, risques
Keywords: boxe anglaise sans contact possible
Bloc AEO: Pros-cons
Contenu:
Une phrase d'ouverture : trois différences se voient dès la première semaine.

**H3 : Le contact : ce qui est prévu, ce qui est proposé**
- Cadre officiel (SRC-001, SRC-002, statut **consensus, règle officielle**) : en Suisse, J+S encadre la boxe light-contact et le kick-boxing light ; la fiche boxe light-contact « interdit absolument toute frappe à la tête chez les moins de 8 ans », la fiche kick-boxing (03/2026) « jusqu'à l'âge de 10 ans au moins » ; sparring = « seuls de légers contacts corporels » pour les jeunes. À présenter comme un repère de culture de sécurité, pas comme une règle pour adultes.
- Au studio (D3) : Round by Round, aucun échange de coups ; dans les autres formats, contact léger, contrôlé et consenti seulement sur demande. **Ne jamais suggérer que tous les formats incluent du sparring** (`anti-patterns.md`).
- Dire que dans les trois disciplines, on peut s'entraîner sans recevoir de coups (sacs, pattes d'ours, ombre) ; le contact est un choix du club et de la personne.

**H3 : Matériel et protections de départ**
Ce qu'il faut pour débuter : gants et bandes pour la boxe anglaise (renvoi `equipement-boxe-debutant-geneve`) ; protège-tibias et protège-pieds évoqués pour les disciplines à coups de pied **seulement si une source les confirme (D4)**. Protège-poitrine pour les filles dès que la poitrine se développe, gants 10 oz minimum : repères de la fiche J+S kick-boxing (SRC-002), à ne citer que dans le contexte jeunes.

**H3 : Blessures : ce que l'on sait et ce que l'on ne sait pas**
Aucune donnée comparative fiable entre les trois disciplines n'a été retrouvée (voir Doutes) : l'écrire tel quel. Rappeler que les blessures de loisir dépendent surtout de l'encadrement et du contact choisi ; renvoi vers `la-boxe-est-elle-dangereuse-blessures-loisir` (chiffres déjà publiés sur le site). Interdit : « la boxe thaï est plus dangereuse », « le kickboxing blesse moins ».

### H2: Choisir selon ce que vous cherchez
Keywords: quel sport de combat choisir, boxe thaï ou boxe anglaise pour débuter, quel sport de combat pour se défendre
Bloc AEO: Step-by-step
Contenu:
Arbre de décision en trois H3 « Si vous cherchez… → discipline, puis la suite ». **Notre avis n° 1 en fin de H2 (blockquote).**

**H3 : Si vous cherchez une technique de poings précise**
→ boxe anglaise. Un seul outil (les poings) oblige à soigner garde, appuis et distance ; chaque défaut se voit, donc se corrige. Lien vers `/services/coaching-solo` pour le format où la correction est la plus fine.

**H3 : Si vous voulez frapper aussi avec les jambes (et les coudes, les genoux)**
→ kickboxing (poings et jambes) ou boxe thaï (en plus, coudes et genoux), à pratiquer **dans un club qui les enseigne** : le studio n'en propose pas (D2). Dire à quoi faire attention en choisissant un club, sans en nommer : un encadrement identifié, un niveau de contact annoncé, un cadre pour débutants. Ces trois critères ne visent personne en particulier.

**H3 : Si vous pensez à la compétition ou à la licence**
Repère : en Suisse, la boxe olympique relève de SwissBoxing, le kick-boxing light de WAKO Switzerland (SRC-002 le nomme) ; l'âge minimal de licence n'a pas été retrouvé en ligne, ne pas en inventer (Doutes). **Ne pas promouvoir la préparation compétiteur** (offre en pause éditoriale, `anti-patterns.md`) : un paragraphe d'orientation, sans CTA.

**« Notre avis » n° 1 (fin de ce H2, blockquote)** : `> **Notre avis :** …` en 3–4 phrases. Contenu attendu : pour apprendre une technique de poings précise et progresser sans contact obligatoire, la boxe anglaise ; pour travailler aussi les jambes, un club de kickboxing ou de boxe thaï ; les bases de garde, d'appuis et de distance acquises en boxe anglaise se transposent (formulation prudente, non mesurée : à valider par Nicolas, D2). Ce n'est pas le bon choix chez nous si vous voulez frapper avec les jambes, les coudes ou les genoux. **Ne pas recopier** le « Notre avis » de l'article existant.

### H2: Boxe anglaise au studio : ce que nous proposons, et pour qui
Keywords: boxe anglaise Genève, kickboxing Genève
Bloc AEO: Self-contained
Contenu:
Ancrage module B, 120–160 mots : La Voie-Creuse 16, près de la place des Nations, un ring ; la boxe anglaise se pratique en coaching solo (CHF 120 la séance), duo (CHF 140), trio (CHF 160), Small Group (CHF 200, libellé de la page tarifs, sans prix par personne calculé) et Round by Round (CHF 40, 8 personnes au plus, 1 coach, 50 minutes, sans échange de coups). Renvoi vers l'article du 20 oct. pour le choix du format ; **aucun pack, aucun repère de marché** (`prix-cours-boxe-geneve-2026` répond à « combien »).

### H2: Questions fréquentes sur le choix d'un sport de combat
Keywords: boxe thaï ou kickboxing, quel sport de combat pour se défendre, boxe thaï ou boxe anglaise pour débuter
Bloc AEO: Self-contained (chaque réponse lisible seule, 40–80 mots)
Contenu:
Trois H3 :
**H3 : Peut-on changer de discipline après quelques mois ?** Oui ; les bases de garde et de déplacement se transposent en partie (inférence, aucune étude boxe) ; il y a de nouveaux gestes à apprendre.
**H3 : Quel sport de combat pour se défendre ?** Réponse prudente : aucun ne garantit une capacité de défense ; l'entraînement régulier, la distance et la prévention comptent ; renvoi vers `boxe-self-defense-femme-geneve` (déjà publié) pour le détail. Aucune promesse.
**H3 : À partir de quel âge ?** Repères J+S (SRC-001, SRC-002) : pas de frappe à la tête avant 8 ans (boxe light-contact) ou 10 ans (kick-boxing light) ; renvoi vers `a-quel-age-commencer-la-boxe`.

### H2: Conclusion : choisir, puis essayer sans vous engager sur dix séances
Keywords: 
Bloc AEO: —
Contenu:
80–120 mots. Le choix n'est pas définitif ; commencer par la discipline dont les outils vous attirent. Ancrage local : studio La Voie-Creuse 16, près de la place des Nations, un ring (sans mesure ni « professionnel »). CTA unique : « Réserver une première séance » → `/#planning` (la première séance est au tarif du format choisi, aucune séance d'essai gratuite). Puis section Sources.

## Maillage interne (liens sortants)

Cibles existantes (`src/pages`, `src/content/blog`, vérifié le 2026-10-17) ou planifiées avec leur date de publication ; un lien vers une cible non publiée ne se pose qu'à sa date (`docs/seo/maillage.md` §1).

| Ancre | Cible | Section | Obligatoire |
|---|---|---|---|
| les cours de boxe à Genève | /cours-de-boxe-geneve | Intro (hub, en haut de contenu) | oui |
| quelle boxe choisir pour une débutante | /blog/quelle-boxe-choisir-femme-geneve | Intro (hub, en haut de contenu) | oui |
| ce que disent les chiffres sur les blessures | /blog/la-boxe-est-elle-dangereuse-blessures-loisir | Blessures : ce que l'on sait et ce que l'on ne sait pas | oui |
| le coaching solo | /services/coaching-solo | Si vous cherchez une technique de poings précise | oui |
| le matériel pour débuter | /blog/equipement-boxe-debutant-geneve | Matériel et protections de départ | non |
| choisir entre cours privé, petit groupe et collectif | /blog/cours-boxe-prive-petit-groupe-collectif (publié le 20 oct. 2026) | Boxe anglaise au studio : ce que nous proposons, et pour qui | oui |
| la boxe technique, pas seulement du cardio | /blog/cardio-boxe-ou-boxe-technique (publié le 29 oct. 2026) | Boxe anglaise, thaï, kickboxing : ce que chaque discipline autorise | non |
| la boxe pour se défendre | /blog/boxe-self-defense-femme-geneve | Questions fréquentes sur le choix d'un sport de combat | non |
| à quel âge commencer la boxe | /blog/a-quel-age-commencer-la-boxe | Questions fréquentes sur le choix d'un sport de combat | non |
| Réserver une première séance | /#planning | Conclusion | oui |

Liens à poser **hors de cet article, le 1er déc. 2026** (actions de publication, pas maintenant) :
- `quelle-boxe-choisir-femme-geneve` → après le H2 « selon votre objectif » : « le comparatif complet des trois disciplines, pour tous » → `/blog/choisir-boxe-anglaise-thai-kickboxing` (une ligne, sans modifier le reste de l'article).
- `cardio-boxe-ou-boxe-technique` → FAQ : « boxe anglaise, thaï ou kickboxing » → cet article.
- `a-quel-age-commencer-la-boxe` → section « quelle discipline » : « choisir entre boxe anglaise, thaï et kickboxing ».

## Image Briefs

Direction : `DESIGN.md` de la refonte fait foi (photo **noir et blanc**, angles droits, sans texte). Préférer une photo réelle du studio (`src/assets/`) ; l'IA seulement pour une scène absente. Aucun coach autre que Nicolas à l'image (`proofs.md`). Pas de sparring, pas de foule, pas de texte ni de logo dans l'image. 

### Cover
- placement: cover
- type: photo
- subject: gants de boxe et bandes posés sur le ring du studio, vus de près
- description: Nature morte sobre au studio : gants, bandes, coin du ring, lumière douce, mur clair. Aucune discipline suggérée par un équipement de coups de pied. Rendu compatible N&B.
- ratio: 16:9 ; focale : droite
- alt_text: Gants de boxe et bandes de main posés sur le ring du studio Bis Repetita à Genève

### Image 2
- placement: after-h2:disciplines
- type: photo (réelle si possible : `src/assets/studio-interior.webp`)
- subject: le studio vide, ring et sacs
- description: Plan large de l'espace, lumière naturelle, aucune personne ou une seule en préparation.
- ratio: 4:3
- alt_text: Intérieur du studio de boxe Bis Repetita près de la place des Nations à Genève, avec le ring et les sacs de frappe

### Image 3
- placement: after-h3:technique
- type: photo
- subject: Nicolas corrige la garde d'une élève aux pattes d'ours
- description: Plan moyen, coach de profil, élève en garde, aucun coup à la tête ; scène de correction, pas de combat.
- ratio: 4:3
- alt_text: Coach de boxe corrigeant la garde d'une élève pendant une séance de coaching solo au studio Bis Repetita

## Objectif business
Aider le lecteur à choisir entre trois disciplines voisines et, s'il vise la boxe anglaise, à réserver une première séance (`/#planning`). Nourrir le cluster débutant vers la pillar `/cours-de-boxe-geneve`. Capter une requête non genrée que l'article femme ne vise pas, sans cannibaliser. Le franc-parler « ce n'est pas chez nous » est un signal de confiance, pas une perte de lead : le lecteur qui veut frapper aux jambes n'est pas notre client.

## Angle unique / POV
Mode A, **recentré** : la comparaison porte sur **les outils, le contact, le matériel et le parcours** (licence, compétition), pas sur « laquelle est faite pour une femme débutante » (article existant). Un studio de boxe anglaise l'écrit sans prétendre enseigner les deux autres et dit pour qui il n'est pas le bon choix. Sources : fiches J+S/OFSPO/BPA, pas d'expérience revendiquée dans la boxe thaï ou le kickboxing (D2).

## Gap concurrent identifie
Analyse qualitative du 2026-10-17 (`docs/_research/2026-10-17-concurrence-serp.md`, l'outil n'est pas Google.ch, pas de bloc PAA observable) :
- Pages qui se positionnent sur « boxe anglaise vs thaï vs kickboxing » : Decathlon Conseil Sport, Groupe Réussite, Virtuagym, Vikidia. Elles couvrent les règles (poings seuls contre jambes, coudes et genoux), le choix selon l'objectif.
- Ce qu'elles ne couvrent pas : le contact réellement pratiqué à l'entraînement et la façon de l'éviter, le cadre suisse (J+S, fédérations), l'ancrage genevois, un verdict honnête d'un studio qui n'enseigne qu'une des trois. La recherche du 17 oct. conclut : « Un comparatif général, non genré, ancré à Genève, reste à faire ».
- Le trou : un comparatif **non genré, sourcé en droit suisse du sport, qui assume que le studio n'enseigne qu'une discipline**. C'est l'angle de cet article.
Date de l'analyse : 2026-10-17

**Anti-cannibalisation avec `quelle-boxe-choisir-femme-geneve`** (H1 : « Boxe, boxe thaï, kickboxing : quelle discipline choisir pour débuter ? ») : même famille de requêtes, intentions voisines. Règles pour le writer : (1) **aucune formulation « femme », « débutante »** hors du renvoi unique de l'intro ; (2) ne pas reprendre le tableau 4 disciplines, ni le bloc « défoulement / silhouette / technique », ni la FAQ (kickboxing fait-il maigrir, discipline la moins impressionnante) ; (3) **pas de fitness-boxing** (article cardio-boxe du 29 oct.) ; (4) ajouter les liens croisés listés dans « Maillage » ; (5) si D1 montre un recouvrement fort, **ne pas publier**. Le risque résiduel est **moyen** : la requête principale reste « boxe anglaise ou boxe thaï ».

Autres risques : `cours-boxe-prive-petit-groupe-collectif` (formats, pas disciplines) et `prix-cours-boxe-geneve-2026` (prix) : une seule mention de prix, à la séance, dans le H2 studio.

## CTA cible
- Lead chaud: /#planning — « Réserver une première séance » — conclusion (CTA unique de fin).
- Lead tiède: /services/coaching-solo — « Découvrir le coaching solo » — fin du H3 technique.
- Nurturing: `cours-boxe-prive-petit-groupe-collectif` (20 oct.), puis `equipement-boxe-debutant-geneve`.
- Interdit : toute mention de séance d'essai gratuite ou offerte (décision oct. 2026).

## Sources

Lues en entier par la recherche du 2026-10-17 (`docs/_research/2026-10-17-sources-sante-parent-enfant-femmes.md` §A1) sauf mention contraire ; le writer les rouvre via `/seo-sources`.

| ID | Source | Éditeur, année | URL exacte | Ce qui est retrouvé | Statut de preuve | Usage |
|---|---|---|---|---|---|---|
| SRC-001 | Prévention des accidents en boxe light-contact (réf. 30.423.110 f) | OFSPO/J+S, BPA, Light-Contact Boxing, édition 04/2022 | https://www.bfu.ch/media/dfrpavf3/mb_f_boxe-light-contact.pdf | aucune frappe à la tête avant 8 ans ; casque jusqu'à environ 15 ans pour les formes avec touche à la tête ; sparring : légers contacts corporels | consensus, règle officielle (lue en entier) | H3 contact, FAQ âge |
| SRC-002 | Prévention des accidents en kick-boxing light (réf. 30.366.1 f) | OFSPO/J+S, BPA, WAKO Switzerland, édition 03/2026 | https://www.jugendundsport.ch/dam/fr/sd-web/v62Vbr491lST/mb_f_Kickboxing-Light.pdf | coups à la tête interdits jusqu'à 10 ans au moins ; protège-poitrine pour les filles dès le développement de la poitrine ; gants 10 oz minimum ; cite WAKO Switzerland | consensus, règle officielle (lue en entier) | H3 contact, matériel, compétition, FAQ âge |
| SRC-003 | Boxe française, anglaise, thaï (index des disciplines sportives) | Ville de Genève | https://www.geneve.ch/themes/sport/index-disciplines-sportives/boxe-francaise-anglaise-thai | page d'orientation de la Ville citée par l'analyse SERP ; contenu non rouvert pour ce brief | à vérifier | orientation locale, optionnel |
| SRC-004 | Comment choisir son type de boxe | Decathlon Conseil Sport | https://conseilsport.decathlon.fr/comment-choisir-son-type-de-boxe | page citée par l'analyse SERP ; non rouverte pour ce brief ; **source commerciale, à ne pas citer comme autorité** : sert seulement de point de contrôle sur les outils autorisés par discipline | à vérifier (source secondaire) | D4 : contrôle du tableau |

Sources à **ajouter par le writer** (D4) : un règlement ou une page fédérale pour la boxe thaï et pour le kickboxing, avant d'affirmer quoi que ce soit sur les règles de compétition. Sources de terrain (analyse SERP, **pas** à citer, aucun club nommé) : Groupe Réussite, Virtuagym, Vikidia ; `docs/_research/2026-10-17-concurrence-serp.md`.

## Claims et statut de preuve

| ID | Affirmation (formulation autorisée) | Statut | Source |
|---|---|---|---|
| CLM-001 | Boxe anglaise : seuls les poings frappent. Kickboxing : poings et jambes. Boxe thaï : poings, jambes, coudes et genoux. | to_confirm (contrôle par une source fédérale (D4) avant rédaction) | SRC-004 |
| CLM-002 | J+S (boxe light-contact) : aucune frappe à la tête avant 8 ans ; sparring limité à de légers contacts corporels pour les jeunes. | confirmed (repère de sécurité pour mineurs, pas une règle pour adultes) | SRC-001 |
| CLM-003 | J+S (kick-boxing light, 03/2026) : coups à la tête interdits jusqu'à 10 ans au moins ; protège-poitrine pour les filles dès le développement de la poitrine ; WAKO Switzerland cité. | confirmed (contexte jeunes) | SRC-002 |
| CLM-004 | Le studio enseigne la boxe anglaise ; il ne propose ni boxe thaï ni kickboxing. | to_confirm (à valider par Nicolas (D2) ; expertise de `docs/seo/context.md`) | — |
| CLM-005 | Round by Round : aucun échange de coups ; autres formats : contact léger, contrôlé et consenti sur demande. | to_confirm (formulation exacte à valider (D3)) | — |
| CLM-006 | Les bases de garde, d'appuis et de distance de la boxe anglaise se transposent en partie vers les autres disciplines. | hypothesis (inférence du studio, aucune étude ; à présenter comme telle) | — |
| CLM-007 | Prix publiés à la séance : solo 120, duo 140, trio 160, Small Group 200, Round by Round 40 (CHF). | confirmed (libellés exacts de `/tarifs` ; aucun pack ; Small Group sans prix par personne) | — |
| CLM-008 | Une discipline est plus dangereuse, plus efficace pour se défendre ou fait plus maigrir qu'une autre. | forbidden (aucune donnée comparative retrouvée ; promesse interdite) | — |

## Donnees brutes
- Prix (`docs/tarifs-reference.md`, mise à jour 2026-03-23) : Solo CHF 120 ; Duo CHF 140 ; Trio CHF 160 ; Small Group CHF 200 la séance ; Round by Round CHF 40 la séance. **Packs : ne pas les citer** (renvoi vers l'article prix).
- Durées : coaching 60 min ; Round by Round 50 min. Effectifs : Round by Round 8 au plus, 1 coach ; Small Group 4 à 8 (Nicolas ; la page dit « 4 personnes » dans la grille et « 6 max » dans une meta : contradiction, ne pas citer d'effectif Small Group hors du libellé « 4 à 8 » validé par Nicolas, `docs/business/profile.md`).
- Équipe : Nicolas de Boccard, licence SwissBoxing #102860, 20 ans de pratique, 5 ans à la tête du studio. Studio : La Voie-Creuse 16, 1202 Genève, près de la place des Nations ; « un ring ».

## Preuves et limites
- Utilisables (`proofs.md`) : « Nicolas pratique la boxe anglaise depuis 20 ans » ; « Nicolas est à la tête du studio depuis 5 ans » ; « Nous mettons la boxe au service de vos objectifs ».
- Interdits : « 20 ans de coaching » ; 100+, 98 %, 99 %, 10K+ ; promesse de résultat ou de capacité de défense ; séance d'essai gratuite ; expérience revendiquée en boxe thaï ou kickboxing ; nommer ou comparer un club ; nom, photo ou qualification de Lionel, Jeremy, Eliza ; « entraîneur agréé Swiss Boxing » (formule des pages services, non couverte par `proofs.md`) ; toute suggestion que tous les formats incluent du sparring ; promotion de la préparation compétiteur.

## Citations exploitables (GEO — Quotation Addition)
- « interdisent absolument toute frappe à la tête chez les moins de 8 ans » — OFSPO/J+S, BPA, *Prévention des accidents en boxe light-contact*, 04/2022 (SRC-001).
- « interdisent strictement les coups à la tête jusqu'à l'âge de 10 ans au moins » — OFSPO/J+S, BPA, WAKO Switzerland, *Prévention des accidents en kick-boxing light*, 03/2026 (SRC-002).
Formulations tirées de la recherche du 2026-10-17 ; le writer vérifie la citation mot pour mot dans le PDF avant de la mettre entre guillemets.

## Doutes signalés
- Aucun volume de recherche, aucune SERP Google.ch : priorité fondée sur l'intention et le trou relevé par la recherche du 17 oct., pas sur des volumes. **D1 est le vrai test.**
- Aucune donnée comparative sur les blessures entre les trois disciplines n'a été retrouvée : ne rien affirmer.
- Âge minimal de licence SwissBoxing : non trouvé (recherche du 17 oct.) ; demander à SwissBoxing, ou ne pas l'écrire.
- La page `/services/boxe-femme` et l'article existant disent que la boxe anglaise est le point d'entrée « le plus adapté » : rester cohérent avec cette position sans la copier.

## Spec machine
Spec draft : `content/_drafts/blog/choisir-boxe-anglaise-thai-kickboxing.spec.draft.json` (sans hashes). Artefact gatekeeper : `.seo-data/gatekeeper-choisir-boxe-anglaise-thai-kickboxing.json`. La finalisation (`finalize_spec.py --research-artifact gatekeeper=…`) reste à faire après les décisions bloquantes ; l'image spec suivra la spec finalisée.
