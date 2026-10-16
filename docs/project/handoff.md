# Handoff — refonte de test (branche `refonte-2026`)

## État
Site de test complet dans la nouvelle DA (blanc, encre, photo N&B, Inter), worktree `../bisRepetita-refonte`, preview Vercel via PR brouillon #1. Toutes les pages refaites ; `/offrir-un-cours` (sans prix) et `/styleguide-test` (4 options typo, noindex) ajoutées. Build OK. SEO : title/meta/H1/canonical identiques à `main` sur les 137 pages (`design/seo-before.json` vs `seo-after.json`) ; seules les réponses FAQPage de 8 pages ont changé (alignées sur la FAQ visible, claims retirés). Revue finale impeccable : corrections appliquées, signature (vidéo qui s'élargit au scroll) prouvée par enregistrement.

## À trancher (Jon / Nicolas)
- Typo : A/B/C/D sur `/styleguide-test` (Black Mango : fichiers + licence).
- Offre gratuite : encore promise dans les meta descriptions (figées), 33 articles MDX, `/cours-gratuit` (H1/FAQ). Sort de l'URL `/cours-gratuit`.
- Faits à vérifier : quartier (Sécheron sur /studio ; « Pâquis » dans la meta /tarifs), CGV (+41 78… / .com vs site), « Lionel de Boccard, Champion Suisse Romand 2013 » (Round by Round), note Google « 4.8 / 500+ » (masquée), Corporate (séance découverte gratuite, CHF 400–600, rapport trimestriel, capacités 20/12), « 25–65 ans » (cours-de-boxe-geneve), horaires (TODO).
- Prix Small Group par personne (4–8) : à confirmer.
- `src/config/authors.ts` (« 100+ », « plus de 20 ans ») : alimente le JSON-LD Person, donc non modifié.
- Meta figées contenant des claims (studio : « ring professionnel, 150 m² » ; small-group : « 6 max » ; Nicolas : « 100+ élèves ») : à réécrire une par une, consciemment.
- 3 articles ont 2 H1 (ligne `# ` dans le MDX) : activites-sportives-entreprise-geneve-comparatif, boxe-confiance-en-soi-femme-geneve, boxe-self-defense-femme-geneve.
- `nicolas-de-boccard.webp` porte un filigrane d'IA (masqué par le recadrage) ; covers blog à refaire (brief §5).

## Prochaine étape
Retour de Jon sur la preview → arbitrages ci-dessus → nouvelles photos N&B (shot list : plan de sept. §6.4) → covers blog.
