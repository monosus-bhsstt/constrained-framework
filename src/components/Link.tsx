import React from "react";
import { sprinkles, Sprinkles } from "./link.css";

interface LinkProps {
  to: string;
  children: React.ReactElement;
  fill?: boolean;
  as?: "a" | "button";
}

interface LinkFillProps {
  place?: Sprinkles["placeItems"];
}

const Link: React.FC<LinkProps & LinkFillProps> = (props) => {
  const { as = "a", to, fill = false, place, children } = props;
  const TAG = as;
  const ChildrenWithProps = React.cloneElement(children, { parent: as });
  return (
    <TAG
      href={to}
      className={sprinkles({
        display: fill || place ? "grid" : undefined,
        placeItems: place ?? undefined,
      })}
    >
      {ChildrenWithProps}
    </TAG>
  );
};

export default Link;
