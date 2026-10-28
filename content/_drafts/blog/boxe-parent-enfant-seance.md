---
slug: boxe-parent-enfant-seance
status: blocked
blocked_by: D8 assurance RC couvrant les mineurs « à vérifier » (D1 à D7, D9, D13 répondus le 2026-10-19) ; D11 relecteur santé
planned_pubDate: 2026-11-10
unblock_deadline: 2026-11-03
module: C
modules_secondaires: [B]
page_type: article
created_on: 2026-10-17
health_review_required: true
---

# Brief SEO : Boxe parent-enfant — âge, déroulé d'une séance, règles de sécurité

> **Statut : bloqué.** L'offre n'existe pas. Le site dit même le contraire aujourd'hui : `a-quel-age-commencer-la-boxe` affirme « Bis Repetita est un studio orienté adultes et coaching privé. Nous n'assurons pas de cours enfants. » (src/content/blog/a-quel-age-commencer-la-boxe.mdx, section « À partir de quel âge un enfant peut-il commencer la boxe ? »). `PRODUCT.md` : « Parent-enfant et abonnement : non décidés, absents du site. » Règle du plan (§3) : jamais de publication d'une offre non décidée. Si les décisions ne sont pas prises le **3 novembre**, l'article glisse et un remplaçant de la réserve prend la place du 10 novembre.

## Décisions requises (Nicolas)

| # | Décision | Options connues (aucune n'est retenue) | Bloquant pour |
|---|---|---|---|
| **D1** | Le studio accueille-t-il des mineurs ? | Oui / non. Cadre déjà validé par Nicolas (RC4 `br2-08`) : « Toute éventuelle séance destinée à un mineur est organisée dans un cadre adapté à son âge et à son niveau, avec l'autorisation préalable de son représentant légal […] encadrés par un coach qualifié. Aucun sparring n'est organisé pour un mineur sans cadre spécifique, protections adaptées et autorisations nécessaires. » Ce texte décrit une éventualité, pas une offre (`docs/brand/interview/analysis.md` l. 91). | Tout l'article. Si **non** : article abandonné (pas de version « guide seul » : l'angle est l'offre). |
| **D2** | Âge minimum et tranches d'âge | Propositions de la recherche (`docs/_research/…-sources-sante-parent-enfant-femmes.md` §A8, non issues d'une source) : Éveil 5–7 ans (45 min), Technique 8–11 ans (60 min), Challenge ados 12–15 ans + parent (60–75 min). Une, deux ou trois tranches ; autres bornes possibles. | H2 1, H2 2, title, meta, FAQ, keywords « à partir de quel âge » |
| **D3** | Format | Coaching privé (un parent + un enfant avec un coach, logique Duo) / petit groupe de binômes (combien de binômes au maximum ?) / les deux. | H2 2, H2 5, maillage vers `/services/coaching-duo-trio` |
| **D4** | Prix | Aucun prix parent-enfant dans `docs/tarifs-reference.md`. Le tarif Duo (CHF 140 la séance) **ne s'applique pas d'office** : à confirmer ou à remplacer. | H2 5, FAQ « combien ça coûte », meta |
| **D5** | Ponctuel ou cycle | Séance à l'unité / cycle de N séances (la recherche cite l'exemple d'un cycle de 6–8 séances, non tranché). | H2 2, H2 5 |
| **D6** | Créneaux | Mercredi après-midi, samedi, vacances scolaires (vacances de Noël GE 24 déc.–8 janv.) : rien n'est décidé. | H2 5, FAQ |
| **D7** | Qui encadre | Nicolas seul ? Un autre coach (prénom + rôle seulement) ? Formation J+S suivie ou non (facultative ; ne rien affirmer sans réponse). | H2 3 (encadrement), E-E-A-T, bio auteur |
| **D8** | Assurance RC couvrant les mineurs, autorisation du représentant légal (document signé ? sur place ?), décharge | Oui / non / en cours. Ne rien promettre tant que non confirmé. | H2 3, FAQ « assurance », CGV éventuelles |
| D9 | Le bon « Offrir un cours » peut-il servir pour une séance parent-enfant ? | Oui / non (dépend aussi des décisions de l'article `offrir-cours-boxe-noel-geneve`). | Lien vers `/offrir-un-cours`, FAQ (non bloquant : le lien saute si non) |
| D10 | Signature | « Nicolas de Boccard » après validation du texte, sinon « Équipe Bis Repetita » (`docs/brand/voice.md`). | Byline |
| D11 | Relecteur santé | Nom et qualité d'un professionnel (pédiatre, physiothérapeute du sport) qui relit avant publication (plan §6.6). | Publication |
| D12 | Cover (Jon) | Shooting au studio avec autorisation écrite du représentant légal, sans visage d'enfant identifiable / illustration non photographique. | Image Briefs (cover) |
| **D13** | Présence du parent | Le parent (ou représentant légal) est-il obligatoirement présent et actif à chaque séance ? Que se passe-t-il s'il ne peut pas participer (blessure, empêchement) : séance annulée, reportée, remplacée par un autre adulte autorisé, ou enfant seul avec le coach (ce qui en ferait un cours enfant, hors de l'angle) ? | Intro, H2 2, H2 3, FAQ, CGV éventuelles |

**Conséquence à prévoir dès que D1 = oui** : corriger la phrase « Nous n'assurons pas de cours enfants » dans `a-quel-age-commencer-la-boxe` et y ajouter le lien retour (voir Maillage). Hors périmètre de ce brief : à faire à la publication.

### Dépendances section par section

| Section du plan | Rédigeable sans décision | Dépend de |
|---|---|---|
| Disclaimer + L'essentiel en bref | Disclaimer oui ; TLDR non | TLDR : D1, D2, D3 |
| Intro — réponse directe | Partiellement (cadre suisse, absence d'offre locale) | D1, D2 |
| H2 1 — à partir de quel âge | Oui pour le cadre J+S ; non pour « chez nous dès X ans » | D2 |
| H2 2 — déroulé d'une séance | Squelette oui ; durées et tranches non | D2, D3, D5, D7, D13 |
| H2 3 — règles de sécurité | Oui pour les règles sourcées et « jamais la tête » ; non pour encadrement, assurance, autorisation | D7, D8 |
| H2 4 — ce que la séance apporte (et n'apporte pas) | Oui (sources vérifiées) | — |
| H2 5 — réserver / format, prix, créneaux | Non | D3, D4, D5, D6, D9 |
| FAQ | 3 questions sur 6 | D2, D4, D8 |
| Notre avis | Non (dépend du format retenu) | D2, D3 |

## Metadata
- Slug: boxe-parent-enfant-seance
- Slug rationale: slug du plan (§3), 4 segments, sans date ; « seance » laisse libres `boxe-enfant-geneve` (page offre éventuelle) et `boxe-ado-geneve`.
- Page type: article
- Module: C (YMYL : mineurs, sécurité) + B (local, offre)
- Target word count: 1400–1800
- Primary keyword: boxe parent enfant
- Date: 2026-10-17
- Persona: parent genevois de 30 à 50 ans, souvent déjà client ou sportif (sous-personas A et C, `docs/seo/context.md`), qui cherche une activité à faire **avec** son enfant. Questions : 1) dès quel âge, et est-ce dangereux ? 2) qu'est-ce qu'on fait concrètement pendant la séance ? 3) est-ce que ça le rendra violent ?
- Tonalite: net, rassurant, explicite sur les limites (matrice « Débutant intimidé » de `voice.md`, appliquée au parent) ; aucune peur instrumentalisée.
- Registre: vouvoiement (au parent)
- Contexte charge depuis: seo-context.md ✓ (+ `docs/brand/*`, `PRODUCT.md`, `docs/tarifs-reference.md`, `docs/_research/2026-10-17-*`, plan §1, §2, §4 n° 7, §6)
- Research bundle: aucun `keywords-*` ni `serp-*` pour ce sujet dans `.seo-data/` ; GSC (`gsc-bisrepetita-ch-last_3_months.json`, 25 mars–23 juin 2026, ancien) : aucune requête contenant « enfant », « parent » ou « kid ». Analyse SERP qualitative faite à la main le 2026-10-17 (ci-dessous).

## Snippet recommande

**Exception projet** : le `title` du frontmatter est rendu comme H1 (pas de champ `seoTitle`). Un seul texte sert de title et de H1 ; la règle « H1 ≠ title » ne s'applique pas ici (plan §6.3).

- Title = H1 : Boxe parent-enfant : âge, déroulé et règles de sécurité (55 car.)
- Meta description (**provisoire, à réécrire à la levée du blocage** : « au studio » suppose D1 = oui et D3 décidé ; à compléter après D2–D4) : Dès quel âge, sans coup à la tête, le parent aux pattes d'ours : le déroulé d'une séance de boxe parent-enfant au studio, à Genève. (131 car.)

## Snippet variantes

| Angle | Title = H1 | Meta |
|---|---|---|
| Expertise (E-E-A-T) | Boxe parent-enfant : le cadre d'un coach licencié (49 car.) | Aucune frappe à la tête, parent et enfant en binôme, règles suisses sourcées : comment Bis Repetita encadre une séance parent-enfant. (133 car.) |
| Local (GEO) | Boxe parent-enfant à Genève : une séance à deux (47 car.) | Une séance de boxe à faire avec votre enfant, près de la place des Nations : âge, déroulé, sécurité. [Format et prix après D2–D4] (≤ 155 car. une fois complétée) |

**Recommandation** : variante principale (intention informationnelle d'abord : âge et sécurité). La variante GEO devient la meilleure si l'offre est publiée avec prix et créneaux.

## Keyword Cluster

Volumes : **non vérifiés** partout (pas de DataForSEO, aucune donnée GSC sur le sujet).

| Role | Keyword (query brut) | Volume | Placement | Formulation naturelle (prose) |
|---|---|---|---|---|
| **Principal** | boxe parent enfant | Non vérifié | Title/H1, intro, meta | la boxe parent-enfant / une séance de boxe parent-enfant |
| Secondaire | boxe enfant Genève | Non vérifié | Intro, H2 5 | la boxe pour enfants à Genève |
| Secondaire | à partir de quel âge boxe enfant | Non vérifié | H2 1 | à partir de quel âge un enfant peut faire de la boxe |
| Secondaire | activité parent enfant Genève | Non vérifié | Intro, H2 5 | une activité à faire avec son enfant à Genève |
| Secondaire | boxe éducative | Non vérifié | H2 1, H2 2 | la boxe éducative |
| Secondaire | boxe enfant dangereux | Non vérifié | H2 3 | la boxe est-elle dangereuse pour un enfant |
| Secondaire | boxe sans contact enfant | Non vérifié | H2 2, H2 3 | une boxe sans contact pour l'enfant |
| Long-tail | la boxe rend-elle violent | Non vérifié | H2 4, FAQ | la boxe rend-elle un enfant violent |
| Long-tail | boxe ado parent | Non vérifié | H2 2 (tranche ados si D2) | boxer avec son adolescent |
| Long-tail | matériel boxe enfant | Non vérifié | FAQ | le matériel de boxe pour un enfant |
| Long-tail | combien de temps dure un cours de boxe enfant | Non vérifié | H2 2, FAQ | la durée d'une séance de boxe pour enfant |

**Rappel au writer** : dans le corps de l'article, utilise toujours la colonne « Formulation naturelle », jamais la forme brute du query. Voir `writing-rules.md` (règle 10) / `keyword-naturalization.md`.

**Entités à poser** : Jeunesse+Sport (J+S), Office fédéral du sport (OFSPO), BPA, boxe light-contact, kick-boxing light, pattes d'ours, hepa.ch, OMS, Ville de Genève (écoles de sport).

## Structure

Contrat d'article : disclaimer → L'essentiel en bref → H2 → FAQ → Pour finir → CTA unique → Sources.

**Disclaimer (italique, en tête, module C)** : « *Cet article ne remplace pas un avis médical. Si votre enfant a un problème de santé, demandez l'avis de son pédiatre avant de commencer une activité physique.* »

**L'essentiel en bref (Tldr, 4 puces)** — dépend de D1, D2, D3. Contenu attendu : la règle suisse (aucune frappe à la tête avant 8 ans en boxe light-contact) ; au studio, jamais de coup à la tête ni de contact entre enfants ; le parent tient les pattes d'ours puis l'inverse ; format/âge retenus [D2, D3].

### Intro (réponse directe, sans H2)
Keywords: boxe parent enfant, boxe enfant Genève
Bloc AEO: Definition
Contenu: Réponse directe en 3 phrases : ce qu'est la séance (parent et enfant en binôme, le parent tient les pattes d'ours, puis on inverse ; aucun coup à la tête, aucun contact entre enfants ; un coach qui fixe et répète la règle). Puis le contexte local : la Ville de Genève propose du « baby boxing » dans ses écoles de sport (4–17 ans) et des clubs ont des cours enfants par âge, mais aucune offre de boxe **parent-enfant** n'a été trouvée à Genève ni à Lausanne (recherche web du 17 oct. 2026, non exhaustive : l'écrire ainsi, sans nommer de club). Âge et format chez nous : [D1, D2, D3].

### H2: À partir de quel âge un enfant peut-il boxer ?
Keywords: à partir de quel âge boxe enfant, boxe éducative
Bloc AEO: Evidence-sandwich
Contenu: Le cadre écrit en Suisse (fiche J+S boxe light-contact, 2022) : aucune frappe à la tête avant 8 ans, coups au torse et aux épaules « en douceur », casque jusqu'à 15 ans environ pour les formes qui touchent la tête. La fiche kick-boxing light (2026) va plus loin : pas de coups à la tête jusqu'à 10 ans au moins. Statut : **[CONSENSUS — règle officielle]**, mais ces fiches s'adressent aux moniteurs J+S : ne pas présenter le studio comme « conforme J+S » (D7). Conclusion du studio : pas de tête du tout, quel que soit l'âge. Puis l'âge d'entrée chez nous et pourquoi [D2]. Ne pas reprendre le contenu adulte de `a-quel-age-commencer-la-boxe` ; y renvoyer.

### H2: Le déroulé d'une séance parent-enfant
Keywords: boxe sans contact enfant, combien de temps dure un cours de boxe enfant, boxe ado parent
Bloc AEO: Step-by-step
Contenu: Déroulé minute par minute **du format retenu** [D2, D3, D5]. Squelette rédigeable dès maintenant, durées à remplir : échauffement en jeu et programme sensorimoteur + gainage (exigé par la fiche J+S à chaque entraînement) ; garde et déplacements ; coups droits sur pattes d'ours tenues par le parent ; inversion des rôles (l'enfant tient, le parent frappe doucement) ; rounds courts au sac ; retour au calme. Si D2 retient plusieurs tranches : un H3 par tranche (3 H3 maximum : 5–7, 8–11, 12–15 ou les bornes décidées), sinon pas de H3. Le parent n'a pas besoin de savoir boxer : le dire.

### H2: Les règles de sécurité au studio
Keywords: boxe enfant dangereux
Bloc AEO: Self-contained
Contenu: Liste des règles. Sourcées (fiches J+S) : jamais la tête ; surveillance active ; sol adapté ; bijoux, montres, lunettes retirés ; intensité réduite aux premiers signes de fatigue ; binômes de capacités compatibles. Studio (RC4 `br2-08`, validé par Nicolas) : autorisation préalable du représentant légal, contenu adapté à l'âge et au niveau, aucun sparring. Encadrement, assurance et document d'autorisation : [D7, D8] — ne rien écrire sur ces points sans réponse. Mention honnête (AAP/CPS 2011) : les pédiatres nord-américains déconseillent fortement la boxe aux enfants et adolescents à cause du risque de commotion, et rien ne montre que le casque réduise les commotions ; leur réserve vise les coups à la tête, que notre séance exclut. Aucune étude ne « certifie » la boxe sans contact chez l'enfant : l'écrire ainsi. Statut : **[CONSENSUS]** sur le risque des coups à la tête.

### H2: Ce qu'une séance à deux apporte, et ce qu'elle n'apporte pas
Keywords: la boxe rend-elle violent, activité parent enfant Genève
Bloc AEO: Pros-cons
Contenu: Trois points sourcés, chacun avec son statut. 1) Bouger : OMS 2020 et hepa.ch, au moins 60 minutes par jour en moyenne pour les 5–17 ans ; en Suisse, 17,9 % des 11–15 ans disent atteindre 60 minutes chaque jour (HBSC 2022) **[CONSENSUS]**. 2) Faire ensemble : essai DADEE (pères et filles de 4 à 12 ans, 8 semaines) : l'activité augmente chez les filles et chez les pères, effet maintenu à 9 mois **[DONNÉE EXPÉRIMENTALE, un essai, pas de la boxe]**. Ne pas promettre d'effet sur la relation parent-enfant. 3) Violence : deux méta-analyses sur les arts martiaux se contredisent (Harwood 2017 : baisse des comportements externalisés ; Gubbels 2016 : aucune relation globale) **[DÉBATTU]** ; formulation défendable : « rien n'indique qu'un cadre éducatif rende un enfant plus agressif ». Ces études portent sur les arts martiaux, pas la boxe : le dire.

### H2: Format, prix et réservation
Keywords: boxe enfant Genève, activité parent enfant Genève
Bloc AEO: Self-contained
Contenu: **Entièrement dépendant de D3, D4, D5, D6, D9.** Format, nombre de binômes, prix (aucun chiffre tant que `docs/tarifs-reference.md` n'en contient pas), ponctuel ou cycle, créneaux, adresse (La Voie-Creuse 16, près de la place des Nations), matériel fourni (gants et bandes fournis pour les adultes selon `/offrir-un-cours` ; tailles enfant à confirmer, D3). Puis le bloc **Notre avis**.

**Emplacement « Notre avis »** (fin de ce H2, blockquote `> **Notre avis :** …`, 2–4 phrases) — contenu attendu une fois D2/D3 tranchés : quel format conseiller par défaut (par exemple la tranche et le format retenus pour une première fois), pourquoi (règle « jamais la tête », binôme parent-enfant), et pour qui ce n'est pas le bon choix (l'enfant qui veut apprendre l'opposition et la compétition : un club affilié à SwissBoxing avec cours enfants par âge ; l'enfant qui n'a pas envie de venir ; un problème de santé non vu par le pédiatre). Ne pas l'écrire avant les décisions.

### FAQ (H2 « Questions fréquentes », 6 H3 max)
Total : 5 H2 de fond + FAQ + Pour finir ; aucun H4.
1. Faut-il savoir boxer pour accompagner son enfant ? (rédigeable : non)
2. Quel matériel prévoir ? (gants fournis [à confirmer en taille enfant, D3] ; tenue de sport, pas de bijoux ; la fiche kick-boxing J+S cite des gants de 10 oz minimum pour ce sport)
3. La boxe rend-elle un enfant violent ? (rédigeable, renvoie au H2 4)
4. Dès quel âge chez Bis Repetita ? [D2]
5. Combien coûte une séance parent-enfant ? [D4]
6. Mon enfant est-il assuré pendant la séance ? [D8]
FAQ locale module B : « Où a lieu la séance ? » peut remplacer la 6 si D8 reste sans réponse publiable.

### Pour finir + CTA unique
3–4 phrases, pas de résumé en liste. CTA unique selon D3 : réservation (`/#planning`, « Réserver une première séance ») si la séance est réservable au planning ; sinon contact (`/contact`). Décider à D3.

## Maillage interne (liens sortants)

Toutes les URLs existent (vérifié `ls src/content/blog`, `ls -R src/pages`, 2026-10-17).

| Ancre | Cible | Section | Obligatoire |
|---|---|---|---|
| à quel âge commencer la boxe, enfant comme adulte | /blog/a-quel-age-commencer-la-boxe | H2 1 | oui |
| les risques réels de la boxe loisir | /blog/la-boxe-est-elle-dangereuse-blessures-loisir | H2 3 | oui |
| le coaching en duo | /services/coaching-duo-trio | H2 5 | si D3 = format Duo |
| le studio, près de la place des Nations | /studio | H2 5 | oui |
| Nicolas de Boccard | /equipe/nicolas-de-boccard | H2 3 (encadrement) | si D7 = Nicolas |
| offrir la séance | /offrir-un-cours | FAQ ou H2 5 | si D9 = oui |
| l'équipement pour débuter | /blog/equipement-boxe-debutant-geneve | FAQ 2 | non |

**Lien retour à poser à la publication** (hors de ce brief, à faire dans l'article existant) : dans `a-quel-age-commencer-la-boxe`, section « À partir de quel âge un enfant peut-il commencer la boxe ? », remplacer « Nous n'assurons pas de cours enfants » par une phrase conforme à D1/D2 et lier `/blog/boxe-parent-enfant-seance` avec l'ancre « une séance de boxe parent-enfant ». Même section : la FAQ « À partir de quel âge un enfant peut-il pratiquer la boxe ? » doit rester cohérente.

Pas de lien vers `/cours-gratuit` (l'essai gratuit n'existe plus).

## Image Briefs

Aucune photo d'enfant n'existe dans `src/assets/` et aucune permission « mineur » n'est documentée (`docs/brand/interview/questionnaire.md` l. 407 : chaque image d'un mineur dépend d'une fiche de permission). **Pas de visage d'enfant identifiable**, pas d'image générée présentée comme une séance réelle du studio.

### Cover
- placement: cover
- type: photo (N&B, système `DESIGN.md`)
- subject: mains d'un adulte tenant des pattes d'ours, petits gants d'enfant au premier plan, flou
- description: Cadrage serré sur les pattes d'ours et un gant d'enfant au moment de l'impact, sans visage. Lumière de studio, fond ring flou. N&B.
- alt_text: Un parent tient les pattes d'ours pendant qu'un enfant frappe, gants aux mains
- aspect_ratio: 16:9
- source: shooting au studio avec autorisation écrite du représentant légal, ou illustration non photographique. **Décision D12 (Jon) : shooting ou illustration.**

### Image 2
- placement: after-h2:Le déroulé d'une séance parent-enfant
- type: schema
- subject: les étapes de la séance sur une ligne de temps
- description: Frise sobre, encre sur blanc, Inter : échauffement, garde, pattes d'ours, inversion, sac, retour au calme ; durées à remplir après D2/D3.
- alt_text: Déroulé d'une séance de boxe parent-enfant, de l'échauffement au retour au calme
- aspect_ratio: 4:3

### Image 3
- placement: after-h2:Les règles de sécurité au studio
- type: infographic
- subject: les règles clés en pictogrammes
- description: Quatre règles : jamais la tête, pas de contact entre enfants, bijoux retirés, pause à la fatigue. N&B, pictogrammes lucide.
- alt_text: Règles de sécurité d'une séance de boxe parent-enfant au studio Bis Repetita
- aspect_ratio: 4:3

### Image 4
- placement: after-h2:Ce qu'une séance à deux apporte, et ce qu'elle n'apporte pas
- type: photo
- subject: deux paires de gants, une adulte et une enfant, posées sur le bord du ring
- description: Nature morte au studio, sans personne. N&B.
- alt_text: Une paire de gants adulte et une paire de gants enfant posées sur le ring
- aspect_ratio: 4:3

## Objectif business

Lancer une offre parent-enfant **si Nicolas la crée** : capter la requête sans concurrent local (aucune offre trouvée à Genève ni à Lausanne), toucher les parents déjà clients ou sportifs, et produire des réservations ou des demandes de contact. Objectif secondaire : autorité sur « boxe enfant Genève » par le cadre de sécurité sourcé.

## Angle unique / POV

Mode A (plan §4 n° 7) : une séance où le parent tient les pattes d'ours, puis l'inverse : ni coup à la tête, ni contact entre enfants. La règle suisse fixe 8 ans pour la tête (10 ans en kick-boxing 2026) ; le studio choisit plus strict : jamais la tête.

## Gap concurrent identifie

Analyse qualitative (WebSearch/WebFetch, pas de `/seo-serp` chiffré, outil non Google.ch, pas de bloc « Autres questions posées » observé) :
- Requête « boxe parent enfant séance » : résultats français et québécois sur la boxe **pour** enfants (Ville de Paris « boxe baby » 4–5 ans, boxe éducative 5–6 ans ; Groupe Réussite ; un club de Montréal), aucun sur une séance commune parent-enfant.
- Requête « boxe parent enfant Genève » : Ville de Genève (écoles de sport 4–17 ans, « baby boxing » cité sans détail), un club multi-activités enfants des Eaux-Vives, Groupe Réussite, Decathlon.
- Page Decathlon « la boxe anglaise pour les enfants » : âge (dès 6 ans), bienfaits, « la touche », équipement ; pas de parent, pas de source officielle suisse.
- Un club genevois propose des cours enfants par tranches (3–5, 6–8, 9–12, 13–15, 16–18), sans format parent-enfant (ne pas le nommer dans l'article).
- Lausanne : cours de boxe A DISPO (Unisanté/CHUV) réservés aux enfants en excès de poids ; seul cours parent-enfant trouvé = capoeira.

Trou : personne ne décrit une séance **commune** parent-enfant, ni ne cite les fiches J+S. Common ground à couvrir sans en faire l'angle : âge d'entrée, « est-ce dangereux », équipement.
Date de l'analyse : 2026-10-17

## CTA cible
- Lead chaud: `/#planning` — « Réserver une première séance » — fin de H2 5 et Pour finir, **si D3 rend la séance réservable au planning** ; sinon `/contact` — « Nous écrire ».
- Lead tiede: `/services/coaching-duo-trio` — « Découvrir le coaching en duo » (si D3 = Duo).
- Nurturing: `/blog/a-quel-age-commencer-la-boxe` ; `/offrir-un-cours` si D9 = oui.

## Sources

Toutes ouvertes le 2026-10-17 ; le passage cité a été retrouvé sur la page.

| # | Source | Éditeur, année | URL | Ce qu'on en tire | Statut |
|---|---|---|---|---|---|
| 1 | Prévention des accidents en boxe light-contact, réf. OFSPO/SJA 30.423.110 f, édition 04/2022 | OFSPO / J+S, BPA, 2022 | https://www.bfu.ch/media/dfrpavf3/mb_f_boxe-light-contact.pdf | aucune frappe à la tête avant 8 ans ; coups au torse et aux épaules en douceur ; casque jusqu'à 15 ans environ ; échauffement sensorimoteur + renforcement du tronc à chaque entraînement ; sparring : « seuls de légers contacts corporels » ; bijoux retirés ; intensité réduite à la fatigue | consensus (règle officielle J+S) |
| 2 | Prévention des accidents en kick-boxing light, réf. OFSPO/SJA 30.366.1 f, édition 03/2026 | OFSPO / J+S, BPA, WAKO Switzerland, 2026 | https://www.jugendundsport.ch/dam/fr/sd-web/v62Vbr491lST/mb_f_Kickboxing-Light.pdf | pas de coups à la tête jusqu'à 10 ans au moins ; interdiction du K.-O. ; enfants de même poids et taille ; gants 10 oz | consensus (règle officielle, sport voisin) |
| 3 | « Boxing not for children and teens » (déclaration commune CPS/AAP, *Boxing participation by children and adolescents*) | Société canadienne de pédiatrie, 29 août 2011 | https://cps.ca/en/media/Boxing-not-for-children-and-teens | les pédiatres déconseillent fortement la boxe aux enfants et adolescents ; cerveau plus vulnérable, récupération plus lente ; pas de preuve que le casque réduise les commotions | consensus (pour la boxe avec coups à la tête) |
| 4 | Bull FC et al., WHO 2020 guidelines on physical activity and sedentary behaviour, *Br J Sports Med* 54(24):1451-1462 | OMS / BJSM, 2020 | https://pmc.ncbi.nlm.nih.gov/articles/PMC7719906/ | 5–17 ans : au moins 60 min/jour en moyenne d'activité modérée à soutenue ; activités soutenues et de renforcement musculaire et osseux au moins 3 jours par semaine | consensus |
| 5 | Activité physique des jeunes adolescent·e·s, feuille-info HBSC 2022 | Addiction Suisse, juin 2024 (cite hepa.ch 2023) | https://www.addictionsuisse.ch/wp-content/uploads/2024/07/2024_Factsheet_hbsc_activite-physique-jeunes-adolescent-e-s.pdf | recommandation hepa.ch pour les 5–17 ans (60 min/jour en moyenne, 3 jours d'intensité soutenue, agilité plusieurs fois par semaine) ; 17,9 % des 11–15 ans atteignent 60 min chaque jour (2022) | consensus (recommandation) / donnée d'enquête |
| 6 | Morgan PJ et al., « Engaging fathers to increase physical activity in girls: the DADEE randomized controlled trial », *Ann Behav Med* 53(1):39-52 | Oxford University Press, 2019 (en ligne 2018) | https://academic.oup.com/abm/article/53/1/39/4969601 | 115 pères, 153 filles de 4 à 12 ans ; effet favorable sur l'activité des filles (d = 0,4) et des pères (d = 0,7), maintenu à 9 mois | donnée expérimentale (un essai, pas de boxe) |
| 7 | Harwood A, Lavidor M, Rassovsky Y, « Reducing aggression with martial arts: a meta-analysis of child and youth studies », *Aggression and Violent Behavior* 34:96-101 | Elsevier, 2017 | https://cris.biu.ac.il/en/publications/reducing-aggression-with-martial-arts-a-meta-analysis-of-child-an/ | 12 études, 507 jeunes de 6 à 18 ans ; effet moyen 0,65 (IC 95 % 0,11–1,03) de baisse des comportements externalisés | débattu |
| 8 | Gubbels J et al., méta-analyse arts martiaux et comportements externalisés, *Aggression and Violent Behavior* 28:73-81 | Elsevier, 2016 | https://dare.uva.nl/id/bb529ef6-b99a-41bd-9c61-ca85c76f258a | 12 études, 94 tailles d'effet, N = 5 949 : aucune relation globale ; biais de publication probable | débattu |
| 9 | Cours de sport pour les jeunes (écoles de sport) | Ville de Genève, consulté 2026 | https://www.geneve.ch/themes/sport/cours-sport/jeunes | plus de 50 disciplines pour les 4–17 ans, dont « baby boxing » ; tarifs non publiés sur la page | fait local (contexte, pas de comparaison) |

Retirée : la page officielle OFSP sur les recommandations ne donne pas le chiffre de minutes (lue, chiffre absent) ; on passe par la source 5. Non retenus faute de vérification : âges de compétition SwissBoxing (à vérifier selon la recherche), FFBoxe « dès 6 ans » (non rouvert).

## Donnees brutes

- Cadre mineurs validé par Nicolas (RC4 `br2-08`) : citation dans D1. Ce n'est **pas** une preuve de conformité juridique ou médicale (`docs/brand/proofs.md`).
- Studio : La Voie-Creuse 16, près de la place des Nations ; « un ring » sans mesure.
- Nicolas : licence SwissBoxing #102860, 20 ans de pratique, 5 ans à la tête du studio.
- Aucun prix, âge, format, créneau ou effectif parent-enfant n'existe dans les docs : voir D2–D6.
- Aucun témoignage client validé (`PRODUCT.md`) : la section « Paroles de clients » du module C/B est **omise**, ne pas la simuler.
- Dates : vacances de Noël GE 24 déc.–8 janv. (plan §2), utile si D6 retient des créneaux de vacances.

## Preuves et limites

- Ne pas écrire « conforme J+S » ni « coach J+S » sans D7.
- Ne pas écrire « assuré » sans D8.
- Ne pas écrire que la boxe améliore l'attention, la confiance ou la relation parent-enfant : aucune étude contrôlée sur la boxe chez l'enfant (recherche §A4) ; parler d'activité de coordination, au conditionnel.
- « Aucune offre parent-enfant trouvée à Genève ni à Lausanne » = recherche web du 17 oct. 2026, non exhaustive : garder cette précision.
- Ne nommer aucun club ; la Ville de Genève peut être citée comme service public.
- **Relecture par un professionnel de santé avant publication** (D11), puis validation de Nicolas (D10).

## Citations exploitables (GEO — Quotation Addition)

- « interdisent absolument toute frappe à la tête chez les moins de 8 ans et s'assurent que les coups portés au torse et aux épaules le sont en douceur » — OFSPO/J+S et BPA, *Prévention des accidents en boxe light-contact*, 2022 (https://www.bfu.ch/media/dfrpavf3/mb_f_boxe-light-contact.pdf)
- « interdisent strictement les coups à la tête jusqu'à l'âge de 10 ans au moins » — OFSPO/J+S, BPA et WAKO Switzerland, *Prévention des accidents en kick-boxing light*, 2026 (https://www.jugendundsport.ch/dam/fr/sd-web/v62Vbr491lST/mb_f_Kickboxing-Light.pdf)
- « Children's brains are more vulnerable to concussion, and recovery takes longer than for adults. » — Société canadienne de pédiatrie, 2011 (https://cps.ca/en/media/Boxing-not-for-children-and-teens) — à traduire en le signalant.
- « Pour les enfants et les adolescentes âgés de 5 à 17 ans, le Réseau suisse d'activité physique et de santé (hepa.ch) recommande de pratiquer au moins 60 minutes par jour en moyenne d'activité physique d'intensité moyenne à soutenue » — Addiction Suisse, HBSC 2022, 2024.
- « no overall relation between martial arts participation and externalizing behavior in juveniles » — Gubbels et al., 2016 — à traduire en le signalant.

## Spec machine

Pas de `boxe-parent-enfant-seance.spec.draft.json` tant que le statut est `blocked` : la spec figerait un format, un âge et un CTA qui n'existent pas. À compiler (`finalize_spec.py`) une fois D1–D8 tranchés et le brief passé par `brief-critic`.

## Réponses de Nicolas (2026-10-19)

- **D1 mineurs** : oui. Conséquence : corriger « Nous n'assurons pas de cours enfants » dans `a-quel-age-commencer-la-boxe` à la publication.
- **D2 âge** : dès 6 ans.
- **D3 format** : un ou deux parents avec un ou deux enfants.
- **D4 prix** : prix de la séance d'un adulte + CHF 10 par enfant.
- **D5** : à l'unité ou en cycle.
- **D6 créneaux** : les dimanches (studio ouvert le dimanche de 10 h à 18 h).
- **D7 encadrement** : l'un des coachs du studio (aucun prénom sans accord écrit).
- **D13 présence du parent** : si le parent ne peut pas participer, un autre adulte autorisé peut le remplacer, ou la séance se fait avec l'enfant seul.
- **D9 bon cadeau** : utilisable pour une séance parent-enfant.
- **D8 assurance RC couvrant les mineurs** : « à vérifier » — **reste bloquant**. Ne rien promettre sur l'assurance tant que ce n'est pas confirmé.
- **Restent ouverts** : D8 (bloquant), D11 relecteur santé, D12 cover ; autorisation du représentant légal (forme : document signé ou non) ; durée de séance. Signature : « Équipe Bis Repetita » (règle projet, jamais au nom de Nicolas).
