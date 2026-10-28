# Règles communes — refonte Bis Repetita (branche refonte-2026)

Repo : /home/hermes/personal-projects/bisRepetita-refonte (worktree git). Ne pas committer, ne pas pousser : le coordinateur s'en charge.
D'autres agents éditent d'autres fichiers en parallèle : ne touche QUE les fichiers de ton lot.

## À lire d'abord
- src/styles/global.css (tokens + classes : .wrap .section .t-display .t-title .t-subtitle .t-lead .soft .t-meta .btn .btn-solid .btn-line .btn-light .btn-sm .link-line .nb .rule-t)
- src/pages/index.astro et src/components/widgets/Hero.astro (référence de style : c'est le niveau attendu)
- src/utils/gsap.ts (attributs : data-split sur un titre, data-photo-reveal sur un cadre photo, data-parallax, .gsap-reveal, .gsap-stagger-cards)
- design/references/refs.md, docs/brand/voice.md, docs/brand/anti-patterns.md

## Monde visuel (épinglé par le propriétaire)
Blanc dominant, encre #0a0a0a, gris (gray-1 #4d4d4d texte secondaire, gray-2 #6b6b6b méta), filets 1px #ebebeb (classes Tailwind : border-line, bg-surface, text-gray-1, text-gray-2, text-ink). Typo Inter seule, poids 400/500, titres serrés via les classes t-*. Références : Kanso, Das Studio, Zara.
- Photos : N&B (mettre la classe `nb` sur le conteneur), angles droits, jamais de coins arrondis, souvent bord à bord ou en grand.
- Structures : lignes séparées par des filets (libellé gris à gauche / valeur à droite), colonnes asymétriques, beaucoup d'air (.section). PAS de grilles de cartes à icône + titre + texte, pas de cartes arrondies avec ombre, pas d'icônes décoratives (lucide etc.) sauf flèche fine ou chevron fonctionnel.
- Interdits : or/beige, glow, glassmorphism, dégradés, texte en dégradé, fond noir de section (le noir n'existe que sous une photo), surtitres/eyebrows/badges au-dessus des titres (ne jamais afficher les props `badge`/`tagline`), numéros de section décoratifs, gros chiffres-statistiques façon dashboard, emoji, border-left coloré.
- Boutons : pilule .btn .btn-solid (action principale) / .btn-line (secondaire) ; liens texte en .link-line.
- Mouvement : data-split sur les H2, data-photo-reveal sur les grandes photos, rien d'autre de décoratif. Contenu visible sans JS.
- Mobile 390px : pas de débordement horizontal, colonnes empilées, gouttière var(--gutter).
- Accessibilité : contrastes ≥4.5:1 pour le texte courant, focus visible, alt pertinents, boutons/labels de formulaire corrects.

## Garde-fou SEO (non négociable)
Pour chaque page : NE PAS modifier `metadata` (title, description, canonical, noindex), le texte du H1 (le balisage interne peut changer mais le texte lu doit rester identique), les <Schema …/> et leurs données, l'URL, ni les liens internes existants vers d'autres pages du site (on peut les déplacer, pas les supprimer). Ne pas supprimer de section qui porte des mots-clés : on raccourcit/simplifie les phrases, on garde les sujets. Ne pas ajouter de H1.

## Contenu
- Retirer partout : « 100+ », « plus de 100 », « 98 % », « 99 % », « 10K+ », avatars pravatar, faux témoignages, « ring professionnel » (dire « un ring », sans mesure), « 150 m² » (ne pas afficher de surface), promesses de résultat (« en quelques semaines », « transformation », « brûle plus que le running »), garanties absolues (« jamais blessé »), « pas de regard masculin ».
- « 20 ans » ne qualifie que la pratique de Nicolas (« 20 ans de pratique »), jamais le coaching.
- Small Group = 4 à 8 personnes. Round by Round = 8 max, 1 coach, 50 min, CHF 40.
- Les CTA « séance d'essai gratuite / séance offerte » deviennent « Réserver une séance » → `/#planning` (ou le planning de la page s'il y en a un, ancre locale). Corporate → « Demander un devis » → /contact. Ne pas changer metadata même si elle mentionne la séance offerte.
- Voix : vouvoiement, phrases courtes, sobres, pas d'exclamation, pas d'anglicismes marketing. Français : espaces insécables avant « : ; ? ! » et dans « CHF 40 », guillemets « ».
- Images : n'utiliser que src/assets/{cours-portrait,cours-2-landscape,homepage,image-cta,lionel-nicolas-boxe,ambiance-bis-repetita,salle-1,nicolas-de-boccard}.webp. Ne plus utiliser studio-atmosphere.webp, footer-section.webp (poussière dorée), map-geneve-boxe.webp (carte sombre). Les doublons (studio-hero = homepage, studio-interior = cours-2-landscape, nicolas-portrait = cours-portrait) restent utilisables mais varie les choix.

## Vérification
- Build sérialisé (autres agents en parallèle) : `cd /home/hermes/personal-projects/bisRepetita-refonte && flock /tmp/claude-1000/br-build.lock npm run build 2>&1 | tail -20`. Il doit passer.
- Capture (optionnelle) : un serveur preview tourne sur http://localhost:4399 MAIS il sert dist/ : relance-le pas ; après ton build, il sert ta version. Script de capture : `node /home/hermes/.npm/_npx/fd3bca3c548369c0/shot.mjs <url> <out.png> <largeur> <hauteur>` (sortie dans /tmp/claude-1000/). Lis tes captures desktop 1440 et mobile 390, corrige, au plus 2 tours.
- Rapport final (court) : fichiers modifiés, contenus retirés/réécrits, doutes à arbitrer par le propriétaire.
