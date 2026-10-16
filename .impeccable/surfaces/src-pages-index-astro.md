---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/layouts/BaseLayout.astro"]
---

# Surface — site entier (accueil en tête)

Mode : Persuade (pages offre), Read (blog). Direction épinglée par le brief de Jon (pas de tirage) : `docs/project/rebranding-2026-10.md` §1, `design/references/refs.md`. Build code-led (pas de génération d'image disponible).

## Direction contract

THESIS : la répétition comme luxe. Un studio qui se lit comme une maison de mode suisse : blanc, encre, photo N&B, typographie qui s'efface. Refuse le gabarit « salle de boxe » (noir, or, cartes à icônes, gros chiffres, halo).

OWN-WORLD : fond #fff, encre #0a0a0a, gris #4d4d4d/#757575, filet #ebebeb, surface #f5f5f5. Inter Display serré (-0.04em) pour les titres, Inter 14–17px pour le corps. Filets 1px, angles droits pour la photo, pilule noire pour l'action. Photos N&B bord à bord. Noir seulement sous une photo.

STORY : le visiteur comprend en un écran ce qu'est Bis Repetita (boxe sur mesure, Genève), voit deux portes (privé / collectif), lit comment se passe une séance, réserve sur le planning.

FIRST VIEWPORT : nav fine (logo, Cours ▾, Studio, Tarifs, Planning, Journal, pilule « Réserver »). H1 « Coaching de boxe sur mesure à Genève » à gauche, intro + deux actions à droite ; sous eux le wordmark « bis repetita » à pleine largeur (~15vw, interligne .82). La vidéo N&B démarre en bande sous le wordmark, en retrait ; elle s'élargit bord à bord au scroll.

FORM : édition de mode / lookbook suisse. Direction épinglée par le brief du propriétaire : pas de tirage concept-seed (règle d’arbitrage de Jon : brief > skills).

SIGNATURE : la bande vidéo qui passe d'un cadre en retrait au plein écran au scroll (clip-path scrub, GSAP dans matchMedia, statique en reduced motion) ; index des formats en lignes à filet avec une photo qui suit le curseur au survol.

FINISH : unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
