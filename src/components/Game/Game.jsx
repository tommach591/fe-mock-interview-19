import "./Game.css";
import { useCallback, useEffect, useState } from "react";
import Pole from "../Pole";

function Game({ numDiscs, numMoves, setNumMoves }) {
  const [poles, setPoles] = useState([[], [], []]);

  useEffect(() => {
    if (poles[2].length === numDiscs) alert("You win!");
  }, [poles, numDiscs]);

  useEffect(() => {
    setPoles([[...Array(numDiscs).keys()].reverse(), [], []]);
  }, [numDiscs]);

  const popAndPush = useCallback(
    (i, j) => {
      if (i === j) return;

      let temp = JSON.parse(JSON.stringify(poles));
      let removed = temp[i].pop();

      if (temp[j][temp[j].length - 1] < removed) return;
      temp[j].push(removed);
      setPoles(temp);
      setNumMoves(numMoves + 1);
    },
    [poles, numMoves, setNumMoves]
  );

  return (
    <div className="Game">
      <Pole blocks={poles[0]} index={0} popAndPush={popAndPush} />
      <Pole blocks={poles[1]} index={1} popAndPush={popAndPush} />
      <Pole blocks={poles[2]} index={2} popAndPush={popAndPush} />
    </div>
  );
}

export default Game;
