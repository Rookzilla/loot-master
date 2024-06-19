import React from "react";
import { 
  CREATURES,
  CHALLENGE_RATINGS,
} from "../../consts/staticConsts";
import { Creature } from "../../inputMenu/inputCard/inputCard.types";

export const creatureOptions = CREATURES.map((creature: Creature) => (
  <option key={creature.name} value={creature.name}>
    {creature.label}
  </option>
));


export const challengeRatingOptions = CHALLENGE_RATINGS.map((cr) => (
    <option key={cr.name} value={cr.value}>
      {cr.name}
    </option>
))