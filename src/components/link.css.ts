import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { conditions, defaultCondition } from "../styles/condition";

const linkProperties = defineProperties({
  conditions: conditions.responsive,
  defaultCondition: defaultCondition,
  properties: {
    display: ["grid", "inline"],
    placeItems: ["start", "end", "center", "stretch"],
  },
});

export const sprinkles = createSprinkles(linkProperties);

// It's a good idea to export the Sprinkles type too
export type Sprinkles = Parameters<typeof sprinkles>[0];
