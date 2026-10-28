---
name: Bis Repetita
description: Studio de boxe sur mesure à Genève, mis en page comme une édition de mode suisse.
colors:
  paper: "#ffffff"
  ink: "#0a0a0a"
  graphite: "#4d4d4d"
  ash: "#6b6b6b"
  soft: "#8a8a8a"
  mist: "#a8a8a8"
  field-line: "#c9c9c9"
  hairline: "#ebebeb"
  surface: "#f5f5f5"
  error: "#b42318"
typography:
  display:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 6.2vw, 6rem)"
    fontWeight: 500
    lineHeight: 0.98
    letterSpacing: "-0.045em"
  headline:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3.75rem)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.375rem, 2vw, 1.75rem)"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  lead:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 2.8vw, 2.5rem)"
    fontWeight: 400
    lineHeight: 1.18
    letterSpacing: "-0.03em"
  index-row:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.375rem, 2.2vw, 2rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "-0.011em"
    fontFeature: "\"cv11\", \"ss01\""
  body-large:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "-0.011em"
  label:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0"
rounded:
  none: "0"
  pill: "999px"
spacing:
  gutter: "clamp(16px, 3.4vw, 48px)"
  section: "clamp(88px, 11vw, 168px)"
  nav-h: "64px"
  row: "14px"
  row-index: "22px"
  container: "1600px"
components:
  button-solid:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "46px"
  button-solid-hover:
    backgroundColor: "{colors.graphite}"
    textColor: "{colors.paper}"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "46px"
  button-line-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  button-light:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "46px"
  button-light-hover:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
  button-sm:
    rounded: "{rounded.pill}"
    padding: "0 18px"
    height: "38px"
  field:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "10px 0"
  photo-frame:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.none}"
---

# Design System: Bis Repetita

## Overview

**Creative North Star: "Le lookbook suisse"**

Un studio de boxe qui se lit comme une maison de mode : papier blanc, encre presque noire, photographie noir et blanc, et une typographie qui s'efface derrière l'image. La répétition est traitée comme un luxe : la même grille, les mêmes filets d'un pixel, les mêmes lignes d'index reviennent de page en page, et c'est cette constance qui fait le haut de gamme, pas l'ornement.

La densité est éditoriale : beaucoup de blanc entre les sections, des listes en lignes à filet plutôt que des cartes, une seule action forte par écran (la pilule noire). La couleur n'existe pas : toute la hiérarchie passe par la taille, la graisse 500, l'interlettrage serré et quatre gris. L'image porte l'émotion ; elle arrive en N&B, à angles droits, souvent bord à bord.

Le monde refuse explicitement le gabarit « salle de boxe » : fonds noirs, or, cartes à icônes, gros chiffres, halos.

**Key Characteristics:**
- Blanc, encre, gris ; aucune teinte.
- Inter seule, titres en 500 serrés (-0.045em à -0.025em).
- Filets de 1px (#ebebeb) comme seule structure ; aucune ombre.
- Photo et vidéo N&B (`grayscale(1) contrast(1.06)`), angles droits.
- Pilule noire pour l'action, unique objet arrondi.
- Mouvement lent à sortie exponentielle, faible amplitude, contenu visible par défaut.

## Colors

Une palette monochrome stricte : le blanc domine, l'encre écrit, les gris hiérarchisent.

### Primary
- **Encre** (ink) : texte courant, titres, pilule pleine, filet fort qui ouvre un index ou un formulaire, contour de focus et fond de sélection. Jamais en aplat de section.

### Neutral
- **Papier** (paper) : fond de toutes les pages, du panneau Cours et du menu mobile.
- **Graphite** (graphite) : textes secondaires (intro du premier écran, descriptions des portes et des lignes, réponses FAQ), survol de la pilule pleine.
- **Cendre** (ash) : métadonnées, termes `dt` des lignes clé/valeur, numéros d'étapes, libellés de colonnes du pied de page.
- **Gris doux** (soft) : seconde phrase d'un paragraphe d'accroche, seulement à la taille `lead` (24px et plus).
- **Brume** (mist) : lignes non survolées d'un index pendant qu'une autre est survolée ; état transitoire, jamais texte au repos.
- **Filet de champ** (field-line) : trait bas des champs de formulaire au repos.
- **Filet** (hairline) : tous les séparateurs de 1px, lignes d'index, bordures du panneau Cours, filet de la barre de navigation au scroll.
- **Surface** (surface) : fond de la section « déroulé d'une séance », fond d'attente des cadres photo.
- **Erreur** (error) : état invalide d'un champ et message d'échec d'envoi ; seule couleur du système, fonctionnelle.

### Named Rules
**The Noir sous photo Rule.** Le noir en aplat n'existe que sous une photo ou une vidéo (fond d'attente de la bande vidéo et de la bande studio, dégradé de lisibilité sur l'image). Une section ne prend jamais un fond noir ; la pilule pleine reste le seul autre noir rempli.

**The Gris pour l'emphase Rule.** Une emphase dans un titre passe en cendre, jamais en couleur ni en dégradé.

## Typography

**Display Font:** Inter (Google Fonts, axes `opsz` 14–32 et `wght` 300–600, `font-optical-sizing: auto`), repli `ui-sans-serif, system-ui, sans-serif`
**Body Font:** Inter, même chargement

**Character:** Une seule famille, choisie par Jon, qui bascule automatiquement vers sa coupe Display aux grandes tailles. Les titres sont serrés et en graisse moyenne ; le corps reste neutre, avec les alternates `cv11` et `ss01`.

La typographie des titres est encore à l'étude sur `/styleguide-test` : A Inter Display 500 (ce qui est livré), B Inter Display en capitales, C Inter + Bodoni Moda, D Inter Display 300. Tant que Jon n'a pas tranché, A fait foi ; aucune autre famille n'entre en production.

### Hierarchy
- **Display** (500, clamp 2.5–6rem, 0.98) : le H1 du premier écran, 12ch au plus.
- **Headline** (500, clamp 2–3.75rem, 1.02) : titres de section, titres des deux portes.
- **Title** (500, clamp 1.375–1.75rem, 1.15) : étapes, légende sur photo, phrase d'intro du pied de page.
- **Lead** (400, clamp 1.5–2.5rem, 1.18) : la promesse en grand, 24ch au plus, seconde phrase en gris doux.
- **Index row** (500, clamp 1.375–2rem, 1.1) : intitulé d'une ligne d'index ; le panneau Cours et le menu mobile en reprennent l'esprit (28–40px, 34px).
- **Body** (400, 16px, 1.5) et **Body large** (17px) : paragraphes, intro du premier écran, réponses FAQ en 62ch au plus, descriptions en 38–46ch.
- **Label** (400, 13px, 1.4, cendre) : métadonnées, libellés de champs, libellés de colonnes. Les lignes clé/valeur sont en 14px.

### Named Rules
**The Zéro surtitre Rule.** Aucun eyebrow, surtitre ou badge au-dessus d'un titre, sauf demande explicite de Jon. Les props historiques `badge` et `tagline` des widgets sont acceptées mais jamais rendues.

**The Chiffres alignés Rule.** Prix, effectifs, numéros d'étapes et tableaux utilisent `tabular-nums`.

## Layout

Conteneur unique de 1600px au plus, marges latérales `gutter`. Les sections respirent sur `section` en haut et en bas. Les compositions sont asymétriques en deux colonnes (`minmax(0, 1.5fr) / 1fr`, `1fr / 1.3fr`, `1.6fr / 1fr`) avec un écart qui grandit jusqu'à 120–160px ; la colonne titre devient collante (`top: nav-h + 32px`) quand l'autre colonne est une liste longue (déroulé, FAQ).

La photo casse la grille : bandes bord à bord sur toute la largeur (vidéo du premier écran, bande studio), portes en deux colonnes égales au ratio 4/5, photo d'accompagnement en 5/4.

Rythme interne en lignes : 12–14px de padding vertical pour une ligne clé/valeur, 22px pour une ligne d'index, 24–28px pour une question FAQ ou une étape.

Points de rupture observés : 960px (la navigation passe en menu), 860px (toutes les grilles passent sur une colonne, les portes s'empilent avec 56px d'écart), 420px (la pilule de la barre disparaît, le menu la porte).

**The Wordmark pleine largeur Rule.** Le logotype « bis repetita » s'étale sur toute la largeur du conteneur sous le premier écran et en bas du pied de page ; il encadre le site, il ne se répète pas ailleurs.

## Elevation & Depth

Le système est plat. Aucune ombre portée : les anciens tokens d'ombre « or » sont neutralisés à `none`. La profondeur vient de trois moyens seulement : le filet de 1px, l'alternance papier / surface, et la photo elle-même (avec un dégradé noir à 55 % sur sa moitié basse quand un texte s'y pose).

Les seuls `box-shadow` sont des filets déguisés : `0 1px 0` en filet sous la barre de navigation une fois la page défilée, et sous un champ en focus ou invalide.

**The Filet seul Rule.** Une séparation se fait par un filet de 1px ou par un changement de surface, jamais par une ombre, une carte ou un fond teinté.

## Shapes

Deux formes, pas de troisième. Tout est à angle droit (photos, vidéo, cadres, panneau Cours, champs de formulaire, sections), sauf la pilule entièrement arrondie de l'action et du bouton lecture/pause de la vidéo. Les icônes sont des flèches tracées en SVG, trait de 1.2px ; le signe plus/moins de la FAQ est fait de deux traits de 1px.

**The Photo à angle droit Rule.** Une photo ou une vidéo n'a jamais de rayon, de bordure ni d'ombre ; elle est toujours en N&B.

## Components

### Buttons
Une pilule, calme et sûre d'elle.
- **Shape :** pilule (999px), hauteur 46px, 15px en 500, flèche SVG optionnelle qui glisse de 3px au survol.
- **Solid :** fond encre, texte papier ; au survol passe en graphite. C'est l'action principale (« Réserver une séance »), une par écran.
- **Line :** contour encre, transparente ; au survol se remplit d'encre. Action secondaire à côté d'une pleine.
- **Light :** papier sur photo ; au survol devient transparente à texte blanc. Uniquement posée sur une image.
- **Small :** 38px, 14px, dans la barre de navigation.
- **Focus :** contour encre de 1.5px décalé de 3px (global).

### Lignes à filet
La structure de base de toutes les listes d'information (faits du premier écran, lignes des portes, formulaire de contact, profils, tarifs).
- Filet haut de 1px au début de la liste, filet bas sur chaque ligne, 12–14px de padding vertical.
- Clé à gauche en cendre, valeur à droite en encre, 14–15px.

### Index des formats (signature)
Liste éditoriale qui remplace les cartes de services.
- Ouvre sur un filet encre, puis chaque ligne en grille quatre colonnes (intitulé, description en graphite, méta en cendre alignée à droite, flèche) avec filet bas.
- **Survol / focus :** la ligne s'avance de 14px, la flèche apparaît, les autres lignes passent en brume.
- **Photo qui suit :** sur pointeur fin, une vignette N&B 4/5 de 240px suit le curseur (`quickTo`, 0.7s, `power3.out`) et change d'image selon la ligne. Absente au tactile.
- Sous 860px : intitulé et méta sur une ligne, description dessous, pas de flèche.

### Portes
Les deux entrées du site (Cours privé, Cours collectif), côte à côte.
- Photo N&B 4/5 qui se dévoile de bas en haut à l'apparition, puis zoome de 3.5 % au survol (1.4s).
- Titre headline et flèche diagonale qui glisse de 3px vers le haut à droite ; texte en graphite ; trois lignes à filet clé/valeur.

### Navigation
- Barre collante de 64px sur papier, grille logo / liens / actions ; liens 14px avec un trait de 1px qui se trace de gauche à droite au survol et sur la page courante.
- Se cache au défilement vers le bas, revient au défilement vers le haut ; filet bas une fois défilée.
- **Panneau Cours :** sous la barre, entre deux filets, se déroule par `clip-path` (0.7s). Deux colonnes de portes (titre 28–40px, puis lignes à filet en 17px qui s'avancent de 10px au survol, les autres passent en brume) et une vignette N&B 4/5 qui change selon l'élément survolé. Un voile encre à 18 % couvre la page derrière.
- **Mobile (≤960px) :** bouton texte « Menu », panneau plein écran papier, portes en 34px, liens principaux en lignes à filet 20px, pilule et téléphone en pied.

### FAQ
- Accordéon natif `<details>` en lignes à filet, question 17–19px en 500, réponse en graphite 62ch au plus.
- Signe plus/moins en deux traits de 1px dont le trait vertical pivote ; hauteur animée par `::details-content` là où le navigateur le permet, ouverture instantanée sinon.
- Titre de section collant à gauche sur desktop.

### Inputs / Fields
- **Style :** sans fond ni rayon, seulement un filet bas (filet de champ), 17px, libellé 13px en graphite au-dessus.
- **Focus :** filet bas encre doublé d'un `0 1px 0` encre.
- **Erreur :** filet et message en rouge erreur (`:user-invalid`). Le formulaire s'ouvre sur un filet encre.

### Liens
Lien souligné de 1px qui se retire de gauche à droite au survol (0.5s, sortie exponentielle) ; utilisé pour les liens secondaires à côté d'un titre (« Voir les tarifs », « Tous les articles »).

### Motion
CSS d'abord : survols, panneau, FAQ, liens et pilules sont en transitions CSS sur `cubic-bezier(0.16, 1, 0.3, 1)`. GSAP + ScrollTrigger seulement pour ce qui dépend du scroll, toujours dans `gsap.matchMedia()` sous `(prefers-reduced-motion: no-preference)` ; en mouvement réduit rien ne s'anime, le contenu est visible par défaut et la vidéo est mise en pause. Vocabulaire fixe :
- **Ligne de titre** (`data-split`) : chaque ligne monte dans son masque (1.3s, décalage 0.07s).
- **Bloc** : montée de 24px et fondu (1.2s), en cascade de 0.08s pour une liste.
- **Photo** (`data-photo-reveal`) : dévoilement bas-haut par `clip-path` (1.5s, `expo.inOut`) avec dézoom de 1.15 à 1.
- **Bande signature** (`data-clip-grow`) : la vidéo passe du retrait à la marge au plein écran, `clip-path` en scrub.
- **Parallaxe** (`data-parallax`) : ±6 % sur les photos larges, en scrub.
Toutes les apparitions se jouent une fois.

## Do's and Don'ts

### Do:
- **Do** garder une seule pilule pleine par écran pour l'action principale.
- **Do** passer toute photo et toute vidéo en N&B (`grayscale(1) contrast(1.06)`) et à angle droit.
- **Do** présenter une liste d'offres, de faits ou de prix en lignes à filet de 1px, clé en cendre, valeur en encre.
- **Do** écrire les titres en Inter 500 serré et mettre l'emphase en cendre.
- **Do** coder une animation en CSS d'abord ; un mouvement lié au scroll passe par GSAP + ScrollTrigger dans `matchMedia` avec `prefers-reduced-motion`, contenu visible sans JS.
- **Do** réserver la photo qui suit le curseur aux pointeurs fins.

### Don't:
- **Don't** poser un fond de section noir : le noir en aplat vit sous une photo.
- **Don't** ajouter un eyebrow, surtitre ou badge au-dessus d'un titre sans demande de Jon.
- **Don't** introduire une teinte, de l'or, un dégradé décoratif, un halo ou une ombre portée.
- **Don't** construire avec des cartes à icônes ou des gros chiffres statistiques.
- **Don't** arrondir une photo, un cadre ou un champ ; seule la pilule est ronde.
- **Don't** charger une autre famille que Inter en production tant que Jon n'a pas tranché entre les options A à D.
