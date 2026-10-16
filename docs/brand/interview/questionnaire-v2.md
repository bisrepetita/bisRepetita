---
project: bisrepetita
status: completed
questionnaire_version: "2.0.0"
target_onboarding_revision: 4
supersedes_execution_snapshot: "bisrepetita-r3"
created_on: 2026-08-24
validated_by: Jonathan
validated_on: 2026-08-24
provisioned_on: 2026-08-24
completed_on: 2026-08-31
ingested_on: 2026-09-07
onboarding_project_id: "70135d26-ac4b-4ea4-9dd5-6acc0887acaa"
onboarding_session_id: "ad13f5e8-a1f0-473a-9511-38dab57fbc11"
canonical_effect: none
sources:
  - docs/brand/interview/questionnaire-coverage.md
  - docs/brand/interview/responses.md
  - docs/brand/interview/analysis.md
  - docs/brand/identity.md
  - docs/brand/voice.md
  - docs/brand/message.md
---

# Questionnaire V2 — Bis Repetita

## Statut

Projet de contenu pour une **nouvelle RC4**. La RC3 existante reste immuable. Ce document ne crée pas de session, ne produit pas de lien client et ne remplace aucun snapshot déjà exécuté.

Il s'agit d'une spécification éditoriale à relire avant sa traduction en payload machine. La RC4 ne pourra être créée que si le dry-run réel de l'application reproduit ces dix cartes, leurs préremplissages et leurs réponses de sortie ; sinon le compilateur devra d'abord être étendu, sans contournement manuel silencieux.

## Règle de conception

Le corpus décrit déjà l’activité, l’histoire, les audiences, la plupart des offres, le positionnement et une voix éditoriale provisoire. La V2 ne redemande donc pas ces sujets sous forme ouverte.

Chaque question ci-dessous demande uniquement :

- un arbitrage que Nicolas doit réellement prendre ;
- une correction d’une information précise ;
- une scène ou une formulation que lui seul peut fournir ;
- une permission ou une validation explicite.

`Correct`, `Je ne sais pas`, `Aucun` et `Rien à ajouter` sont des réponses complètes lorsque proposées. Le client ne doit jamais remplir un vide avec une réponse plausible.

## Ce qui n’est plus redemandé

- l’activité générale et la zone genevoise ;
- l’histoire complète de Bis Repetita ;
- les coordonnées légales et opérationnelles déjà distinguées ;
- les tarifs déjà publiés ;
- une définition abstraite de la méthode, des valeurs ou du ton ;
- une stratégie éditoriale par canal ;
- un dernier champ ouvert qui obligerait à « trouver quelque chose ».

---

## BR2-01 — Les deux priorités des 12 prochains mois

**Contexte affiché au client**  
Les formats actuellement documentés sont : Solo, Duo, Trio, Small Group, Round by Round, Boxe Femme, préparation de compétiteurs, domicile et Corporate.

**Question affichée**

> Choisissez au maximum **deux formats à développer en priorité** dans les 12 prochains mois. Classez-les 1 et 2. Puis indiquez, s’il y en a un, le format que vous ne souhaitez pas mettre en avant pour l’instant.

**Réponse attendue**

- priorité 1 : choix dans la liste + une raison courte ;
- priorité 2 : choix dans la liste + une raison courte ;
- à ne pas promouvoir : choix ou `Aucun`.

**Couverture** : `business.objective`, `audience.priority`, `offers.core`.

---

## BR2-02 — Les détails pratiques à trancher

**Contexte affiché au client**  
Les sources actuelles se contredisent ou restent incomplètes sur les points suivants.

**Question affichée**

> Corrigez uniquement les lignes ci-dessous. Si une règle dépend du format ou de la séance, écrivez précisément de quoi elle dépend.

| Point | Choix proposés |
|---|---|
| Round by Round | `1 coach` · `2 coachs` · `cela varie` + règle |
| Durée d’une séance Round by Round | `50 min` · `60 min` · `autre` |
| Capacité du Small Group | `4 personnes` · `6 personnes` · `autre` |
| Contact ou sparring | formats concernés + `jamais` · `optionnel` · `prévu dans le format` |

`Je ne sais pas encore` est accepté ligne par ligne ; la donnée restera alors non publiable.

**Couverture** : `offers.core`, `regulatory.health`, contradictions opérationnelles.

---

## BR2-03 — L’équipe réellement active et publiable

**Contexte affiché au client**  
Nicolas de Boccard est documenté comme fondateur et Head Coach. Aucun autre coach ne sera nommé sans information confirmée.

**Question affichée**

> Ajoutez uniquement les personnes qui travaillent actuellement pour Bis Repetita et qui peuvent apparaître publiquement. Pour chaque personne : nom, rôle exact, qualification utile à publier, offres concernées et autorisation de publication (`oui`, `non`, `à confirmer`). Si Nicolas doit rester la seule personne nommée, écrivez `Aucune autre personne à publier`.

**Couverture** : équipe, attribution, qualifications, permissions de publication.

---

## BR2-04 — La première étape proposée au client

**Contexte affiché au client**  
Les contenus actuels utilisent plusieurs prochaines étapes : première séance, bilan initial, réservation directe et devis Corporate.

**Question affichée**

> Pour chaque situation, choisissez **une seule prochaine étape par défaut** :
>
> 1. particulier qui découvre le studio ;
> 2. personne qui connaît déjà le format souhaité ;
> 3. cours Round by Round ;
> 4. entreprise.
>
> Choix possibles : `appel court`, `bilan initial`, `première séance`, `réservation directe`, `demande de devis`, `autre`.

**Couverture** : conversion, CTA, parcours de réservation.

---

## BR2-05 — Une séance représentative, pas toute la méthode

**Contexte affiché au client**  
Le système propose « technique avant intensité » et « adaptation réelle », mais il manque une scène directe de Nicolas qui montre comment cela se passe.

**Question affichée**

> Pensez à **un client récent** et à **une séance récente représentative**. Décrivez 3 à 5 moments dans l’ordre :
>
> 1. ce que vous avez observé ;
> 2. ce que vous avez fait travailler ;
> 3. ce que vous avez corrigé ou adapté ;
> 4. ce qui vous a fait décider de cette adaptation.
>
> Il ne s’agit pas de décrire tout votre métier. Un seul exemple suffit.

**Couverture** : `brand.method`, `brand.values`, matière propriétaire.

---

## BR2-06 — Les formulations qui ressemblent vraiment à Nicolas

**Contexte affiché au client**  
Ces formulations existent déjà dans les contenus publiés ou dans le système de marque provisoire.

**Question affichée**

> Pour chaque phrase, choisissez : `Je le dirais comme ça`, `L’idée est juste, mais pas les mots`, ou `À retirer`. Réécrivez uniquement les phrases classées « pas les mots ».

| Formulation à évaluer |
|---|
| « Une boxe technique, exigeante et accessible. » |
| « Technique avant intensité. » |
| « La confiance suit, pas l’inverse. » |
| « Pas de programme générique recyclé. » |
| « Le rythme s’adapte au souffle et à la coordination du jour. » |

> Ajoutez ensuite **une seule phrase** que vous dites réellement à un nouveau client. Si aucune ne vous vient, écrivez `Aucune phrase à ajouter`.

**Couverture** : `voice.natural`, `voice.client-verbatim`, `voice.avoid`.

---

## BR2-07 — Les trois métriques à documenter ou retirer

**Contexte affiché au client**  
`100+`, `98 %` et `10K+` apparaissent dans les sources, mais leur méthode ou leur sens n’est pas assez documenté pour de nouveaux contenus.

**Question affichée**

> Pour chaque métrique, choisissez `Documenter`, `Retirer` ou `Je ne sais pas`. Si vous choisissez « Documenter », complétez uniquement les champs de la ligne.

| Métrique | Information nécessaire |
|---|---|
| `100+` | ce qui est compté, période, source vérifiable |
| `98 %` | question mesurée, nombre de réponses, période, source vérifiable |
| `10K+` | ce que le nombre désigne, période, source vérifiable |

Une métrique marquée `Je ne sais pas` ou incomplète restera bloquée à la publication.

**Couverture** : `proof.examples`, claims et périmètre des preuves.

---

## BR2-08 — Les limites à publier sur la sécurité et le contact

**Contexte affiché au client**  
Bis Repetita propose des formats sans contact et des formats pouvant concerner la préparation de compétiteurs. Les bénéfices physiques ou mentaux ne doivent pas devenir des garanties médicales.

**Question affichée**

> Pour chaque ligne, choisissez la règle publiable et nommez la personne qui valide cette règle. `À confirmer` est accepté.

| Sujet | Décision attendue |
|---|---|
| Formats sans contact | lesquels peuvent être décrits explicitement comme sans contact ? |
| Apprentissage avec contact | dans quels formats, à quelles conditions et avec quel encadrement ? |
| Sparring | pour quels publics, avec quel consentement et quelles conditions ? |
| Mineurs / offre junior | offre active ou non ; âge minimum ; autorisation parentale ; encadrement |
| Bénéfices physiques ou mentaux | formulations autorisées, à qualifier ou interdites |

**Couverture** : `regulatory.health`, claims sensibles, valideur professionnel.

---

## BR2-09 — Signature et validation finale

**Contexte affiché au client**  
Par défaut, les nouveaux contenus restent signés « Équipe Bis Repetita ». Les documents de marque sont provisoires tant que Nicolas ne les a pas relus.

**Question affichée**

> 1. Les nouveaux contenus peuvent-ils être signés au nom de Nicolas ? Choisissez : `non`, `oui après validation de chaque texte`, ou `oui seulement pour les formats suivants` + liste.
> 2. Comment souhaitez-vous valider le document final ? Choisissez : `commentaires dans le document`, `email`, `réunion`, ou `autre`.
> 3. Qui donne l’accord final si ce n’est pas Nicolas ? Indiquez le nom et le rôle, ou `Nicolas uniquement`.

**Couverture** : gouvernance, droits de signature, validation finale.

---

## BR2-10 — Validation du résumé connu

**Contexte affiché au client**

1. Bis Repetita est un studio genevois de boxe anglaise sur mesure.
2. Le positionnement repose sur la progression technique, l’adaptation individuelle et un cadre premium sobre, sans élitisme.
3. Les publics documentés vont des débutants aux pratiquants exigeants, avec des formats privés, petits groupes, collectifs, Boxe Femme, compétiteurs et Corporate.
4. La marque ne promet ni transformation instantanée, ni résultat médical, ni programme générique.

**Question affichée**

> Pour chaque ligne, choisissez `Correct` ou écrivez une correction. Ensuite, ajoutez **un seul point indispensable** qui manquerait encore. S’il n’en manque aucun, écrivez `Rien à ajouter`.

**Couverture** : validation consolidée de `business.activity`, `brand.story`, `brand.difference`, `brand.values`, `final.open`.

---

## Gate avant création de la RC4

- [x] Jonathan a approuvé les dix cartes le 2026-08-24.
- [x] Chaque préremplissage client a passé le contrôle de confidentialité du paquet machine.
- [x] Les choix proposés correspondent au périmètre éditorial approuvé au moment de l’envoi.
- [x] Le payload machine est compilé avec le catalogue `brand-business@2.0.0` et le compilateur `1.5.0`.
- [x] Le dry-run réel reproduit exactement les dix cartes, les choix bornés et les préremplissages de cette spécification.
- [x] Jonathan a explicitement autorisé la création de la RC4 le 2026-08-24.
- [x] Le lien et le code sont remis à Jonathan dans le canal local contrôlé ; aucun envoi client n’a été effectué.
- [ ] Aucun lien n’est envoyé au client sans intention explicite sur la cible et l’artefact.
