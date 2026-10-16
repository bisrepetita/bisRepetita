---
status: draft
created_on: 2026-10-16
base: .hermes/plans/2026-09-08_091626-bis-repetita-simplification-audit.md
---

# Rebranding Bis Repetita — brief (oct. 2026)

> Ce brief **complète** le plan de simplification du 2026-09-08 (navigation, claims, angle féminin,
> besoins photo restent valables). Il ne liste que ce qui est **nouveau ou qui change**.

## 0. Garde-fou SEO (non négociable)

Le SEO marche : on refait la peau, pas le squelette.

- **URLs inchangées.** Aucun redirect sans GSC frais + carte du maillage (dernière extraction : juin 2026).
- **Title, meta description, H1, JSON-LD** de chaque page conservés ou modifiés un par un, consciemment.
- **Maillage interne** des articles vers `/cours-de-boxe-geneve`, `/services/boxe-femme`, `/services/corporate` préservé.
- Contenu textuel des pages : on simplifie les phrases, on ne supprime pas les sections qui portent des mots-clés.
- Vérif avant merge : `npm run build` + diff des `<title>`/`<h1>`/canonical sur `dist/` avant/après.

## 1. Direction artistique — change

| Avant (actuel / plan sept.) | Maintenant |
|---|---|
| Fond noir dominant, or #D4A853, glow, glassmorphism | **Blanc dominant**, noir et blanc strict, zéro or |
| « Running Vibes », alternance clair/sombre 50/50 | **Référence Zara / Kanso** : épuré, minimaliste, beaucoup d'air |
| Bricolage Grotesque + LASVALLES | **Inter** (base, style Kanso). Option titre : Black Mango (à tester, licence à vérifier) |
| Cartes, icônes, halos | Typo + photo + filets fins. Sections noires = rares, réservées à la photo |

Références : kanso.framer.media · explore.framer.media · dasstudio.framer.website ·
planning `docs/design/refs/planning-calendrier.png` (grille semaine claire, créneaux en pastilles).
Exports complets en local (gitignorés, à ré-exporter via `osisdie/framer-exporter` si absents) : `docs/design/refs/framer/`.

**Retour Jon sur la maquette v1** (`docs/design/maquette-accueil.html`, 2026-10-16) : bonne base. Manque :
- l'**animation** (cf. les exports : reveals, hover, transitions) ;
- le **rendu luxe de la pureté** — finition, rythme, détails ;
- une **navbar** plus riche : comment présenter les différents types de cours (méga-menu ? sous-menu Cours ?).

**Tokens relevés** (exports kanso / dasstudio / explore, 2026-10-16) — appliqués dans `docs/design/maquette-accueil.html` :

| Token | Valeur | Source |
|---|---|---|
| Fond / encre | `#ffffff` / `#0a0a0a` | kanso, das |
| Gris | `#4d4d4d` · `#757575` · `#a8a8a8`, filet `#ebebeb`, surface `#f5f5f5` | kanso, das |
| Police | Inter seule (400/500/600) | kanso, das |
| Titres | tracking `-0.03` à `-0.04em`, interligne `1`–`1.1` | kanso, das |
| Wordmark géant | ~15vw, interligne `.82`, tracking `-0.06em` | kanso (210px), das (134px) |
| Corps | 14–18px, interligne `1.4` | les trois |
| Boutons | pilule (radius 100px), noir plein ou contour | das, planning |
| Photos | N&B, angles droits (Zara) | — |

explore (fond sombre, Switzer) écarté : il va à l'inverse de « moins de noir ».

**Import Framer** : outils repérés `danbenba/FramerExport`, `osisdie/framer-exporter`. Usage = référence
visuelle et extraction de structure uniquement, **pas** de copie de code/assets d'un template payant dans le site.

## 2. Offre et conversion — change

1. **Plus de « séance gratuite » pour soi.** Remplacée par **« Offrir un cours »** : un cours de boxe avec Nico
   en cadeau pour quelqu'un d'autre.
   ⚠️ Conflit : les commits `5947d0c`→`a2db587` (sept.) ont créé `/cours-gratuit` et y ont branché tous les CTA
   « Réserver » / « séance d'essai ». À arbitrer : réécrire `/cours-gratuit` en page « Offrir un cours »
   (garder l'URL ? la changer ?), et repointer les CTA vers planning / réservation.
2. **Nouvelle offre : cours parent-enfant.** Format, âge, prix, créneaux à définir.
3. **Deux portes lisibles : Cours privé · Cours collectif.** (Corporate et Domicile restent des pages, plus discrètes.)
4. **Abonnement** : à réfléchir (modèle, prix) — rien sur le site tant que non décidé.

## 3. Femmes — précise le plan de sept.

- Vocabulaire : **tonification / se tonifier** plutôt que « renforcer » ; garder le terme technique.
- **Programme selon les 4 phases du cycle** : intensité et contenu ajustés (phase haute → plus explosif/cardio,
  phase basse → plus technique). Base existante : article `boxe-regles-cycle-menstruel.mdx` (à relier).
- Objectif : que la page soit réellement pensée pour les femmes, pas « la boxe, version femme ».
- `/services/boxe-femme` garde son H1/title SEO « boxe femme Genève ».

## 4. Copy — simplifier, sans tout réécrire

Règle : phrases courtes, factuelles, pas de survente. Exemples relevés :

| Où | Actuel | Problème |
|---|---|---|
| `studio.astro:159` | « …un espace privé, équipé d'un ring professionnel, conçu pour un entraînement sans compromis. » | survendu |
| `studio.astro:392` | « Douches, casiers sécurisés et espace détente pour une expérience complète digne d'un studio haut de gamme. » | trop complexe |
| `studio.astro:32,121`, `corporate.astro:502` | « ring professionnel » | le ring n'est pas aux normes compétition → dire « un ring », **aucune mesure** |

## 5. Images

- **Moodboard à refaire**, noir et blanc partout, très simple, très classe.
- **Covers blog** : refaire tout le système (actuel = beige stock). Générer via `/init-moodboard` + `/generate-cover`
  à partir des templates d'images existants et des photos fournies par Jon.
- Trier les photos actuelles : retirer les images « bidon ».
- **Ads Meta / Pinterest** : 2-3 tests, hors refonte du site — alimente seulement le moodboard.

## 6. Ordre proposé

1. Moodboard + tokens (blanc/noir, Inter) → maquette d'**une** page (accueil) pour valider la DA.
2. Arbitrages offre : Offrir un cours, parent-enfant, `/cours-gratuit`.
3. Déploiement de la DA page par page, garde-fou SEO à chaque page.
4. Copy (studio, femmes/cycle) en parallèle.
5. Covers blog.

## Questions ouvertes (Jon / Nicolas)

- Que devient l'URL `/cours-gratuit` ?
- Parent-enfant : âge, durée, prix, créneaux.
- Offrir un cours : format (bon cadeau PDF ? paiement en ligne ?), prix, quel cours.
- Typo titre : Inter seul ou Inter + Black Mango ?
- Le « 150 m² » du studio est-il une mesure à retirer aussi ?
