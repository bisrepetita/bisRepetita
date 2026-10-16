# Bis Repetita — simplification du parcours et nouvelle DA

> **Pour Hermes :** exécuter ce plan tâche par tâche sur une branche propre, avec TDD pour les invariants de navigation et deux revues visuelles desktop/mobile. Ne pas pousser ni ouvrir de PR sans instruction explicite de Jonathan.

**Objectif :** transformer le site actuel en un parcours lisible autour de quatre portes — Coaching privé, Cours collectifs, Corporate, À domicile — tout en intégrant plus naturellement une clientèle majoritairement féminine et la direction artistique du moodboard « Running Vibes » de Nicolas.

**Architecture :** conserver les routes SEO existantes au premier passage, mais les retirer de la navigation principale lorsqu'elles sont des variantes d'une même offre. La navigation et les pages chapeaux portent l'expérience utilisateur ; les pages détaillées préservent les intentions de recherche et le maillage existant. La refonte visuelle devient éditoriale, photographique et contrastée, sans reprendre les images Pinterest.

**Stack :** Astro 5, TypeScript strict, Tailwind CSS v4, GSAP, Vitest, Netlify, Plausible.

---

## 1. Sources et niveau d'autorité

1. Réponses RC4 de Nicolas : `docs/brand/interview/responses.md`.
2. Confirmations directes de Jonathan du 8 septembre 2026 :
   - Jeremy, Lionel et Eliza travaillent chez Bis Repetita, dans le studio ;
   - leurs prénoms et rôles peuvent être affichés publiquement ;
   - Small Group : 4 à 8 personnes ;
   - environ 70 % de la clientèle actuelle est féminine, déclaré comme chiffre réel à utiliser pour guider la stratégie, pas comme claim public ;
   - aucune revue juridique/professionnelle supplémentaire n'est demandée ;
   - aucun cas client récent n'est requis pour compléter la réponse générique sur la méthode ;
   - le menu cible à quatre portes est validé ;
   - le claim « 99 % de nos clients ont atteint leurs objectifs » doit être supprimé ;
   - les photos réelles actuelles peuvent être réutilisées dans la première version ; le système d'images de blog devra être réaligné sur la nouvelle DA.
3. Dérivés provisoires : `docs/brand/`, `docs/business/profile.md`.
4. Code distant actuellement observé : `origin/main` à `7760b1d`.
5. Site public observé le 8 septembre 2026 : `https://bisrepetita.ch`.
6. Moodboard fourni : `https://ch.pinterest.com/ndeboccard/running-vibes/` ; 21 visuels initiaux inspectés. Il s'agit d'une référence de direction artistique, pas d'une banque d'images licenciée.
7. GSC local : période la plus récente disponible du 3 au 30 juin 2026. Les données sont utiles comme historique, mais ne constituent pas une mesure fraîche de septembre.

## 2. État Git et règle de travail

### Constat

- Le dépôt local est sur `main` au commit `76b07de`.
- La référence locale `origin/main` était restée à `45ba121`, tandis que le serveur distant annonce `origin/main` à `7760b1d`.
- Le worktree principal contient déjà des changements onboarding/branding, des données SEO modifiées et des fichiers non suivis.
- Le remote local configuré reste l'ancienne URL `https://github.com/jonathanvouilloz/bisRepetita.git`.
- Le dépôt canonique confirmé par Jonathan est `https://github.com/bisrepetita/bisRepetita` ; sa branche par défaut est `main` et son HEAD distant correspond à `7760b1d` au moment du contrôle.
- La capacité de lecture du dépôt canonique est vérifiée. Le droit de pousser une branche sera vérifié sans toucher à `main` au début de l'exécution.

### Décision de sécurité

Ne pas créer la future branche depuis le `main` local actuel : elle embarquerait un historique dépassé et des changements sans rapport.

Au démarrage de l'exécution :

1. configurer `https://github.com/bisrepetita/bisRepetita` comme remote canonique ;
2. récupérer sa branche principale ;
3. créer un worktree propre frère, par exemple `bisRepetita-redesign/` ;
4. créer `feat/onboarding-site-simplification` depuis `<remote-canonique>/main` ;
5. laisser le worktree actuel intact comme source documentaire ;
6. réappliquer uniquement les documents et changements explicitement retenus ;
7. travailler et vérifier localement ;
8. pousser uniquement après feu vert de Jonathan ;
9. ouvrir une PR, sans fusion automatique.

## 3. Diagnostic du parcours actuel

### 3.1 Navigation et offres

`src/config/site.ts:110-150` expose huit entrées de programme : Coaching privé, Solo, Duo & Trio, Petit Groupe, À domicile, Boxe Femme, Round by Round et Corporate. Le menu desktop construit un méga-menu de 720 px et le menu mobile déroule la même liste (`src/components/layout/Navbar.astro:61-135`, `239-275`).

Le même choix est répété :

- trois cartes principales sur l'accueil (`src/pages/index.astro:27-50`) ;
- huit cartes « Tous nos formats » sur l'accueil (`src/pages/index.astro:186-227`) ;
- huit cartes sur `/services` via `servicePages` (`src/config/site.ts:17-82`, `src/pages/services/index.astro:68-82`) ;
- quatre cartes plus un tableau sur la page Coaching privé (`src/pages/services/coaching-prive.astro:38-67`, `182-269`) ;
- cinq ancres et de nombreuses cartes tarifaires sur `/tarifs` (`src/pages/tarifs.astro:24-31`).

Le problème principal n'est donc pas l'absence d'information, mais la répétition de plusieurs taxonomies au même niveau.

### 3.2 Architecture cible recommandée

#### Navigation principale

- Studio
- Programmes — libellé cliquable vers `/services`
  - Coaching privé
  - Cours collectifs
  - Corporate
  - À domicile
- Tarifs
- Planning
- Blog
- CTA : Première séance / Réserver selon le contexte

#### Routes d'expérience principales

| Porte            | Route principale                   | Contenu                                                                                                                                       |
| ---------------- | ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Coaching privé   | `/services/coaching-prive`         | Small Group 4–8, Solo, Duo et Trio comme modalités d'un même accompagnement ; présenter Small Group en premier conformément à la priorité RC4 |
| Cours collectifs | `/services/round-by-round`         | Nom commercial Round by Round maintenu dans la page, libellé utilisateur « Cours collectifs » dans la navigation                              |
| Corporate        | `/services/corporate`              | devis et formats entreprise                                                                                                                   |
| À domicile       | `/services/coaching-boxe-domicile` | porte indépendante, non incluse dans Coaching privé                                                                                           |

#### Routes secondaires à conserver au premier passage

- `/services/coaching-solo`
- `/services/coaching-duo-trio`
- `/services/small-group-training`
- `/services/boxe-femme`

Elles ne doivent plus apparaître comme quatre programmes supplémentaires dans le menu. Elles restent accessibles depuis les pages chapeaux, le tarif, les articles et les moteurs de recherche. Aucun redirect n'est recommandé avant une mesure GSC fraîche et une carte complète du maillage.

Deux autres routes demandent un traitement explicite :

- conserver `/cours-de-boxe-geneve` comme pilier informationnel hors menu Programmes ;
- retirer `/styleguide` de l'indexation et de la navigation publique : c'est un outil interne, pas une landing.

### 3.3 Parcours de conversion cible

La RC4 fournit déjà la règle :

- nouveau visiteur → page Première séance `/cours-gratuit` ;
- personne connaissant son format → planning/réservation directe ;
- Round by Round → planning/réservation directe ;
- Corporate → demande de devis contextualisée.

Le site utilise actuellement un CTA générique de séance d'essai presque partout. La refonte doit centraliser une matrice CTA par intention plutôt que dupliquer des liens différents dans chaque page.

Le formulaire de contact doit accepter et préremplir les intentions Round by Round, Small Group et À domicile, actuellement absentes de sa liste d'objets. Les CTA doivent distinguer sans ambiguïté **Première séance**, **Réserver** et **Demander un devis**.

## 4. Femmes : orientation proposée

### 4.1 Ce que demande Jonathan

Le site ne doit pas présenter Bis Repetita comme une offre réservée aux femmes. Il doit néanmoins parler naturellement à une clientèle féminine majoritaire, notamment par des objectifs comme la tonification, la progression à son rythme, le cardio, la coordination, le cadre privé et l'absence de contact obligatoire.

Le chiffre de 70 % sert uniquement d'orientation stratégique. Il ne doit pas être affiché sur le site.

### 4.2 Recommandation

- Conserver `/services/boxe-femme` comme landing SEO explicite, mais la retirer du menu principal.
- Faire apparaître les femmes dans l'accueil, Coaching privé, Cours collectifs, tarifs et studio, sans créer une sous-identité « rose » ou féminisée.
- Employer une langue inclusive et concrète : tonification, énergie, coordination, confiance dans le geste, progression, cadre privé, intensité ajustée.
- Ne pas présenter ces mots comme « des mots de femmes » ; ils décrivent des objectifs possibles pour toute personne.
- Sur la landing SEO, conserver l'expression recherchée « boxe femme Genève » dans le titre/H1 et les métadonnées, mais écrire le corps de page comme une offre ouverte et adaptée, pas comme un univers séparé.

### 4.3 Pourquoi conserver la landing SEO

Les données GSC historiques montrent déjà une demande :

- du 3 au 30 juin 2026, `/services/boxe-femme` a obtenu 79 impressions, 6 clics, CTR 7,59 %, position moyenne 9,7 ;
- sur 91 jours, 97 impressions, 6 clics, position 9,9 ;
- la requête « boxe femme geneve » a obtenu 14 impressions/2 clics sur 28 jours et 27 impressions/3 clics sur 91 jours.

Supprimer ou rediriger cette page maintenant sacrifierait un actif mesuré sans bénéfice UX nécessaire. La solution est de simplifier le menu, pas d'effacer l'intention de recherche.

La landing est également ciblée par au moins 11 liens dans 10 articles publiés. Son retrait casserait un cluster déjà structuré. En revanche, le CTR GSC n'est pas une conversion : ne plus qualifier cette page de « meilleur convertisseur » tant qu'aucune donnée de formulaire ou de réservation par landing ne le démontre.

### 4.4 Contenu actuel à réécrire

La page actuelle est beaucoup plus explicite et stéréotypée que l'intention annoncée. À retirer ou reformuler :

- le chiffre `65%`, désormais contradictoire avec le `70%` déclaré (`src/pages/services/boxe-femme.astro:24-27`) ;
- « brûlent plus de calories qu'une heure de running » (`38-41`) ;
- résultats « en quelques semaines » (`56-59`) ;
- résultats en 3–4 semaines et transformation significative en trois mois (`128-130`) ;
- « affine », « sèche », « sculpte », « allonge » comme certitudes (`266-269`) ;
- « jamais blessée », « jamais cassée » et toute garantie absolue (`112-114`, `241-244`) ;
- « pas de regard masculin » sur l'accueil (`src/pages/index.astro:210-213`) ;
- les formulations qui caricaturent vêtements, jugement ou genre.

Aucune revue juridique supplémentaire n'est prévue ; la sécurité éditoriale sera obtenue en supprimant les garanties et comparaisons non prouvées.

## 5. Claims et contradictions à corriger avant design

### 5.1 `99 % de nos clients`

La question n'était pas « qui sont ces 99 % ? ». Le code actuel affirme : « 99% de nos clients ont atteint leurs objectifs » (`src/pages/index.astro:145-153`). Dans l'onboarding, Nicolas a demandé la suppression de `98 %` de satisfaction, de `100+` et de `10K+`. Il n'a pas été interrogé sur cette phrase différente à `99 %`. Le `99 %` est donc un quatrième claim non documenté, pas une décision directe de Nicolas.

Décision de Jonathan : supprimer également `99 %`. Le placeholder d'avatars externes doit aussi disparaître.

### 5.2 Métriques retirées par Nicolas

À supprimer du code et des métadonnées :

- `100+` athlètes ;
- `98 %` satisfaction ;
- `10K+` ;
- les reformulations qui les réintroduisent, comme « plus de 100 athlètes ».

Le `20+` doit être traité séparément : il peut correspondre à une chronologie personnelle, mais ne doit pas devenir automatiquement « 20+ ans d'expérience de coaching » sans formulation validée.

### 5.3 Capacités, durées et coachs

- Small Group : remplacer les nombreuses occurrences de 6 maximum par 4 à 8 (`site.ts:43-48`, `coaching-prive.astro:54-59`, FAQ, quiz, page Small Group et tarifs).
- Round by Round : harmoniser 1 coach et 50 minutes.
- `/tarifs` contient encore 60 minutes et 2 coachs pour Round by Round (`src/pages/tarifs.astro:164-179`, `372-378`).
- La tarification Small Group est aujourd'hui décrite pour quatre participants, alors que la capacité confirmée est 4–8 (`src/pages/tarifs.astro:131-162`). Jonathan indique provisoirement un prix par personne ; Nicolas doit encore le confirmer avant modification.

### 5.4 Méthode

La question d'onboarding demandait un exemple concret d'une séance récente afin de produire une scène crédible et spécifique. Nicolas a répondu par un protocole général. Ce n'est pas une erreur : sa réponse peut alimenter une section « Comment se déroule une séance », mais pas être présentée comme un cas réel ou un témoignage. Jonathan ne souhaite pas de cas client supplémentaire : aucune question finale n'est donc nécessaire sur ce point.

### 5.5 Équipe et Corporate

La publication des prénoms et rôles de Jeremy, Lionel et Eliza est autorisée par Jonathan. Cette autorisation ne valide toutefois pas automatiquement une qualification, un nombre de coachs par format ou un claim de certification : chaque rôle et chaque présence opérationnelle doivent rester fidèles aux informations disponibles.

La page Corporate doit être réécrite sur le même passage de cohérence. Les promesses de prévention du burnout, d'amélioration du sommeil, de bénéfices mesurables, de cadre « 100 % sécurisé » ou de sparring standard dépassent le périmètre validé. Employer des bénéfices potentiels, décrire l'encadrement et rappeler que tout contact est léger, contrôlé et consenti.

## 6. Direction artistique issue de « Running Vibes »

### 6.1 Signaux dominants observés

- noir et blanc quasi systématique ;
- grain, contraste, légère sous-exposition ;
- cadrages proches, partiels, parfois décentrés ;
- mouvement, flou cinétique et effort saisi plutôt que pose publicitaire ;
- boxe, running et entraînement traités comme une culture visuelle commune ;
- typographie blanche compacte, souvent uppercase/condensée ;
- slogans très courts posés directement sur l'image ;
- présence d'hommes et de femmes dans le même langage visuel ;
- luxe discret par l'édition, la retenue et la photographie, pas par l'or ou la brillance ;
- rares accents saturés rouge/orange/rose, utilisés comme rupture et non comme palette principale.

### 6.2 Écart avec le site actuel

Le site actuel partage déjà le noir et blanc et les grands titres, mais il repose encore sur :

- un vocabulaire premium-or, glows et glassmorphism (`src/styles/global.css:54-68`, `89-109`) ;
- de grands aplats noirs et textures décoratives avec beaucoup d'espace mort ;
- des cartes répétitives et des icônes ;
- peu de photos réellement distinctes : plusieurs fichiers reprennent la même scène d'entraînement ;
- une photographie surtout statique et illustrative ;
- trop peu de portraits/actions féminins intégrés au corpus principal.

### 6.3 Système visuel recommandé

- Direction de travail : **« précision sous tension »** — conserver la rigueur du studio privé, mais rendre visible le cycle geste → correction → répétition → progression.
- Palette : noir encre, blanc cassé/papier, gris photo ; beige actuel réduit à un accent secondaire. Tester un accent saturé unique uniquement après prototype.
- Surfaces : alternance franche, environ une section claire pour une section sombre ; sombre pour l'immersion, la photo et l'intensité, clair pour la compréhension, les programmes, les tarifs et le planning. Éviter plusieurs sections noires successives sans image ni rupture.
- Photographie : noir et blanc éditorial, mouvement, sueur, gants, détails, regards, mains, sorties de ring, plans larges du studio ; femmes et hommes mélangés dans les pages principales.
- Typographie : conserver une identité propre à Bis Repetita, mais introduire une seconde voix plus condensée/uppercase pour les labels, chiffres et appels courts. Ne pas copier les wordmarks du moodboard.
- Mise en page : moins de grilles de cartes, plus de compositions éditoriales asymétriques, doubles pages web, images bord à bord, légendes et comparatifs simples.
- Motion : révélation courte, cuts et translations cohérentes avec le mouvement photographique ; supprimer les effets décoratifs gratuits et respecter `prefers-reduced-motion`.
- Composants : boutons plus nets, surfaces plates, bordures fines, fin progressive des halos dorés et du verre systématique.
- Résilience : tout média animé ou révélé doit avoir un poster et un état statique immédiatement lisible ; aucun héros ne peut dépendre d'une animation pour afficher son contenu.

### 6.4 Besoin photographique

Les 14 assets applicatifs observés représentent environ sept scènes réellement distinctes, avec plusieurs doublons ou variations. Il manque notamment :

- action féminine nette et action féminine en mouvement ;
- interaction coach/cliente sans pose ;
- Solo, Duo/Trio et Small Group identifiables ;
- Round by Round collectif ;
- À domicile ;
- Corporate ;
- détails matière/gestes/équipement ;
- portraits cohérents de l'équipe si publication autorisée ;
- vues claires et sombres du studio pour rythmer les surfaces.

Pinterest ne fournit pas les droits de réutilisation. Pour la première version, les photos réelles existantes peuvent être réutilisées et retraitées. Un futur shooting reste recommandé pour combler les scènes manquantes.

### 6.5 Images des articles de blog

Les 32 images d'articles inspectées suivent actuellement un système très homogène : lumière beige chaude, décor fitness minimal, personnages souvent posés, rendu proche de la photo de stock ou générée, et grand titre blanc aligné à gauche. Le système assure une reconnaissance de série, mais il s'éloigne fortement de « Running Vibes » et produit plusieurs faiblesses :

- visages, décors et poses génériques ;
- palette beige répétitive, sans lien fort avec le site noir et blanc ;
- titres longs souvent coupés ou trop près du bord ;
- distinction insuffisante entre guides, comparatifs, réponses courtes et contenus Corporate ;
- répétition de la même composition pour des sujets très différents ;
- tonalité « wellness stock » plutôt que boxe éditoriale en mouvement.

Le nouveau système éditorial devra comporter trois familles cohérentes :

1. **Reportage** — photo réelle en noir et blanc, cadrage serré ou mouvement, titrage minimal ;
2. **Guide** — détail d'équipement, geste ou architecture, avec un cartouche très court et une zone sûre pour mobile/OG ;
3. **Analyse/Corporate** — composition plus graphique, grille typographique condensée et accent coloré ponctuel.

Règles communes : ratio canonique documenté, zone sûre de texte, titre raccourci plutôt que titre SEO complet, variante sans texte pour l'article, contraste testé à petite taille, aucune image Pinterest recopiée, et distinction explicite entre photo réelle, illustration éditoriale et image générée.

## 7. Pages et fichiers probablement touchés

### Structure et navigation

- `src/config/site.ts`
- `src/components/layout/Navbar.astro`
- `src/components/layout/Footer.astro`
- `src/components/widgets/RelatedServices.astro`
- `src/pages/index.astro`
- `src/pages/services/index.astro`

### Offres et conversion

- `src/pages/services/coaching-prive.astro`
- `src/pages/services/coaching-solo.astro`
- `src/pages/services/coaching-duo-trio.astro`
- `src/pages/services/small-group-training.astro`
- `src/pages/services/round-by-round.astro`
- `src/pages/services/coaching-boxe-domicile.astro`
- `src/pages/services/corporate.astro`
- `src/pages/services/boxe-femme.astro`
- `src/pages/tarifs.astro`
- `src/pages/cours-gratuit.astro`
- `src/pages/contact.astro`
- `src/components/widgets/QuizFormule.astro`
- `src/components/widgets/ZenamuCalendar.astro`
- `src/components/widgets/ContactForm.astro`
- `src/components/seo/Schema.astro`

### Design system

- `src/styles/global.css`
- `src/components/widgets/Hero.astro`
- `src/components/widgets/ServiceCard.astro`
- `src/components/widgets/Stats.astro`
- `src/components/widgets/Features.astro`
- `src/components/widgets/SplitShowcase.astro`
- `src/components/widgets/ContentShowcase.astro`
- `src/components/widgets/CTABanner.astro`
- `src/components/ui/Button.astro`
- `src/pages/styleguide.astro`
- `src/assets/*` et `public/videos/*`, uniquement avec des fichiers autorisés.
- `public/blog/*` et `public/images/blog/*` pour la migration du système visuel des articles.
- `src/components/blog/BlogHero.astro`, `PostItem.astro` et `PostFeatured.astro` pour garantir le nouveau cadrage sur site.

### Documentation

- documents branding/business déjà provisoires ;
- un plan de redirections seulement si une route est finalement supprimée ;
- une checklist de preuves/claims et une shot list.
- `CLAUDE.md` et `netlify.toml` pour corriger la divergence documentaire actuelle sur `/about` et documenter le statut interne de `/styleguide`.

## 8. Plan d'exécution proposé

### Phase 0 — assainir la base de travail

1. Configurer le dépôt canonique confirmé et vérifier le droit de pousser une branche sans modifier `main`.
2. Créer un worktree propre et `feat/onboarding-site-simplification` depuis la vraie branche distante.
3. Capturer l'état de référence : build, tests, check, lint, screenshots desktop/mobile, liste des erreurs préexistantes.
4. Réappliquer les documents onboarding nécessaires sans les données SEO parasites.

### Phase 1 — contrats de contenu

1. Écrire des tests d'invariants pour quatre portes principales.
2. Centraliser la taxonomie offre/format et la matrice de CTA.
3. Corriger claims, capacités, durées et coachs.
4. Mettre à jour le Schema.org et les métadonnées sans supprimer les routes secondaires.
5. Aligner le formulaire de contact et les destinations CTA sur les quatre intentions.

### Phase 2 — simplifier le parcours

1. Réduire le méga-menu à quatre choix.
2. Refaire l'accueil avec quatre portes, sans seconde grille de huit formats.
3. Refaire `/services` comme comparateur des quatre familles.
4. Refaire Coaching privé comme page chapeau de Solo, Duo, Trio et Small Group.
5. Renommer l'entrée Round by Round en « Cours collectifs » tout en conservant la marque dans la page.
6. Aligner tarifs, quiz, footer et RelatedServices.
7. Garder le pilier `/cours-de-boxe-geneve` hors menu et rendre le styleguide non indexable.

### Phase 3 — angle féminin

1. Retirer Boxe Femme de la navigation principale, sans supprimer la route.
2. Réécrire la page pour l'intention SEO, sans clichés ni promesses de transformation.
3. Introduire les objectifs de tonification et de progression naturellement dans Coaching privé et l'accueil.
4. Rééquilibrer l'imagerie sur tout le site.
5. Garder le `70 %` comme signal stratégique interne et vérifier qu'il n'apparaît pas publiquement.

### Phase 4 — nouvelle DA

1. Formaliser tokens et principes dans la documentation de design existante.
2. Créer deux variantes de page représentative : éditoriale claire dominante et contrastée 50/50.
3. Faire valider la direction avant de la propager.
4. Mettre à jour les composants et le styleguide.
5. Intégrer uniquement des photos autorisées.
6. Créer les trois familles d'images d'articles et migrer d'abord un échantillon représentatif avant les 32 visuels.

### Phase 5 — vérification locale

1. tests ciblés puis suite Vitest ;
2. `npm run check` ;
3. `npm run typecheck` ;
4. `npm run lint:check` ;
5. `npm run build` ;
6. audit des routes HTTP et des canonicals ;
7. screenshots desktop/mobile : accueil, menu ouvert, services, Coaching privé, Cours collectifs, Boxe Femme, tarifs, conversion ;
8. contrôle overflow, clavier, focus, reduced motion et cibles tactiles ;
9. recherche finale des anciens claims et capacités ;
10. comparaison GSC avant/après, sans IndexNow avant validation.

Le check local connu était déjà rouge sur quatre erreurs Astro préexistantes (`PostItem.astro`, `Form.astro`, `PricingTable.astro`, `ZenamuCalendar.astro`). La future branche doit établir un baseline frais depuis le dépôt canonique avant d'attribuer ces erreurs à la refonte.

## 9. Question finale encore ouverte

1. **Tarif Small Group — Nicolas :** confirmer que, pour un groupe de 4 à 8 personnes, le prix est facturé par personne et préciser le montant ou la grille applicable.

Tous les autres arbitrages sont clos : dépôt canonique et `main`, architecture à quatre portes, `70 %` interne uniquement, suppression du `99 %`, équipe publiable, réutilisation initiale des photos réelles et refonte du système d'images de blog.

## 10. Critères de succès

- quatre choix de programme maximum dans la navigation et dans le premier écran décisionnel ;
- aucune suppression de route SEO sans preuve et plan de redirect ;
- aucun `100+`, `98 %`, `99 %` ou `10K+` non documenté ;
- Small Group cohérent partout à 4–8 ;
- Round by Round cohérent partout à 1 coach et 50 minutes ;
- angle féminin visible dans la langue et l'image, mais non exclusif hors landing SEO ;
- `70 %` absent du site public et utilisé uniquement comme signal stratégique ;
- alternance claire/sombre lisible, sans tunnels noirs successifs ;
- diminution nette des cartes, halos et glassmorphism ;
- assets Pinterest non copiés ;
- système d'images de blog cohérent avec la nouvelle DA, lisible en miniature et explicitement sourcé ;
- tests, check, lint et build verts ou baseline préexistante explicitement isolée ;
- aucune publication, push ou PR avant validation locale par Jonathan.
