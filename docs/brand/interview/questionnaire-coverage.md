---
project: bisrepetita
status: internal_draft
purpose: questionnaire_coverage_contract
questionnaire: docs/brand/interview/questionnaire.md
schema: docs/brand/interview/questionnaire.schema.yaml
created_on: 2026-07-31
canonical_effect: none
---

# Contrat de couverture — pilote Bis Repetita

## 1. Invariant du futur système

Les sources disponibles et le nombre de questions peuvent varier selon le projet. En revanche, le système doit toujours évaluer la couverture du même contrat de sortie.

Chaque champ aval porte des dimensions orthogonales :

- `coverage_status` : `supported`, `qualified`, `contradictory`, `missing`, `not_applicable` ;
- `evidence_requirement` : `context_allowed`, `client_preferred`, `client_required` ;
- `permission_status` : `unknown`, `internal_only`, `granted`, `restricted`, `denied` ;
- `validation_status` : `unreviewed`, `needs_review`, `validated`, `rejected`.

Chaque enregistrement conserve aussi : `field_id`, `source_id`, `answer_id`, `statement`, `validator`, `validation_date`, `review_due` et, lorsque pertinent, `permission_id` ou `proof_id`.

Ces dimensions peuvent évoluer indépendamment : un fait peut être `supported`, encore `unreviewed` et limité à `internal_only`. Le générateur sélectionne les questions depuis l’ensemble de ces dimensions. Une réponse ne passe jamais automatiquement un document à `canonical`.

## 2. Contrat de sortie commun

| Document final                      | Couverture minimale attendue                                                                                                              | Questions du pilote                                                         |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `docs/business/profile.md`          | nom public et légal, activité, établissements, contacts, offres actives, zone, langues, équipe, rôles, gouvernance, contraintes, valideur | 1–8, 22–24, 27                                                              |
| `docs/project/prd.md`               | objectifs business, périmètre actuel/futur, conversions, KPI, autorités de données et priorités de réalisation                            | 5–8, 22–25, 27                                                              |
| `docs/brand/interview/responses.md` | réponses brutes, pièces jointes, consentement, date et répondant                                                                          | 1–27 + consentement                                                         |
| `docs/brand/interview/analysis.md`  | faits, verbatims, inférences, hypothèses, contradictions, permissions et lacunes traçables                                                | 1–27                                                                        |
| `docs/brand/identity.md`            | origine, raison d’être, positionnement, audiences en situation, valeurs observables, posture et exclusions                                | 4, 9–18                                                                     |
| `docs/brand/voice.md`               | porte-parole, droits de signature, registre, voix stable, tons contextuels, verbatims et anti-exemples                                    | 3, 19–21, 23                                                                |
| `docs/brand/message.md`             | promesse honnête, messages récurrents, objections, preuves, CTA et portée des claims                                                      | 5–7, 10–12, 17–18, 22–25                                                    |
| `docs/brand/anti-patterns.md`       | mots, styles, promesses, claims, signatures et comportements interdits                                                                    | 13, 16–17, 20, 22–24                                                        |
| `docs/brand/patte-ecrite.md`        | rythme, structure, vocabulaire, ouvertures, CTA et contrôles avant publication                                                            | 11, 19–21, 23, 25                                                           |
| `docs/brand/themes.md`              | thèmes cœur, adjacents, futurs, hors territoire, audiences, intentions et preuves                                                         | 5, 9–13, 17, 23–25                                                          |
| `docs/brand/proofs.md`              | preuve, source, statut, portée, date, permissions et fréquence de revue                                                                   | 2, 14, 18, 22–24                                                            |
| `docs/seo/context.md`               | objectifs, audiences, situations, langage client, questions, objections, critères, expertise, preuves, limites, KPI et territoires        | 5, 8–18, 22–25                                                              |
| `docs/design/moodboard.md`          | préférences déclarées, éléments à conserver/éviter et références, sans canoniser automatiquement les choix de production                  | 26                                                                          |
| `project.yaml`                      | états des modules reflétant la vraie couverture et la validation                                                                          | résultat de l’analyse et de la validation finale, jamais une réponse isolée |

## 3. Questions toujours requises ou conditionnelles

### Toujours requises

Même avec un site très riche, le système doit demander explicitement :

- porte-parole, droits de signature et valideur ;
- matière propriétaire : scènes, décisions, convictions et limites ;
- formulations naturelles et anti-voix ;
- permissions de réutilisation ;
- règles de claims sensibles ;
- mode de validation finale.

Pour Bis Repetita : questions 3–4, 13–21, 23–24 et 27.

### Requises en présence de contradictions

- coordonnées ou identité légale incompatibles ;
- offre, capacité, coach, prix, essai ou conditions divergents ;
- métriques sans définition ;
- source historique plus affirmative que les documents v3 ;
- attribution ou qualification d’une personne non confirmée.

Pour Bis Repetita : questions 1–2, 5–8 et 22.

### Réduites lorsque les sources sont solides

Les faits publics déjà observés doivent être présentés comme préremplissage à confirmer, pas redemandés sous forme ouverte : identité, adresse, catalogue, tarifs, horaires, URLs et informations administratives.

Pour Bis Repetita : questions 1, 5–8.

## 4. Lacunes connues avant réponse

| Axe              | État actuel                                                                | Lacune ou risque                                                                                                                                   | Questions |
| ---------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| Gouvernance      | Nicolas est fondateur, porte-parole et valideur pressenti                  | délégation de signature non autorisée ; modalités de validation inconnues                                                                          | 3, 27     |
| Équipe           | Nicolas publiable ; autres coachs non documentés                           | roster, qualifications, droits et rôle actuel de Lionel                                                                                            | 2         |
| Offres           | catalogue riche publié                                                     | statut/priorité par offre, Round by Round 1/2 coachs et 50/60 minutes, Small Group 4/6, contact/sparring                                           | 5–6       |
| Conversion       | plusieurs CTA historiques                                                  | séance gratuite, première séance, bilan, paiement et réservation non arbitrés                                                                      | 7         |
| Contacts         | studio et CGV distincts                                                    | coexistence voulue ou donnée obsolète                                                                                                              | 1         |
| Audience         | segments publiés et hypothèses SEO disponibles                             | priorité business et pertinence des critères démographiques non validées                                                                           | 9–10      |
| Langage client   | corpus éditorial publié                                                    | minimum de formulations réellement entendues avant achat non atteint                                                                               | 11–12     |
| Valeurs          | cinq valeurs proposées                                                     | décisions et arbitrages directs de Nicolas manquants                                                                                               | 14–16     |
| Promesse         | positionnement préparé                                                     | promesse et limites non validées dans les mots de Nicolas                                                                                          | 17–18     |
| Voix             | articles publiés et règles préparées                                       | autorisation de signature, verbatims directs, anti-voix et tons contextuels à confirmer                                                            | 3, 19–21  |
| Preuves          | faits publics et métriques visibles                                        | méthode de `100+`, `98 %`, `10K+`, `65 % de femmes`, validité des qualifications et permissions des actifs                                         | 22–23     |
| Claims sensibles | garde-fous préparés                                                        | validation opérationnelle concernant sécurité, santé, offre junior, mineurs, sparring et assurance                                                 | 24        |
| Projet/SEO       | stratégie et clusters historiques détaillés ; `docs/project/prd.md` absent | objectifs business, CTA, KPI, autorités de données, cadence, langues, concurrents, priorités actuelles et cohérence avec offres réellement actives | 25        |
| Visuel           | identité sombre existante                                                  | préférence client et statut réellement canonique des éléments visuels                                                                              | 26        |

## 5. Règles de génération adaptative

Pour chaque champ du contrat de sortie :

1. inventorier les sources disponibles ;
2. classifier chaque affirmation par provenance et état de couverture ;
3. comparer les sources afin de détecter les contradictions ;
4. marquer les champs qui nécessitent nécessairement une parole ou une permission humaine ;
5. sélectionner une question stable du catalogue ;
6. appliquer le gate de répondabilité : une décision, une correction, une permission ou une scène récente ; ancre concrète ; forme de réponse bornée ; réponse `Correct`/`Aucun`/`Inconnu` possible lorsque légitime ;
7. consolider les faits provisoires liés dans une validation préremplie plutôt que rouvrir plusieurs questions générales ;
8. omettre un champ non requis lorsqu'aucune source fiable ne permet de l'ancrer, au lieu de demander au client d'inventer du remplissage ;
9. injecter uniquement le préremplissage étayé ;
10. ajouter un module sectoriel si nécessaire ;
11. faire relire le formulaire par Jonathan avant envoi ;
12. conserver les réponses brutes ;
13. analyser les réponses en `fact`, `verbatim`, `inference`, `hypothesis` ou `contradiction` ;
14. produire les documents en `provisional` ou `needs_review` ;
15. passer à `canonical` uniquement après validation explicite du valideur nommé.

## 6. Modules appliqués à Bis Repetita

- activité locale ;
- coaching sportif et contact sport ;
- marque incarnée par un fondateur ;
- B2C multi-offres ;
- B2B/Corporate ;
- SEO local et éditorial ;
- preuves, sécurité et droits de publication ;
- direction visuelle.

## 7. Gate de complétude après réponse

La complétude est évaluée par champ requis de chaque document aval, et non par quotas globaux uniquement.

Pour chaque output :

1. tous les champs requis ont un `coverage_status` autre que `missing`, ou `not_applicable` avec justification ;
2. les éléments `client_required` possèdent un `answer_id` ou restent explicitement incomplets ;
3. les contradictions bloquantes sont arbitrées ou conservées comme blocage visible ;
4. chaque claim prioritaire possède une preuve qui l’étaye réellement, pas seulement une preuve quelconque ;
5. les règles de voix reposent sur un corpus naturel attribué et autorisé, pas seulement sur un quota de phrases ;
6. chaque actif publiable possède un `permission_status` compatible avec le canal visé ;
7. chaque famille possède un valideur explicite et un `validation_status` séparé ;
8. les dates de revue nécessaires sont renseignées.

Les seuils quantitatifs du schéma d’analyse restent des indicateurs de qualité, jamais une preuve suffisante à eux seuls. Une couverture insuffisante produit des relances ciblées et un statut `incomplete`. Elle ne doit jamais être masquée par une synthèse plausible.

## 8. Statut du pilote

Ce document et le questionnaire sont des artefacts de travail. Ils ne prouvent pas que Nicolas a répondu ni validé les documents existants. Les documents Bis Repetita restent `provisional` ou `needs_review` jusqu’au traitement des réponses et à une validation explicite.
