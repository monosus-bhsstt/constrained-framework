import React, { useRef } from "react";
import { sprinkles, Sprinkles } from "./sprinkles.css";
interface Props {
  bg?: Sprinkles["background"];
  curve?: Sprinkles["borderRadius"];
  px?: Sprinkles["paddingX"];
  py?: Sprinkles["paddingY"];
  children: React.ReactNode;
  fill?: boolean;
  parent?: string;
  TAG?: string;
}
const Coat: React.FC<Props> = (props) => {
  const { children, bg, curve, fill, px, py, parent } = props;
  // const parent = useRef(null).current.parentElement.nodeName
  console.log(parent);
  return (
    <div
      className={sprinkles({
        borderRadius: curve ?? undefined,
        background: bg ?? undefined,
        height: fill ? "full" : undefined,
        paddingX: px ?? undefined,
        paddingY: py ?? undefined,
      })}
      // ref={div}
    >
      {children}
    </div>
  );
};

export default Coat;
