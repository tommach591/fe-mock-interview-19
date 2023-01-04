import "./Pole.css";
import Block from "../Block";
import { useDrop } from "react-dnd";

function Pole({ blocks, index, popAndPush }) {
  // eslint-disable-next-line no-unused-vars
  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: "BLOCK",
      drop: (monitor) => {
        popAndPush(monitor.poleIndex, index);
      },
    }),
    [index, popAndPush]
  );

  return (
    <div className="Pole" ref={drop}>
      <div className="Stick" />
      <div className="Blocks">
        {blocks.map((value, i) => {
          return <Block key={i} value={value} poleIndex={index} />;
        })}
      </div>
    </div>
  );
}

export default Pole;
