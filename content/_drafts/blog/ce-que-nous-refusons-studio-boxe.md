---
slug: ce-que-nous-refusons-studio-boxe
status: blocked
blocked_by: entretien de 15 min avec Nicolas (guide ci-dessous) + décisions D1 à D7
planned_pubDate: 2026-11-24
unblock_deadline: 2026-11-13
module: B
module_note: "avis de marque — aucun module A–E ne correspond ; base B (local, marque, E-E-A-T) adaptée, structure décrite ci-dessous"
page_type: article
created_on: 2026-10-17
interview_required: true
---

# Brief SEO : Ce que nous refusons de faire au studio

> **Statut : bloqué.** Le texte s'écrit à partir d'un entretien de 15 minutes avec Nicolas (guide en fin de section « Décisions requises »). Aucune phrase ne lui est attribuée sans sa validation dans le document (`docs/brand/message.md`, « Signature »). Si l'entretien n'a pas eu lieu le **13 novembre**, l'article glisse et un remplaçant de la réserve (plan §5) prend la place du 24 novembre.

## Décisions requises (Nicolas, avec Jon pour D1 et D6)

| # | Décision | Pourquoi c'est bloquant | Ce que les docs disent aujourd'hui |
|---|---|---|---|
| D1 | **Refus « séance gratuite qui sert d'appât »** : le garder, le reformuler ou le retirer | Le site affiche encore l'inverse : page `/cours-gratuit` (title « Séance de Boxe Gratuite à Genève », « votre première séance est automatiquement offerte ») et des meta « Essai gratuit » / « Séance d'essai offerte » sur `/services/boxe-femme`, `/services/coaching-solo`, `/services/coaching-prive`, `/services/index`, `/services/small-group-training`, `/services/round-by-round`, `/tarifs`. `docs/tarifs-reference.md` dit encore « Première séance d'essai offerte (tous formats) ». Publier ce refus avant d'aligner ces pages serait une contradiction visible. Le mot « appât » vise les autres acteurs (dont plusieurs proposent un essai gratuit) : risque de dénigrement | `docs/seo/context.md` : « Plus de séance d'essai gratuite (décision oct. 2026) ». `src/pages/tarifs.astro` l. 81 : « l'offre n'existe plus ». Les meta sont gelées par la règle SEO de `PRODUCT.md` (title/meta inchangés) : **D1 inclut l'arbitrage de Jon** sur les meta « Essai gratuit » et la page `/cours-gratuit` (garder, réécrire, rediriger) avant publication |
| D2 | **Plafond de groupe** : formuler « 8 personnes au plus en collectif, 4 à 8 en Small Group » et dire pourquoi | Le refus « pas de cours à 20 » est déjà la meta de `studio-boxe-prive-vs-salle-classique-geneve` (« Fini les cours à 20 ») et vise un club qui publie « 20 pers. max » : doublon et dénigrement implicite. Il faut le mécanisme de Nicolas (ce qu'il voit à 8) au lieu d'une comparaison | `/services/small-group-training` affiche encore « 6 personnes maximum » dans sa meta ; RC4 `br2-02` : 4 à 8. À aligner avant publication |
| D3 | **Liste des refus** : les 5 du plan sont-ils les bons, lequel retirer, lequel ajouter | C'est un avis de marque : la liste est celle de Nicolas, pas la nôtre | Plan §4 n° 11 : cours à 20, programme recyclé, sparring imposé, promesse de kilos, séance gratuite appât |
| D4 | **Feedback individuel** : comment il est suivi d'une séance à l'autre (notes, appli, mémoire du coach) | Le mécanisme « feedback individuel » est déclaré (`message.md` §4) mais sans procédé concret ; sans lui, le refus « programme recyclé » redevient un slogan | Aucun procédé documenté |
| D5 | **Les coachs** : les refus valent-ils pour Lionel, Jeremy et Eliza ; peut-on écrire « les coachs » | On ne peut pas engager l'équipe sur une règle non validée | Équipe : prénom + rôle seulement |
| D6 | **Signature** : « Nicolas de Boccard » après relecture du texte, sinon « Équipe Bis Repetita » | Manifeste à la première personne du pluriel ; une signature Nicolas exige sa validation texte par texte | `br2-09` : `per-text`, validation par commentaires dans le document |
| D7 | **Accord photo** : images 2 et 3 (pratiquante qui enroule ses bandes, Nicolas aux pattes d'ours avec une personne) — accord écrit de chaque personne visible, sinon photo sans visage identifiable | Nicolas | les images 2 et 3 |

### Guide d'entretien (15 minutes : 7 questions prioritaires, 5 si le temps le permet)

Ordre : les 7 questions **[prioritaire]** d'abord (3, 5, 6, 8, 9, 10, 12, environ 2 min chacune), les autres si le temps le permet. Consigne pour la personne qui mène l'entretien : enregistrer (avec accord) ou noter mot pour mot. Demander des faits et des procédés, pas des adjectifs. Pas de nom de client. Chaque réponse alimente la section indiquée.

1. *(si le temps le permet)* **(Groupes, H3 « Un cours de huit personnes au plus »)** Round by Round est à 8 personnes au plus, Small Group de 4 à 8. Qu'est-ce que 8 personnes vous permettent de faire que vous tenez à garder ?
2. *(si le temps le permet)* **(Groupes)** Que se passe-t-il quand un créneau est complet : refusez-vous une neuvième personne, y a-t-il une liste d'attente ?
3. **[prioritaire]** **(Programme, H3 « Une séance construite pour vous »)** Lors du premier échange, quelles questions posez-vous toujours (objectifs, passé sportif, blessures, autre) ? Est-ce aussi fait en Round by Round, et comment ?
4. *(si le temps le permet)* **(Programme)** Pendant l'échauffement, que regardez-vous précisément (appuis, souffle, mobilité, garde…) ? Donnez un exemple type de décision que cela entraîne, sans client réel.
5. **[prioritaire]** **(Programme, H3 « Une séance construite pour vous », D4)** Comment préparez-vous une séance : y a-t-il une trame fixe ? Qu'est-ce qui change d'une fois à l'autre, et comment gardez-vous la trace des corrections d'une personne ?
6. **[prioritaire]** **(Contact, H3 « Un contact toujours choisi »)** Confirmez-vous que la règle RC4 sur le contact léger (« uniquement avec l'accord des participants », « peut refuser ou interrompre l'exercice à tout moment ») peut être publiée telle quelle ? Comment proposez-vous ce type d'exercice, avec quels mots ?
7. *(si le temps le permet)* **(Contact)** Qui décide qu'une personne est prête pour un travail d'opposition, et sur quels critères visibles ?
8. **[prioritaire]** **(Promesses, H3 « Une progression suivie, sans chiffre promis »)** Quand quelqu'un arrive avec un objectif chiffré (« perdre 8 kilos d'ici l'été »), que lui répondez-vous ? Que suivez-vous à la place ?
9. **[prioritaire]** **(Première séance, H3 « Une première séance au prix affiché », D1)** Pourquoi avoir arrêté la séance d'essai offerte ? Que se passe-t-il pendant une première séance aujourd'hui ? Accepteriez-vous d'écrire ce refus, et sans le mot « appât » ?
10. **[prioritaire]** **(D3)** Dans cette liste de cinq refus, lequel compte le plus pour vous ? Y en a-t-il un à retirer, ou un autre à ajouter ?
11. *(si le temps le permet)* **(H2 « Pour qui ce cadre n'est pas fait »)** Parmi vos refus, lequel peut décevoir quelqu'un, et qui ? (ex. qui veut du sparring régulier)
12. **[prioritaire]** **(Intro, conclusion, D5, D6)** Une phrase à vous, telle que vous la diriez, pour résumer l'esprit du studio. Ces refus valent-ils pour toute l'équipe ? Signez-vous l'article après relecture ?

Après l'entretien : reporter les réponses dans une section « Verbatim entretien » de ce brief, passer `status: brief`, relancer `brief-critic`.

## Metadata
- Slug: ce-que-nous-refusons-studio-boxe
- Slug rationale: slug du plan ; descriptif (le refus, le lieu), 5 mots, sans date, laisse libre `studio-boxe-geneve` pour une page hub.
- Page type: article
- Module: B adapté — « avis de marque ». Aucun module A–E n'existe pour un manifeste. On garde de B l'ancrage local et l'E-E-A-T (lieu, auteur licencié, prix publics) ; la structure est propre à ce brief (voir « Structure » : refus → mécanisme → ce que nous faisons à la place).
- Target word count: 1100–1400 mots
- Primary keyword: studio de boxe Genève
- Date: 2026-10-17
- Persona: transversal, surtout Sous-persona A (débutant total) et B (femme débutante) qui comparent des lieux avant de réserver ; secondairement C (sportif en reconversion qui fuit le « cardio-kickboxing-disco »). Questions : « Est-ce que je vais prendre des coups ? » ; « Est-ce que le coach va vraiment s'occuper de moi ? » ; « Est-ce qu'on va me vendre un résultat ? »
- Tonalite: directe, calme, factuelle ; constat → mécanisme → conséquence (`patte-ecrite.md`). Une prise de position sans agressivité ni comparaison avec d'autres clubs.
- Registre: vouvoiement ; « nous » pour le studio.
- Intention: navigation et décision (confiance) — une seule intention : « puis-je faire confiance à ce studio avant de réserver ».
- Contexte charge depuis: seo-context.md ✓ (`docs/seo/context.md`, `docs/brand/identity.md`, `message.md`, `voice.md`, `patte-ecrite.md`, `anti-patterns.md`, `themes.md`, `proofs.md`, `docs/business/profile.md`, `docs/tarifs-reference.md`, `PRODUCT.md`, plan éditorial §1–§6, `docs/_research/2026-10-17-concurrence-serp.md`). Pas de `serp-*.json` ni `keywords-*.json` pour ce sujet ; GSC ancien (25 mars–23 juin 2026) consulté.

## Snippet recommande
Exception projet : le `title` est rendu comme H1 (pas de champ `seoTitle`), donc **un seul libellé sert de title et de H1** ; la règle « H1 ≠ title » ne s'applique pas ici (plan §6.3).

- Title / H1: Studio de boxe à Genève : ce que nous refusons de faire (55 car.)
- Meta description: Ce que le studio s'interdit, et pourquoi : groupes limités, aucun sparring imposé, aucun résultat promis. La Voie-Creuse 16, Genève. (132 car.)

## Snippet variantes
| Angle | Title / H1 | Meta |
|---|---|---|
| Expertise (E-E-A-T) | Ce que nous refusons de faire au studio de boxe (47 car.) | Cinq refus, cinq mécanismes : comment se passe une séance au studio Bis Repetita, près de la place des Nations. Réservez une première séance. (141 car.) |
| Solution (douleur) | Boxe à Genève : cinq choses que nous ne ferons pas (50 car.) | Pas de sparring imposé, pas de programme recyclé, pas de kilos promis : ce que vous ne trouverez pas au studio, et ce qu'on fait à la place. (≈140 car., à recompter après D3) |
| Local (GEO) | Boxe près de la place des Nations : nos règles de studio (56 car.) | Huit personnes au plus en collectif, contact toujours choisi, aucun résultat promis : nos règles, à La Voie-Creuse 16. Réservez une première séance. (148 car.) |

**Recommandation** : la variante « Studio de boxe à Genève » — elle porte la requête en tête et la matrice Nom vs Ville (`snippet-strategy.md`) favorise la ville pour une marque encore peu connue hors requêtes de marque. Le nombre de refus (« cinq ») n'apparaît pas dans le title tant que D3 n'est pas tranchée.

## Keyword Cluster
Volumes : **non vérifié** (pas de DataForSEO). Seules données réelles : GSC 25 mars–23 juin 2026, ancien.

| Role | Keyword (query brut) | Volume | Placement | Formulation naturelle (prose) |
|---|---|---|---|---|
| **Principal** | studio de boxe Genève | Non vérifié (GSC : « boxe studio » pos. 98,5, 2 impr.) | Title/H1, intro, meta | un studio de boxe à Genève / notre studio de boxe, à Genève |
| Secondaire | bis repetita genève | GSC « bis repetita » : 377 impr., pos. 5,6 (quick win) | Intro, conclusion, alt cover | le studio Bis Repetita, à Genève |
| Secondaire | cours de boxe petit groupe Genève | Non vérifié | H3 groupes | un cours de boxe en petit groupe à Genève |
| Secondaire | coaching boxe personnalisé Genève | Non vérifié | H3 programme | un coaching de boxe adapté à votre profil |
| Secondaire | boxe sans sparring | Non vérifié | H3 contact | boxer sans faire de sparring |
| Secondaire | cours de boxe sans contact Genève | Non vérifié | H3 contact, FAQ | un cours de boxe sans échange de coups, à Genève |
| Secondaire | séance de boxe première fois | Non vérifié | H3 première séance | votre première séance de boxe |
| Long-tail | boxe sans prendre de coups | Non vérifié | FAQ | apprendre la boxe sans prendre de coups |
| Long-tail | cours de boxe combien de personnes | Non vérifié | H3 groupes, FAQ | combien de personnes dans un cours de boxe |
| Long-tail | la boxe fait-elle maigrir rapidement | Non vérifié | H3 progression (lien) | la boxe fait-elle maigrir vite |

**Rappel au writer** : dans le corps, toujours la colonne « Formulation naturelle ». **Cannibalisation** : ne pas viser « studio boxe privé vs salle classique » ni « fini les cours à 20 », déjà portés par `studio-boxe-prive-vs-salle-classique-geneve` ; lier vers cet article. Ne pas refaire « la boxe est-elle dangereuse » ni « la boxe fait-elle maigrir » : un paragraphe, puis le lien.

## Structure

Règle au writer : **aucun intitulé (H2, H3, encart) ne décrit un acteur extérieur** ; les H3 sont à l'affirmatif sur ce que fait le studio, le refus est dit dans la première phrase. Logique propre à l'avis de marque : chaque refus = une H3 en trois temps, toujours dans cet ordre : **le refus** (une phrase) → **le mécanisme** (ce qui se passe réellement en séance, tiré des docs marque ou de l'entretien) → **ce que vous y gagnez** (conséquence concrète, sans promesse). Pas de slogan seul, pas de comparaison avec un club, pas de « les autres font… ».

**Intro (≈120 mots, sans H2)** : constat net — on choisit un lieu de boxe sur des promesses ; nous préférons dire ce que nous ne ferons pas, et montrer comment. Phrase de marque validée : « Nous mettons la boxe au service de vos objectifs » (`br2-06` realPhrase). Mention du lieu (La Voie-Creuse 16, près de la place des Nations) et de l'auteur (Nicolas, licence SwissBoxing #102860, 20 ans de pratique, 5 ans à la tête du studio).

**Encart « L'essentiel en bref »** : la liste des refus retenus (D3), une ligne chacun, avec le mécanisme en face.

### H2: Dans la séance : trois choses que nous ne faisons pas
Keywords: studio de boxe Genève, cours de boxe petit groupe Genève, coaching boxe personnalisé Genève
Bloc AEO: Self-contained (chaque H3 se lit seul)
Contenu: chapeau de 2 phrases, puis trois H3.

#### H3: Un cours de huit personnes au plus
Mécanisme : plafonds publics — Round by Round 8 personnes au plus, 1 coach, 50 min ; Small Group 4 à 8 (`br2-02`). Raison du chiffre : réponse Q1–Q2 de l'entretien (obligatoire, pas de raison inventée). Lien vers `studio-boxe-prive-vs-salle-classique-geneve` pour le comparatif détaillé. **Interdit** : citer « 20 », un club, ou « salle classique ».

#### H3: Une séance construite pour vous
Phrase validée par Nicolas : « Pas de programme générique recyclé. » (`br2-06` phrase4 `as-is`). Mécanisme documenté (`br2-05`) : échange sur objectifs, passé sportif, activité actuelle, blessures ou limitations ; observation à l'échauffement ; contenu construit entre technique, renforcement musculaire, cardio ou travail plus intense ; ajustement « selon les objectifs, les capacités et l'état du client le jour de la séance ». Exemple type = réponse Q4 (pas un cas client). Phrase validée possible : « Le rythme s'adapte au souffle et à la coordination du jour. » Suivi d'une séance à l'autre : réponse Q5/D4.

#### H3: Un contact toujours choisi
Mécanisme (`br2-08`, validé par Nicolas, publiable « avec prudence ») : Round by Round, préparation physique, technique sans opposition, shadow boxing, pattes d'ours et sac « sans échange de coups entre participants » ; contact léger seulement « avec l'accord des participants », sous supervision directe, et le participant « peut refuser ou interrompre l'exercice à tout moment » ; sparring réservé aux pratiquants prêts, « après validation du coach », avec « consentement explicite » et encadrement direct. Ne pas promouvoir la préparation compétiteur (en pause). Lien vers `la-boxe-est-elle-dangereuse-blessures-loisir`.

### H2: Dans ce que nous vous promettons : deux choses que nous ne dirons pas
Keywords: séance de boxe première fois, la boxe fait-elle maigrir rapidement
Bloc AEO: Self-contained
Contenu: chapeau de 2 phrases, puis deux H3.

#### H3: Une progression suivie, sans chiffre promis
Mécanisme (`br2-08` benefits) : la boxe « peut contribuer » à la condition physique, l'endurance, la coordination, la force, la mobilité ; bénéfices « potentiels et variables selon les personnes » ; « aucun résultat garanti ». Ce que le studio suit à la place = réponse Q8. Lien vers `boxe-perte-de-poids-femme-geneve` (« aucun délai n'est garanti »). Phrase validée possible : « La confiance suit, pas l'inverse. »

#### H3: Une première séance au prix affiché — **selon D1**
Si D1 = garder : mécanisme = la première séance est une vraie séance (échange initial + observation à l'échauffement), au prix public de `docs/tarifs-reference.md` (Solo CHF 120.-, Duo CHF 140.-, Trio CHF 160.-, Round by Round CHF 40.-) ; raison = réponse Q9. Formulation sans « appât » et sans viser personne. Si D1 = retirer : supprimer la H3, le H2 devient « une chose que nous ne dirons pas » et la variante de title reste sans nombre.

### H2: Pour qui ce cadre n'est pas fait
Keywords: studio de boxe Genève
Bloc AEO: Pros-cons
Contenu: limité aux conséquences des refus propres au studio : qui veut du sparring régulier (contact toujours choisi, préparation compétiteur en pause), qui veut un objectif de kilos chiffré et daté, qui veut un cours à grand effectif. Aucun autre format ni acteur décrit ; pour la comparaison des formats, renvoi vers `studio-boxe-prive-vs-salle-classique-geneve` (ancre « notre comparatif des formats de boxe »). Contenu final = réponse Q10/Q11.
Bloc avis obligatoire (adaptation de la règle « Notre avis » à un manifeste), en fin de section :
> **Notre avis :** 2–4 phrases. Choix par défaut : pour un premier pas, Round by Round (collectif, sans échange de coups, CHF 40.-) ou une séance Solo si vous voulez un regard entièrement sur vous ; puis pour qui ce studio n'est pas le bon choix (repris de Q11).

### H2: FAQ — Le studio en pratique
Keywords: (long-tail)
Bloc AEO: Definition (réponses de 2–3 phrases)
Contenu: 4 questions : « Combien de personnes dans un cours de boxe au studio ? » (8 au plus en collectif, 4 à 8 en Small Group) ; « Peut-on apprendre la boxe sans prendre de coups ? » (oui, formats sans échange de coups, `br2-08`) ; « Faut-il un niveau pour commencer ? » (aucun, `message.md` objections) ; « Comment se passe la première séance ? » (échange initial, échauffement observé, contenu adapté ; prix selon D1).

### H2: Pour finir
Contenu: 3–4 phrases : la liste des refus est un engagement que l'on peut vérifier en séance ; CTA unique « Réserver une première séance » → `/#planning`. Puis « Sources » (docs internes non cités publiquement ; aucune source externe nécessaire).

## Maillage interne (liens sortants)
| Ancre | Cible | Section | Obligatoire |
|---|---|---|---|
| cours de boxe à Genève, formats et premiers pas | /cours-de-boxe-geneve | Intro | oui (pillar) |
| le studio, La Voie-Creuse 16 | /studio | Intro | oui |
| notre comparatif des formats de boxe | /blog/studio-boxe-prive-vs-salle-classique-geneve | H3 groupes + « Pour qui ce cadre n'est pas fait » | oui |
| le cours collectif Round by Round | /services/round-by-round | H3 groupes / Notre avis | oui |
| le Small Group, de 4 à 8 personnes | /services/small-group-training | H3 groupes | non (après correction de sa meta « 6 max », D2) |
| ce que disent les chiffres sur les blessures | /blog/la-boxe-est-elle-dangereuse-blessures-loisir | H3 contact | oui |
| la boxe fait-elle maigrir : les délais réalistes | /blog/boxe-perte-de-poids-femme-geneve | H3 progression | oui |
| préparer votre premier cours | /blog/premier-cours-de-boxe-preparation | H3 première séance | non |
| les tarifs publics | /tarifs | H3 première séance | non |
| le parcours de Nicolas | /equipe/nicolas-de-boccard | Intro (auteur) | non |

## Image Briefs
Direction visuelle : `DESIGN.md` fait foi (photo N&B, angles droits, `grayscale(1) contrast(1.06)`). Le `docs/design/moodboard.md` (or, terracotta) est antérieur à la refonte : ne pas suivre sa palette. Priorité aux **photos réelles** de `src/assets/` ; pas de visage de Lionel, Jeremy, Eliza ni de client sans autorisation (`proofs.md`). Pas de texte dans l'image.

### Cover
- placement: cover · type: photo réelle · ratio 16:9 · texte: none
- subject: le studio vide, ring et sacs, lumière du jour
- description: plan large du studio de La Voie-Creuse, sans personne, cordes du ring et sacs au repos ; sobre, presque silencieux, pour dire « un lieu qui choisit ce qu'il ne fait pas ». Source candidate : `src/assets/studio-interior.webp` ou `salle-1.webp`, passée en N&B.
- alt_text: Intérieur du studio de boxe Bis Repetita à Genève, ring et sacs de frappe au repos

### Image 2 — after-h3: Une séance construite pour vous
- type: photo · ratio 4:3 · texte: none
- subject: mains qui enroulent des bandes, avant l'échauffement
- description: gros plan, gestes calmes, carnet ou feuille de séance visible seulement si Q5 confirme qu'il existe (sinon pas de carnet). Accord de la personne si son visage est visible (D7).
- alt_text: Pratiquante qui enroule ses bandes de boxe avant l'échauffement observé par le coach

### Image 3 — after-h3: Un contact toujours choisi
- type: photo · ratio 4:3 · texte: none
- subject: travail aux pattes d'ours, sans opposition
- description: Nicolas tient les pattes d'ours, la personne frappe ; aucun échange de coups dans l'image. Photo réelle si disponible ; la personne qui frappe n'est identifiable qu'avec son accord (D7).
- alt_text: Travail aux pattes d'ours avec Nicolas de Boccard, sans échange de coups entre participants

### Image 4 — after-h3: Un cours de huit personnes au plus
- type: photo · ratio 4:3 · texte: none
- subject: petit groupe en shadow boxing, vu de dos
- description: 4 à 6 personnes en ligne, de dos ou floues, coach face au groupe ; dit « petit groupe » sans chiffrer.
- alt_text: Petit groupe en shadow boxing au studio de boxe à Genève, coach face aux participants

## Objectif business
Construire la confiance de marque (E-E-A-T) sur la requête « studio de boxe Genève » et sur les requêtes de marque (« bis repetita » : quick win GSC, pos. 5,6), puis faire réserver une première séance. Pas d'objectif de volume (plan §4).

## Angle unique / POV
Mode A (plan) : la marque prend position par la négative, avec des faits. Chaque refus est relié à un mécanisme observable en séance (échange initial, observation à l'échauffement, plafond de groupe, règles de contact, refus de chiffrer un résultat). Le texte décrit ce que fait le studio ; il ne décrit jamais ce que font les autres.

## Gap concurrent identifie
Analyse qualitative (WebSearch, pas Google.ch, pas de bloc PAA observé) :
- Requête « studio de boxe Genève » : fiches de plateformes (ClassPass pour Le Carré, URBANRIDE, Bis Repetita) et pages de la Ville de Genève (3 salles de boxe, free boxe 15–25 ans). Aucun contenu éditorial.
- « comment choisir un club de boxe Genève » : contenus génériques français (HelloAsso, Futura) ; aucun critère local.
- Le seul billet local proche (un club de Lancy, « pourquoi choisir un club premium change tout ») : intertitres adjectivaux, tableau « club traditionnel vs nous » sans source ni critère, groupes « 8 à 10 » puis « limitées à 10 » (incohérent), pas d'auteur.
- **Trou** : personne ne publie d'engagements vérifiables reliés à un procédé, signés par un coach identifié, sans comparaison dénigrante. C'est l'angle.
Date de l'analyse : 2026-10-17

## CTA cible
- Lead chaud: /#planning — « Réserver une première séance » — fin de « Pour finir », et une fois dans « Notre avis ».
- Lead tiède: /services/round-by-round — « Réserver une séance Round by Round » (réservation directe, `br2-04`).
- Nurturing: /cours-de-boxe-geneve (pillar) ; `round-by-round-deroule-seance` (plan n° 10, publié le 19 nov.) si en ligne au 24 nov.

## Sources
Aucune source externe n'est nécessaire : c'est un avis de marque. Faits internes (non liés publiquement) :
- RC4 `br2-02` (plafonds, 1 coach, 50 min), `br2-05` (protocole de séance), `br2-06` (phrases validées), `br2-08` (contact, sparring, bénéfices ; validateur Nicolas de Boccard), `br2-09` (signature) — `docs/brand/interview/responses.md`.
- Prix : `docs/tarifs-reference.md` (mise à jour 2026-03-23 ; relire `/tarifs` avant publication).
- Lieu, licence : `docs/seo/context.md`.

## Donnees brutes
- Round by Round : 8 personnes au plus, 1 coach, 50 min, sans échange de coups, CHF 40.- la séance.
- Small Group : 4 à 8 personnes ; CHF 200.- la séance, pack 10 CHF 1'800.- (prix par séance ou par personne : question ouverte du plan §7, ne pas l'écrire tant qu'elle n'est pas tranchée).
- Solo CHF 120.- (pack 10 : CHF 1'100.-), Duo CHF 140.-, Trio CHF 160.-.
- GSC 25 mars–23 juin 2026 : « bis repetita » 377 impr., 11 clics, pos. 5,6 ; « nicolas de boccard » 38 impr., pos. 3,1.

## Preuves et limites
- Autorisé : « Nicolas pratique la boxe anglaise depuis 20 ans », « à la tête du studio depuis 5 ans », licence SwissBoxing #102860.
- Interdit : « 20 ans de coaching », `100+`, `98 %`, `99 %`, `10K+`, « Technique avant intensité », « ring professionnel », « meilleur studio », toute garantie de résultat, toute urgence.
- Interdit : comparer à un club nommé ou à « la salle classique » ; le mot « appât » sans accord (D1).
- Interdit : citation ou anecdote de Nicolas qui ne vient pas de l'entretien ou du corpus ; exemple présenté comme cas client réel.
- Note : une fiche ClassPass présente Nicolas comme « coach diplômé SwissBoxing ». Les docs ne parlent que d'une **licence** : ne pas écrire « diplômé ».

## Citations exploitables (GEO — Quotation Addition)
- « Nous mettons la boxe au service de vos objectifs » — Nicolas de Boccard, RC4 `br2-06` (realPhrase). Utilisable avant signature.
- « Pas de programme générique recyclé. » ; « Le rythme s'adapte au souffle et à la coordination du jour. » ; « La confiance suit, pas l'inverse. » — validées `as-is` par Nicolas (`br2-06`).
- Citations issues de l'entretien : **à sourcer** (Q12), aucune avant validation.

## Spec machine
Pas de `ce-que-nous-refusons-studio-boxe.spec.draft.json` tant que le statut est `blocked` : la liste des refus, la structure et le snippet dépendent de D1–D3. À produire après l'entretien et le passage de `brief-critic`.
