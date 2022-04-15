import { sprinkles, Sprinkles } from "./sprinkles.css";

interface Props {
  w?: Sprinkles["width"];
  h?: Sprinkles["height"];
  maxW?: Sprinkles["width"];
  maxH?: Sprinkles["height"];
  children: React.ReactNode;
}
const Frame: React.FC<Props> = (props) => {
  const { w, h, maxW, maxH, children } = props;
  return (
    <div
      className={sprinkles({
        width: w ?? undefined,
        maxWidth: maxW ?? undefined,
        height: h ?? undefined,
        maxHeight: maxH ?? undefined,
      })}
    >
      {children}
    </div>
  );
};

export default Frame;
