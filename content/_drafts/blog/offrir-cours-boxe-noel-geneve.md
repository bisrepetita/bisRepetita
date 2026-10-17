---
slug: offrir-cours-boxe-noel-geneve
status: blocked
blocked_by: format, prix et validité du bon non décidés (D1 à D6 ci-dessous)
planned_pubDate: 2026-11-17
publish_before: 2026-11-23
unblock_deadline: 2026-11-10
module: B
page_type: article
created_on: 2026-10-17
---

# Brief SEO : Offrir un cours de boxe à Noël, à Genève

> **Statut : bloqué.** La page cible `/offrir-un-cours` existe mais vend un cours sans format ni prix : en tête du fichier, « Page de test : le format et le prix du cours offert restent à décider. Aucun prix affiché. » Ce qu'elle dit aujourd'hui : un cours avec Nicolas, au studio (La Voie-Creuse 16), préparé selon le niveau de la personne, débutant bienvenu, gants et bandes fournis, « Écrivez-nous ou appelez-nous. Nous convenons ensemble du format et de la date. » (CTA `/contact?sujet=offrir` et téléphone). `PRODUCT.md` : « format et prix non décidés ». Décisions attendues **avant le 10 novembre** (plan §7) pour publier le 17 ; publication impérative **avant le 23 novembre** (semaine du Black Friday, ven. 27 nov.). Si rien n'est tranché le 10 : on décale, on ne publie pas un article qui vend un bon inexistant.

## Décisions requises (Nicolas, avec Jon pour la page)

| # | Décision | Options connues (aucune n'est retenue) | Bloquant pour |
|---|---|---|---|
| **D1** | Forme et personnalisation du bon | PDF envoyé par e-mail / carte imprimée à retirer au studio / les deux. Personnalisation : nom du bénéficiaire, message de la personne qui offre, oui ou non. Paiement : en ligne (outil à choisir) ou modes déjà acceptés (`docs/tarifs-reference.md` : virement, Twint, espèces). | H2 2, H2 3, FAQ, meta |
| **D2** | Ce qu'on peut offrir | Une séance Solo / une séance Duo / un pack / une séance Round by Round / un montant libre. Une ou plusieurs options. | H2 2, H2 5 (comparatif et Notre avis), title, keywords « offrir une séance de coaching » |
| **D3** | Prix | Aucun prix de bon dans `docs/tarifs-reference.md`. Prix de la grille si D2 reprend un format existant (Solo CHF 120, Duo CHF 140, Trio CHF 160 la séance ; Round by Round CHF 40 ; packs Solo CHF 1'100, Duo CHF 1'300) — **à confirmer**, pas de remise inventée. | H2 2, H2 5, meta, FAQ |
| **D4** | Validité | Aucune décision. Les packs sont valables 6 mois, mais un bon n'est pas un pack. **Point juridique** : selon une source juridique suisse (JuriUp, 2026), une clause qui limite la validité d'un bon acheté est nulle pour la doctrine majoritaire (art. 127 et 129 CO), admise par une minorité si annoncée à l'achat ; le Tribunal fédéral ne s'est pas prononcé. **À faire valider par un juriste avant d'écrire une durée.** | H2 4, FAQ, CGV |
| **D5** | Réservation par le bénéficiaire | Par le planning en ligne (`/#planning`) avec un code / par message ou téléphone (logique actuelle de la page) / les deux. Délai de prévenance, annulation (CGV : gratuite 24 h avant). | H2 3, FAQ |
| **D6** | Coach | « Avec Nicolas » (page actuelle) ou n'importe quel coach du studio (prénom + rôle seulement). | H2 2, E-E-A-T |
| D7 | Nominatif, transférable, remboursable, échangeable contre un autre format ? | Oui / non pour chaque point. | H2 4, FAQ |
| **D12** | Âge minimum du bénéficiaire | Adultes seulement / dès un âge donné avec autorisation du représentant légal. Doit être cohérent avec D1 et D2 du brief `boxe-parent-enfant-seance` (mineurs acceptés ou non) ; tant que D1 n'est pas tranché là-bas, l'article dit « adultes » ou rien. | H2 1 (« pas pour : un enfant »), FAQ, page `/offrir-un-cours` |
| D8 | Dates de commande pour Noël | Dernier jour pour recevoir le bon avant le 24 décembre ; studio ouvert ou non pendant les vacances de Noël (24 déc.–8 janv.) pour utiliser le bon. Pas d'urgence inventée : seulement des dates réelles. | H2 3, Pour finir |
| D9 | Bons pour entreprises (cadeau de fin d'année aux collaborateurs) | Oui (facturation entreprise, renvoi `/services/corporate`) / non. | FAQ 6 (saute si non) |
| D10 | Mise à jour de `/offrir-un-cours` | La page doit afficher le format, le prix et la validité **avant** la publication de l'article ; sinon l'article contredit sa propre page cible. Action Jon. **Si D1 retient le paiement en ligne, c'est un chantier dev** : le site n'a qu'une fonction `api/contact.js`, aucun paiement ni génération de bon ; à estimer par Jon avant de promettre la date du 17 nov. | Publication |
| D11 | Signature | « Nicolas de Boccard » après validation du texte, sinon « Équipe Bis Repetita ». | Byline |

### Dépendances section par section

| Section du plan | Rédigeable sans décision | Dépend de |
|---|---|---|
| L'essentiel en bref | Non | D1, D2, D3, D4 |
| Intro — réponse directe | Partiellement (le principe, le studio) | D2, D3 |
| H2 1 — pour qui c'est un bon cadeau, pour qui non | Oui | — |
| H2 2 — ce que contient le bon | Partiellement (contenu actuel de la page : niveau, matériel, lieu) | D1, D2, D3, D6 |
| H2 3 — comment la personne réserve | Non | D1, D5, D8 |
| H2 4 — validité et conditions | Non | D4, D7 |
| H2 5 — quel format offrir + Notre avis | Critères oui, prix et options non | D2, D3 |
| FAQ | 2 questions sur 6 | D4, D5, D9 |
| Pour finir + CTA | Oui (CTA `/offrir-un-cours`) | D8 pour la date limite |

## Metadata
- Slug: offrir-cours-boxe-noel-geneve
- Slug rationale: slug du plan (§3) ; verbe d'action, entités « boxe », « Noël », « Genève », sans année (l'article se met à jour chaque novembre sur la même URL) ; `offrir-un-cours` reste la page produit.
- Page type: article
- Module: B (SEO local, transactionnel)
- Target word count: 1000–1300
- Primary keyword: bon cadeau cours de boxe
- Date: 2026-10-17
- Persona: la personne qui offre (30 à 55 ans, Genève), qui cherche un cadeau sport pour un proche, souvent débutant ; parfois un manager pour son équipe (D9). Questions : 1) est-ce que la personne va vraiment s'en servir ? 2) que contient exactement le bon, combien, jusqu'à quand ? 3) faut-il que la personne sache boxer ?
- Tonalite: concret, sobre, orienté service (matrice `voice.md` « Débutant intimidé » côté bénéficiaire) ; aucune urgence artificielle.
- Registre: vouvoiement
- Contexte charge depuis: seo-context.md ✓ (+ `docs/brand/*`, `PRODUCT.md`, `docs/tarifs-reference.md`, `docs/_research/2026-10-17-concurrence-serp.md`, `src/pages/offrir-un-cours.astro`, plan §1, §2, §4 n° 9, §6)
- Research bundle: aucun `keywords-*` ni `serp-*` pour ce sujet ; GSC (25 mars–23 juin 2026, ancien) : aucune requête « cadeau », « offrir », « gift ». Analyse SERP qualitative du 2026-10-17 ci-dessous.

## Snippet recommande

**Exception projet** : le `title` est rendu comme H1 (pas de `seoTitle`) ; un seul texte sert aux deux, la règle « H1 ≠ title » ne s'applique pas (plan §6.3).

- Title = H1 : Offrir un cours de boxe à Noël, à Genève (40 car.)
- Meta description (à compléter avec D2–D4) : Un bon cadeau pour un cours de boxe au studio, près de la place des Nations : ce qu'il contient, son prix, sa validité et comment le réserver. (142 car.) — « son prix, sa validité » ne reste que si D3 et D4 sont publiés.

## Snippet variantes

| Angle | Title = H1 | Meta |
|---|---|---|
| Solution (douleur) | Bon cadeau boxe : un cadeau sport daté et encadré (49 car.) | Un cours de boxe à offrir, préparé selon le niveau de la personne, débutant bienvenu, matériel fourni. Le mode d'emploi pour Noël. (130 car.) |
| Expertise (E-E-A-T) | Offrir un cours de boxe : quel format choisir (45 car.) | Solo pour un débutant, duo pour boxer à deux : le studio Bis Repetita vous aide à choisir le cours de boxe à offrir à Noël. (123 car.) |

**Recommandation** : variante principale (« Noël » + « Genève » dans le title pour l'intention saisonnière locale ; la requête « bon cadeau » est en meta et en intro). Après Noël, retirer « à Noël » du title au profit de la variante Solution, sans changer le slug.

## Keyword Cluster

Volumes : **non vérifiés** partout (pas de DataForSEO ; aucune donnée GSC sur le sujet).

| Role | Keyword (query brut) | Volume | Placement | Formulation naturelle (prose) |
|---|---|---|---|---|
| **Principal** | bon cadeau cours de boxe | Non vérifié | Meta, intro, H2 2 | un bon cadeau pour un cours de boxe |
| Secondaire | offrir un cours de boxe | Non vérifié | Title/H1, intro | offrir un cours de boxe |
| Secondaire | cadeau sport Genève | Non vérifié | Intro, H2 1 | un cadeau sport à Genève |
| Secondaire | idée cadeau sportif Noël Genève | Non vérifié | H2 1 | une idée de cadeau sportif pour Noël à Genève |
| Secondaire | offrir une séance de coaching | Non vérifié | H2 5 | offrir une séance de coaching |
| Secondaire | bon cadeau sport Genève | Non vérifié | H2 2, H2 4 | un bon cadeau sport à Genève |
| Secondaire | cours de boxe débutant cadeau | Non vérifié | H2 1 | un premier cours de boxe en cadeau |
| Long-tail | bon cadeau boxe validité | Non vérifié | H2 4, FAQ | la validité d'un bon cadeau de boxe |
| Long-tail | cadeau à deux expérience Genève | Non vérifié | H2 5 | un cadeau à vivre à deux à Genève |
| Long-tail | cadeau pour quelqu'un qui aime le sport | Non vérifié | H2 1 | un cadeau pour quelqu'un qui aime le sport |
| Long-tail | offrir un cours de boxe à une femme | Non vérifié | H2 1, lien guide femme | offrir un cours de boxe à une femme |

**Rappel au writer** : dans le corps de l'article, utilise toujours la colonne « Formulation naturelle », jamais la forme brute du query. Voir `writing-rules.md` (règle 10) / `keyword-naturalization.md`.

## Structure

Contrat d'article : L'essentiel en bref → intro → 5 H2 → FAQ → Pour finir → CTA unique → (Sources si citées). Aucun H4.

**L'essentiel en bref (Tldr, 3–4 puces)** — après D1–D4 : ce qu'on offre, le prix, la validité, comment la personne réserve.

### Intro (réponse directe, sans H2)
Keywords: offrir un cours de boxe, bon cadeau cours de boxe, cadeau sport Genève
Bloc AEO: Definition
Contenu: 3 phrases : on offre une séance [D2] au studio, près de la place des Nations, préparée selon le niveau de la personne, débutant bienvenu ; le bon coûte [D3] et se réserve [D5]. Angle posé ici : une date à fixer avec un coach, plutôt qu'un abonnement qu'on n'ouvre pas.

### H2: Pour qui un cours de boxe est un bon cadeau, et pour qui non
Keywords: idée cadeau sportif Noël Genève, cadeau pour quelqu'un qui aime le sport, cours de boxe débutant cadeau, offrir un cours de boxe à une femme
Bloc AEO: Pros-cons
Contenu: Rédigeable maintenant. Pour : la personne curieuse de la boxe qui n'ose pas pousser la porte ; le sportif qui veut changer de discipline ; la personne stressée qui cherche à se défouler (sans promesse médicale) ; une femme qui veut débuter dans un cadre sans contact (établi : `docs/brand/themes.md` « offre validée sans contact », `docs/brand/identity.md` l. 32, FAQ de `src/pages/services/boxe-femme.astro` : « Nos séances sont sans contact par défaut. Vous frappez le sac et les pattes d'ours, jamais une autre personne. » ; lien guide femme, sans peur instrumentalisée). Pas pour : quelqu'un qui n'a jamais exprimé d'envie pour un sport de combat ; une blessure récente ou un problème de santé non vu par un médecin ; un enfant (pas d'offre mineurs à ce jour ; lien vers l'article parent-enfant seulement s'il est publié). Format « Pour qui / Pas pour qui » en deux listes courtes.

### H2: Ce que contient le bon
Keywords: bon cadeau cours de boxe, bon cadeau sport Genève
Bloc AEO: Self-contained
Contenu: Faits déjà publiés sur `/offrir-un-cours` (rédigeables) : séance préparée selon le niveau et les envies de la personne, aucun niveau requis, gants et bandes fournis, tenue de sport suffit, au studio, La Voie-Creuse 16. À compléter : forme du bon [D1], format offert [D2], prix [D3], coach [D6]. Présenter en liste de définitions courte (comme la page), pas en paragraphe.

### H2: Comment la personne réserve sa séance
Keywords: offrir un cours de boxe
Bloc AEO: Step-by-step
Contenu: **Dépend de D1, D5, D8.** Étapes : vous commandez [D1] → vous recevez le bon [D1, D8] → la personne réserve [D5] → avant la séance, un échange sur ses objectifs, puis observation à l'échauffement (protocole d'adaptation validé, `docs/brand/proofs.md`) → la séance. Lien vers le guide du premier cours. Annulation : CGV, gratuite 24 h avant (à confirmer pour un bon, D7).

### H2: Validité et conditions
Keywords: bon cadeau boxe validité, bon cadeau sport Genève
Bloc AEO: Self-contained
Contenu: **Dépend de D4 et D7, après avis d'un juriste sur la durée.** Durée de validité, nominatif ou non, transférable, échangeable, remboursable. Ne pas expliquer le droit suisse dans l'article (sujet débattu) : écrire la règle du studio, claire, et s'y tenir.

### H2: Quel cours offrir ? Solo, duo ou cours collectif
Keywords: offrir une séance de coaching, cadeau à deux expérience Genève
Bloc AEO: Comparison
Contenu: Tableau de critères (pas d'étoiles, aucun club cité) limité aux formats retenus en D2 : attention du coach, pour qui, ambiance, durée, prix (grille `docs/tarifs-reference.md`, seulement si D3 confirme). Candidats : Solo (un débutant, attention entière du coach), Duo (offrir une séance à deux, y compris avec la personne qui offre), Round by Round (8 personnes max, 1 coach, 50 min, sans échange de coups ; seulement si D2 l'inclut). Puis le bloc Notre avis.

**Emplacement « Notre avis »** (fin de ce H2, blockquote `> **Notre avis :** …`, 2–4 phrases). Contenu attendu (plan §4 n° 9), à confirmer selon D2 : par défaut, une séance Solo pour un débutant, parce que le coach adapte toute la séance à une seule personne ; le Duo pour offrir un moment à deux. Pas le bon choix : pour quelqu'un qui préfère l'énergie d'un groupe (Round by Round si offert), ou pour une personne qui n'a jamais montré d'intérêt pour la boxe (un autre cadeau sera mieux reçu).

### FAQ (H2 « Questions fréquentes », 6 H3 max)
1. La personne doit-elle avoir déjà fait du sport ? (rédigeable : non, aucun niveau requis)
2. Faut-il apporter du matériel ? (rédigeable : gants et bandes fournis, tenue de sport)
3. Jusqu'à quand le bon est-il valable ? [D4]
4. Peut-on offrir une séance à deux ? [D2]
5. Où se trouve le studio ? (FAQ locale module B : La Voie-Creuse 16, près de la place des Nations ; accès et stationnement seulement si confirmés par `/studio`)
6. Une entreprise peut-elle offrir des cours à son équipe ? [D9 ; sinon remplacer par « Peut-on choisir la date ? » [D5]]

### Pour finir + CTA unique
3 phrases. Date limite de commande pour Noël [D8] si elle existe, sans pression artificielle. CTA unique : `/offrir-un-cours` — « Offrir un cours de boxe ».

## Maillage interne (liens sortants)

URLs vérifiées (`ls src/content/blog`, `ls -R src/pages`, 2026-10-17).

| Ancre | Cible | Section | Obligatoire |
|---|---|---|---|
| offrir un cours de boxe | /offrir-un-cours | Intro + CTA final | oui |
| comment se passe un premier cours de boxe | /blog/premier-cours-de-boxe-preparation | H2 3 | oui |
| notre guide pour débuter la boxe quand on est une femme | /blog/boxe-femme-geneve-guide-complet | H2 1 | oui |
| la grille de tarifs | /tarifs | H2 5 | si D3 reprend la grille |
| le coaching en solo | /services/coaching-solo | H2 5 | si Solo offert |
| le coaching en duo | /services/coaching-duo-trio | H2 5 | si Duo offert |
| le cours collectif Round by Round | /services/round-by-round | H2 5 | si Round by Round offert |
| le studio | /studio | FAQ 5 | non |
| les formules pour les entreprises | /services/corporate | FAQ 6 | si D9 = oui |

Ne pas lier `/cours-gratuit` (l'essai gratuit n'existe plus). Lien entrant à prévoir (hors brief) : depuis `/offrir-un-cours` vers l'article, une fois la page mise à jour (D10).

## Image Briefs

### Cover
- placement: cover
- type: photo (N&B, `DESIGN.md`)
- subject: une paire de gants de boxe neufs et une enveloppe ou une carte posée dessus, au bord du ring
- description: Nature morte au studio, lumière latérale, ring flou en fond. Aucun logo inventé ; si la carte du bon existe (D1), la photographier elle, sinon enveloppe blanche sans texte.
- alt_text: Une paire de gants de boxe et un bon cadeau posés au bord du ring du studio
- aspect_ratio: 16:9

### Image 2
- placement: after-h2:Ce que contient le bon
- type: photo
- subject: gants et bandes fournis au studio
- description: Gants et bandes rangés, prêts pour la séance. Photo existante de `src/assets/` si l'une convient, sinon prise au studio.
- alt_text: Gants et bandes de boxe fournis pour la séance au studio Bis Repetita
- aspect_ratio: 4:3

### Image 3
- placement: after-h2:Comment la personne réserve sa séance
- type: schema
- subject: les quatre étapes, du bon à la séance
- description: Ligne sobre, encre sur blanc, Inter : commander, recevoir, réserver, boxer. Textes exacts après D1 et D5.
- alt_text: Les étapes pour utiliser un bon cadeau de cours de boxe, de la commande à la séance
- aspect_ratio: 4:3

### Image 4
- placement: after-h2:Quel cours offrir ? Solo, duo ou cours collectif
- type: photo
- subject: Nicolas tient les pattes d'ours face à une élève
- description: Réutiliser `src/assets/cours-portrait.webp` (déjà sur `/offrir-un-cours`, alt existant « Nicolas de Boccard tient les pattes d'ours face à une élève au studio »), sinon une autre scène réelle du studio.
- alt_text: Nicolas de Boccard tient les pattes d'ours pendant un cours de boxe au studio
- aspect_ratio: 4:3

## Objectif business

Vendre des bons cadeaux pour Noël (commandes via `/offrir-un-cours`) et capter la requête saisonnière « cadeau sport Genève » avant la semaine du Black Friday. Effet secondaire : chaque bon amène une nouvelle personne au studio, ce qui remplace l'ancienne séance d'essai gratuite (décision oct. 2026, `docs/seo/context.md`).

## Angle unique / POV

Mode A (plan §4 n° 9) : un cadeau sport qui a de bonnes chances d'être utilisé parce qu'il est encadré et qu'on fixe une date avec un coach, à l'inverse d'un abonnement qu'on n'ouvre pas. Le dire comme un mécanisme, pas comme une garantie (« qui sera utilisé » est une promesse : à éviter telle quelle). Et publier ce que personne ne publie à Genève : ce que contient le bon, son prix, sa validité.

## Gap concurrent identifie

Analyse qualitative (WebSearch/WebFetch, pas de `/seo-serp` chiffré, outil non Google.ch) :
- « bon cadeau cours de boxe Genève » : aucun bon cadeau boxe avec prix et validité ; résultats = annuaires (ClassPass), pages de la Ville de Genève sur la boxe, fiche d'association d'un club.
- Un club genevois mentionne un « bon cadeau » sur sa page équipements, sans montant, validité, forme ni mode d'achat (ne pas le nommer).
- « idée cadeau sport Noël Genève » : prestataires de coaching à domicile et plateformes de réservation ; un prestataire a une page « bon cadeau » orientée bien-être, sans détails sur la page d'accueil.
- Recherche du 2026-10-17 (`docs/_research/2026-10-17-concurrence-serp.md`) : plateformes de coffrets d'expériences « adrénaline », pas de boxe encadrée.

Trou : aucun acteur local n'explique **quoi** offrir (format selon la personne), **combien**, **jusqu'à quand** et **comment** la personne réserve. L'article ne tient son avantage que si D2–D4 sont publiés en clair.
Date de l'analyse : 2026-10-17

## CTA cible
- Lead chaud: `/offrir-un-cours` — « Offrir un cours de boxe » — intro, fin de H2 5, Pour finir (CTA unique du bas).
- Lead tiede: `/#planning` — « Réserver une première séance » — pour le lecteur qui veut finalement venir lui-même (une mention discrète en H2 1, pas un second CTA).
- Nurturing: `/blog/premier-cours-de-boxe-preparation` (à transmettre à la personne qui reçoit le bon).

## Sources

Article commercial : peu de sources externes, aucune statistique de consommation (aucune trouvée et vérifiée sur les cadeaux non utilisés en Suisse : ne pas en citer).

| # | Source | Éditeur, année | URL | Ce qu'on en tire | Statut |
|---|---|---|---|---|---|
| 1 | « Un commerçant peut-il limiter la durée de validité d'un bon cadeau ? » | JuriUp (juristes et avocats partenaires), mis à jour et vérifié le 5 août 2026 | https://juriup.ch/question-droit/commercant-limiter-validite-bon-cadeau/ | « La loi ne fixe pas de durée de validité pour les bons cadeaux » ; art. 129 CO interdit de raccourcir la prescription par contrat ; doctrine majoritaire : clause limitative nulle ; minorité : admise si annoncée à l'achat ; « Le Tribunal fédéral ne s'est pas encore prononcé. » | débattu — **usage interne pour D4, pas de citation dans l'article** |
| 2 | Vacances scolaires 2026-2027 | République et canton de Genève | https://www.ge.ch/vacances-scolaires-jours-feries/vacances-scolaires-2026-2027 | vacances de Noël du jeudi 24 décembre 2026 au vendredi 8 janvier 2027 | fait officiel (pour D8) |

Le texte officiel du CO sur fedlex.admin.ch n'a pas pu être lu par l'outil (page JavaScript) : le juriste consulté pour D4 s'y référera.

## Donnees brutes

- Page `/offrir-un-cours` (src/pages/offrir-un-cours.astro, lue le 2026-10-17) : title « Offrir un cours de boxe à Genève » ; « Un cours avec Nicolas, préparé selon le niveau et les envies de la personne » ; « Débutant bienvenu, aucun niveau requis » ; « Gants et bandes fournis. Une tenue de sport suffit. » ; lieu : au studio, adresse `siteConfig` ; « Nous convenons ensemble du format et de la date. » ; Schema `Service`. Aucun prix.
- Grille (`docs/tarifs-reference.md`, mise à jour 2026-03-23) : Solo CHF 120, Duo CHF 140, Trio CHF 160 la séance ; packs 10 séances Solo CHF 1'100, Duo CHF 1'300, Trio CHF 1'500 ; Small Group CHF 200 la séance ; Round by Round CHF 40 ; packs valables 6 mois ; annulation gratuite 24 h à l'avance ; paiement virement, Twint, espèces. **Attention** : ce fichier contient encore « Première séance d'essai offerte (tous formats) », retirée depuis (oct. 2026) : ne pas la reprendre.
- Dates : Black Friday ven. 27 nov. 2026, semaine dès le 23 ; vacances de Noël GE 24 déc.–8 janv. (vérifié ge.ch).
- Studio : La Voie-Creuse 16, près de la place des Nations, « un ring » sans mesure. Nicolas : licence SwissBoxing #102860, 20 ans de pratique, 5 ans à la tête du studio.
- Aucun témoignage client validé (`PRODUCT.md`) : la section « Ce que disent nos clients à Genève » du module B est **omise**, ne pas la simuler.

## Preuves et limites

- Pas de remise Black Friday, pas de « stock limité », pas de compte à rebours : aucune n'est décidée (anti-patterns : « urgence ou rareté non réelle »).
- Pas de « le cadeau qui sera utilisé » au sens d'une garantie : parler d'un rendez-vous daté et encadré.
- Pas de bienfait santé promis à la personne qui reçoit (« déstresser » au plus comme observation, pas comme traitement).
- Aucun prix tant que D3 n'est pas tranché et que `/offrir-un-cours` ne l'affiche pas (D10).
- Aucune durée de validité tant que D4 n'est pas validée juridiquement.
- Ne nommer aucun club ni prestataire ; aucun dénigrement des coffrets d'expériences.

## Citations exploitables (GEO — Quotation Addition)

Aucune citation externe prévue dans l'article (sujet commercial ; la seule source juridique est débattue et sert à la décision D4). Citation interne possible, déjà publiée sur `/offrir-un-cours` : « Un cours avec Nicolas, préparé selon le niveau et les envies de la personne. » — à reprendre seulement si D6 confirme « avec Nicolas ».

## Spec machine

Pas de `offrir-cours-boxe-noel-geneve.spec.draft.json` tant que le statut est `blocked` : la spec figerait un format, un prix et une validité non décidés. À compiler une fois D1–D6 tranchés, D10 fait et le brief passé par `brief-critic`.
