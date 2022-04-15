import { sprinkles, Sprinkles } from "./sprinkles.css";

interface BaseProps {
  as?: "div" | "dl" | "dd" | "ul" | "ol";
  gap?: Sprinkles["gap"];
  align?: Sprinkles["alignItems"];
  children: React.ReactNode;
}

interface ControlledProps extends BaseProps {
  wrap?: never;
  direction?: Sprinkles["flexDirection"];
}
interface UnControlledProps extends BaseProps {
  wrap?: Sprinkles["flexWrap"];
  direction?: never;
}

type Props = UnControlledProps | ControlledProps;
const Stack: React.FC<Props> = (props) => {
  const { as = "div", gap, direction, align, wrap, children } = props;
  const TAG = as;
  const hasStyle = gap || direction || align;

  return (
    <TAG
      className={
        hasStyle &&
        sprinkles({
          display: "flex",
          flexDirection: direction ?? undefined,
          gap: gap ?? undefined,
          alignItems: align ?? undefined,
          flexWrap: wrap,
        })
      }
    >
      {children}
    </TAG>
  );
};

export default Stack;
