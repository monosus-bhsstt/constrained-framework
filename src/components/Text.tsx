import { sprinkles, Sprinkles } from "./sprinkles.css";

interface IProps {
  as?: "p" | "span" | "small" | "mark";
  color?: Sprinkles["color"];
  size?: Sprinkles["fontSize"];
  children: JSX.Element | string;
  lh?: "normal" | "relax" | "loose" | "tighter";
}
const Text = (props: IProps) => {
  const { as = "p", children, size, color, lh } = props;
  const hasStyle = size || color || lh;
  const TAG = as;
  return (
    <TAG
      className={
        hasStyle &&
        sprinkles({
          color: color ?? undefined,
          fontSize: size ?? undefined,
          lineHeight: lh ?? undefined,
        })
      }
    >
      {children}
    </TAG>
  );
};

export default Text;
