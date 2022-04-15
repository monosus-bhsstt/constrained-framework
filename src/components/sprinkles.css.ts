import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { conditions, defaultCondition } from "../styles/condition";
const space = {
  none: 0,
  small: "4px",
  medium: "8px",
  large: "16px",
  // etc.
};
const gap = {
  none: 0,
  small: "10px",
  medium: "20px",
  large: "40px",
  // etc.
};

const responsiveProperties = defineProperties({
  conditions: conditions.responsive,
  defaultCondition: defaultCondition,
  properties: {
    display: ["none", "flex", "block", "inline"],
    flexDirection: ["row", "column"],
    justifyContent: [
      "stretch",
      "flex-start",
      "center",
      "flex-end",
      "space-around",
      "space-between",
    ],
    alignItems: ["stretch", "flex-start", "center", "flex-end"],
    flexWrap: ["wrap", "nowrap"],
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    gap: gap,
    // etc.
  },
  shorthands: {
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    placeItems: ["justifyContent", "alignItems"],
  },
});

const colors = {
  primary: "#ff0000",
  secondary: "#0000ff",
  // etc.
};

const fz = {
  l: "24px",
  m: "16px",
  s: "12px",
};
const lh = {
  normal: 1.5,
  relax: 1.8,
  loose: 2.2,
  tighter: 1.2,
};

const colorProperties = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: { "@media": "(prefers-color-scheme: dark)" },
    mobile: {},
    tablet: { "@media": "screen and (min-width: 768px)" },
    desktop: { "@media": "screen and (min-width: 1024px)" },
  },
  defaultCondition: "lightMode",
  properties: {
    color: colors,
    background: colors,
    fontSize: fz,
    lineHeight: lh,
    // etc.
  },
});

const width = {
  "1/2": "50%",
  "1/3": "33.3%",
  "1/4": "25%",
  "1/5": "20%",
  600: "600px",
  400: "400px",
};
const height = {
  full: "100%",
  "1/2": "50%",
  "1/3": "33.3%",
  "1/4": "25%",
  "1/5": "20%",
  600: "600px",
  400: "400px",
};

const curve = {
  circle: "50%",
  narrow: "20px",
  tight: "50px",
  button: "14px",
};

const frameProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { "@media": "screen and (min-width: 768px)" },
    desktop: { "@media": "screen and (min-width: 1024px)" },
  },
  defaultCondition: "mobile",
  properties: {
    width: width,
    height: height,
    maxWidth: width,
    maxHeight: height,
    borderRadius: curve,
    // etc.
  },
});

export const sprinkles = createSprinkles(
  responsiveProperties,
  colorProperties,
  frameProperties
);

// It's a good idea to export the Sprinkles type too
export type Sprinkles = Parameters<typeof sprinkles>[0];
