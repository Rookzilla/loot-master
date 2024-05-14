import { CREATURES, CHALLENGE_RATINGS } from "../../consts/staticConsts";

export const creatureOptions = CREATURES.map((creature) => (
    <option key={creature.name} value={creature.name}>
      {creature.label}
    </option>
  ));

export const challengeRatingOptions = CHALLENGE_RATINGS.map((cr) => (
    <option key={cr.name} value={cr.value}>
      {cr.name}
    </option>
))