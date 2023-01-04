import "./Block.css";
import { useDrag } from "react-dnd";

function Block({ value, poleIndex }) {
  const color = [
    "red",
    "orange",
    "yellow",
    "greenyellow",
    "green",
    "blue",
    "violet",
    "purple",
  ];

  // eslint-disable-next-line no-unused-vars
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: "BLOCK",
      item: { poleIndex: poleIndex },
    }),
    [poleIndex]
  );

  return (
    <div
      className="Block"
      style={{ width: `${value + 3}rem`, background: color[value] }}
      ref={drag}
    />
  );
}

export default Block;
