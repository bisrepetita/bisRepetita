---
project: bisrepetita
status: needs_review
sources:
  - "direct:user-response:2026-07-30"
  - "direct:onboarding-db:bisrepetita-r4:submission-v1"
validated_by: "pending DB import review by Jonathan Vouilloz"
validated_on: null
review_due: "2027-01-30"
received_on: "2026-08-31"
source_kind: direct_user_response
---

# Réponses — Bis Repetita

## Verbatim conservé

> « Nicolas est le fondateur principal seul et il emploie des coachs/entraineurs, je n'ai malheureusement pas les noms de toute l'équipe, cela fera parti des choses que je devrais lui demander en plus. »

> « les preuves sont toutes ok et utilisables »

> « oui pour offre voxe femme »

> « ceux qu'on a mis sur le site pour l'instant les données sont juste et bien suivies, nicolas m'a vérifié et validé »

## Arbitrages enregistrés au 30 juillet 2026 — historique

Ces arbitrages sont conservés comme source antérieure. Les décisions contraires de la RC4 ci-dessous les remplacent pour les dérivés actuels.

- Les CGV live sont la source de l'identité légale et du siège.
- Les coordonnées du footer et l'adresse de La Voie-Creuse sont les contacts opérationnels du studio.
- Nicolas de Boccard est le fondateur principal, le porte-parole et le valideur métier.
- La réponse utilisateur relaie une validation générale de Nicolas sur les données et claims publiés. Cette validation est une source métier, pas une autorisation opérationnelle illimitée :
  - les faits biographiques peuvent être repris dans leur portée publiée exacte ;
  - `100+` et `98 %` restent bloqués en nouveau contenu tant que date, périmètre, dénominateur et méthode ne sont pas documentés ;
  - `10K+` reste interdit tant que la métrique n'est pas définie ;
  - le document final et toute délégation de signature restent à faire valider.
- L'offre Boxe Femme et sa formulation actuelle sont validées.
- Le roster complet des coachs reste à obtenir ; aucune identité ne doit être inventée.

## Soumission RC4 — Nicolas de Boccard

### Provenance

- Source : extraction en lecture seule du schéma `onboarding`, autorisée par Jonathan le 7 septembre 2026.
- Projet : `70135d26-ac4b-4ea4-9dd5-6acc0887acaa` (`bisrepetita-r4`, révision 4).
- Session : `ad13f5e8-a1f0-473a-9511-38dab57fbc11`.
- Questionnaire : `2.0.0+compiler.1.5.0`, 10 questions.
- Soumission : version 1, le `2026-08-31T20:25:17.160Z`.
- État vérifié : `completed`, progression 100 %, `canSubmit: true`, aucune question manquante.
- Cohérence : les réponses courantes correspondent exactement au dernier snapshot soumis.
- Pièces jointes : 0. Feedback : 0.
- Empreinte SHA-256 du snapshot JSON canonique de l'extraction : `9f7a09495db369c14e5e086c8742502a5b114ff49c09a5c2e3c0f5bb237bc7b5`. Contrat : UTF-8, JSON minifié, clés d'objets triées, champs racine `completedAt`, `projectId`, `questionnaireVersion`, `responses`, `revision`, `sessionId`, `submissionVersion`, `submittedAt`.
- Effet canonique automatique : aucun. Import en attente de revue.

### Dictionnaire des champs et choix figés

Ce dictionnaire provient de la définition `2.0.0+compiler.1.5.0`. Il rend les valeurs techniques ci-dessous interprétables sans dépendre de l'application :

- `br2-01` : `priority1` = priorité 1 ; `priority2` = priorité 2 ; `doNotPromote` = format à ne pas promouvoir ; `small-group` = Small Group ; `round-by-round` = Round by Round ; `competiteurs` = préparation de compétiteurs. Les champs `priority1Reason` et `priority2Reason` donnent les motifs.
- `br2-02` : `roundCoachCount` = nombre de coachs (`one` = 1 coach) ; `roundDuration` = durée (`50` = 50 minutes) ; `smallGroupCapacity` = capacité (`other` = autre, précisé dans `smallGroupCapacityOther`) ; `contactFormats` = formats avec contact ; `contactRule` = règle générale (`varies` = cela dépend du format).
- `br2-03` : `publicTeam` = personnes proposées pour l'équipe publique. La définition demandait aussi rôle, qualification, offres et autorisation par personne ; leur absence reste visible dans la réponse.
- `br2-04` : `newVisitor` = particulier qui découvre le studio ; `knownFormat` = personne connaissant déjà son format ; `roundByRound` = cours Round by Round ; `corporate` = entreprise. `first-session` = première séance ; `booking` = réservation directe ; `quote` = demande de devis.
- `br2-05` : `recentSession` = 3 à 5 moments d'une séance récente représentative.
- `br2-06` : `phrase1` = « Une boxe technique, exigeante et accessible. » ; `phrase2` = « Technique avant intensité. » ; `phrase3` = « La confiance suit, pas l'inverse. » ; `phrase4` = « Pas de programme générique recyclé. » ; `phrase5` = « Le rythme s'adapte au souffle et à la coordination du jour. ». `as-is` = « Je le dirais comme ça » ; `remove` = « À retirer » ; `rewrites` = réécritures demandées ; `realPhrase` = phrase réellement employée par Nicolas.
- `br2-07` : les champs `metric100*`, `metric98*` et `metric10k*` concernent respectivement `100+`, `98 %` et `10K+` ; `remove` = « Retirer » ; `*Evidence` = documentation éventuelle.
- `br2-08` : `noContact` = formats explicitement sans contact ; `contactLearning` = apprentissage avec contact ; `sparring` = conditions du sparring ; `minors` = mineurs/offre junior ; `benefits` = bénéfices physiques ou mentaux ; `validator` = personne qui valide ces règles.
- `br2-09` : `signature` = droit de signature (`per-text` = oui, après validation de chaque texte) ; `signatureFormats` = formats concernés ; `validationChannel` = mode de validation (`document` = commentaires dans le document) ; `finalApprover` = accord final.
- `br2-10` : `activity` = « Bis Repetita est un studio genevois de boxe anglaise sur mesure. » ; `positioning` = « Le positionnement repose sur la progression technique, l'adaptation individuelle et un cadre premium sobre, sans élitisme. » ; `audiences` = « Les publics documentés vont des débutants aux pratiquants exigeants, avec des formats privés, petits groupes, collectifs, Boxe Femme, compétiteurs et Corporate. » ; `promises` = « La marque ne promet ni transformation instantanée, ni résultat médical, ni programme générique. » ; `missingPoint` demande le dernier point indispensable éventuel.

### `br2-01` — Les deux priorités des 12 prochains mois

**Question.** Les formats actuellement documentés sont : Solo, Duo, Trio, Small Group, Round by Round, Boxe Femme, préparation de compétiteurs, domicile et Corporate.

Choisissez au maximum deux formats à développer en priorité dans les 12 prochains mois. Classez-les 1 et 2. Puis indiquez, s’il y en a un, le format que vous ne souhaitez pas mettre en avant pour l’instant.

**Statut :** `answered`

```json
{
  "priority1": "small-group",
  "priority2": "round-by-round",
  "doNotPromote": "competiteurs",
  "priority1Reason": "Le plus rentable à l'heure et le plus stable",
  "priority2Reason": "Également rentable"
}
```

### `br2-02` — Les détails pratiques à trancher

**Question.** Les sources actuelles se contredisent ou restent incomplètes sur les points suivants. Corrigez uniquement ces lignes. Si une règle dépend du format ou de la séance, écrivez précisément de quoi elle dépend. « Je ne sais pas encore » est accepté ligne par ligne ; la donnée restera alors non publiable.

**Statut :** `answered`

```json
{
  "contactRule": "varies",
  "roundDuration": "50",
  "contactFormats": "Small groupe, trio, duo, individuel",
  "roundCoachRule": "Sans objet",
  "roundCoachCount": "one",
  "roundDurationOther": "Sans objet",
  "smallGroupCapacity": "other",
  "smallGroupCapacityOther": "De 4 à 8"
}
```

### `br2-03` — L’équipe réellement active et publiable

**Question.** Nicolas de Boccard est documenté comme fondateur et Head Coach. Aucun autre coach ne sera nommé sans information confirmée.

Ajoutez uniquement les personnes qui travaillent actuellement pour Bis Repetita et qui peuvent apparaître publiquement. Pour chaque personne : nom, rôle exact, qualification utile à publier, offres concernées et autorisation de publication. Si Nicolas doit rester la seule personne nommée, écrivez « Aucune autre personne à publier ».

**Statut :** `answered`

```json
{
  "publicTeam": "Jeremy - coach de boxe\nLionel - coach de boxe\nEliza - coach fitness femme"
}
```

### `br2-04` — La première étape proposée au client

**Question.** Les contenus actuels utilisent plusieurs prochaines étapes : première séance, bilan initial, réservation directe et devis Corporate. Pour chaque situation, choisissez une seule prochaine étape par défaut.

**Statut :** `answered`

```json
{
  "corporate": "quote",
  "newVisitor": "first-session",
  "knownFormat": "booking",
  "otherDetails": "Rien à ajouter",
  "roundByRound": "booking"
}
```

### `br2-05` — Une séance représentative, pas toute la méthode

**Question.** Le système propose « technique avant intensité » et « adaptation réelle », mais il manque une scène directe de Nicolas qui montre comment cela se passe.

Pensez à un client récent et à une séance récente représentative. Décrivez 3 à 5 moments dans l’ordre : ce que vous avez observé, ce que vous avez fait travailler, ce que vous avez corrigé ou adapté, puis ce qui vous a fait décider de cette adaptation. Il ne s’agit pas de décrire tout votre métier. Un seul exemple suffit. Si aucun exemple récent ne vous vient, écrivez « Aucun exemple récent ».

**Statut :** `answered`

```json
{
  "recentSession": " Nous commençons par échanger avec le client sur ses objectifs, son passé sportif, son activité actuelle et ses éventuelles blessures ou limitations. L’échauffement nous permet ensuite d’observer ses capacités et d’adapter la séance. Le contenu est construit en fonction de ces éléments : apprentissage et travail technique de la boxe, renforcement musculaire, cardio ou travail plus intense pour se dépenser. Les coachs ajustent la place de chacun de ces éléments selon les objectifs, les capacités et l’état du client le jour de la séance. "
}
```

### `br2-06` — Les formulations qui ressemblent vraiment à Nicolas

**Question.** Pour chaque phrase, choisissez : « Je le dirais comme ça », « L’idée est juste, mais pas les mots », ou « À retirer ». Réécrivez uniquement les phrases classées « pas les mots ».

**Statut :** `answered`

```json
{
  "phrase1": "as-is",
  "phrase2": "remove",
  "phrase3": "as-is",
  "phrase4": "as-is",
  "phrase5": "as-is",
  "rewrites": "Rien à corriger",
  "realPhrase": "Nous mettons la boxe au service de vos objectifs"
}
```

### `br2-07` — Les trois métriques à documenter ou retirer

**Question.** 100+, 98 % et 10K+ apparaissent dans les sources, mais leur méthode ou leur sens n’est pas assez documenté pour de nouveaux contenus. Pour chaque métrique, choisissez « Documenter », « Retirer » ou « Je ne sais pas ». Si vous choisissez « Documenter », donnez uniquement les informations demandées. Une métrique inconnue ou incomplète restera bloquée à la publication.

**Statut :** `answered`

```json
{
  "metric98Decision": "remove",
  "metric98Evidence": "Sans objet",
  "metric100Decision": "remove",
  "metric100Evidence": "Sans objet",
  "metric10kDecision": "remove",
  "metric10kEvidence": "Sans objet"
}
```

### `br2-08` — Les limites à publier sur la sécurité et le contact

**Question.** Bis Repetita propose des formats sans contact et des formats pouvant concerner la préparation de compétiteurs. Les bénéfices physiques ou mentaux ne doivent pas devenir des garanties médicales. Pour chaque ligne, indiquez la règle publiable et nommez la personne qui valide cette règle. « À confirmer » est accepté.

**Statut :** `answered`

```json
{
  "minors": "Toute éventuelle séance destinée à un mineur est organisée dans un cadre adapté à son âge et à son niveau, avec l’autorisation préalable de son représentant légal. Le contenu, l’intensité et les exercices sont adaptés au mineur et encadrés par un coach qualifié. Aucun sparring n’est organisé pour un mineur sans cadre spécifique, protections adaptées et autorisations nécessaires.",
  "benefits": "Nous pouvons présenter la boxe et l’activité physique comme pouvant contribuer à améliorer la condition physique, l’endurance, la coordination, la force, la mobilité, la confiance en soi ou procurer une sensation de bien-être et de défoulement. Ces bénéfices sont présentés comme potentiels et variables selon les personnes. Nous ne promettons aucun résultat garanti et n’utilisons aucune formulation laissant entendre que la boxe soigne, guérit ou remplace un traitement médical ou psychologique. Les communications concernant la santé physique ou mentale restent générales et ne constituent pas un avis médical.",
  "sparring": "Lorsqu’un travail d’opposition ou de sparring est organisé dans un cadre spécifique, il est réservé aux pratiquants ayant le niveau et la préparation nécessaires, après validation du coach. Il nécessite le consentement explicite des participants et un encadrement direct. L’intensité, les protections et les règles sont définies par le coach.",
  "noContact": "Les cours collectifs « Round by Round », les séances de préparation physique, le travail technique sans opposition, le shadow boxing, le travail aux pattes d’ours et au sac sont proposés sans échange de coups entre participants. Aucun contact physique entre pratiquants n’est nécessaire dans ces formats.",
  "validator": "Nicolas de Boccard",
  "contactLearning": "Certains exercices pédagogiques peuvent comporter un contact léger et contrôlé lorsqu’il est utile à l’apprentissage de la boxe. Ils sont réalisés uniquement avec l’accord des participants, sous la supervision directe d’un coach qualifié, avec des consignes précises et une intensité adaptée au niveau de chacun. Le participant peut refuser ou interrompre l’exercice à tout moment."
}
```

### `br2-09` — Signature et validation finale

**Question.** Par défaut, les nouveaux contenus restent signés « Équipe Bis Repetita ». Les documents de marque sont provisoires tant que Nicolas ne les a pas relus.

**Statut :** `answered`

```json
{
  "signature": "per-text",
  "finalApprover": "Nicolas uniquement",
  "signatureFormats": "Sans objet",
  "validationChannel": "document"
}
```

### `br2-10` — Validation du résumé connu

**Question.** Pour chaque ligne, écrivez « Correct » ou une correction. Ensuite, ajoutez un seul point indispensable qui manquerait encore. S’il n’en manque aucun, écrivez « Rien à ajouter ».

**Statut :** `answered`

```json
{
  "activity": "Correct",
  "promises": "Correct",
  "audiences": "Correct",
  "positioning": "Correct",
  "missingPoint": "Rien à ajouter"
}
```
