import { CREATURES } from "../../consts/staticConsts";

export const creatureOptions = CREATURES.map((creature) => (
    <option key={creature.name} value={creature.name}>
      {creature.label}
    </option>
  ));