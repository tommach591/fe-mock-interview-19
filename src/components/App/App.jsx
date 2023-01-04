import "./App.css";
import { useState, useCallback } from "react";
import Info from "../Info";
import Game from "../Game";

function App() {
  const [numDiscs, setNumDiscs] = useState(3);
  const [numMoves, setNumMoves] = useState(0);

  const incrementDiscs = useCallback(() => {
    if (numDiscs < 8) {
      setNumDiscs(numDiscs + 1);
      setNumMoves(0);
    }
  }, [numDiscs, setNumDiscs]);

  const decrementDiscs = useCallback(() => {
    if (numDiscs > 3) {
      setNumDiscs(numDiscs - 1);
      setNumMoves(0);
    }
  }, [numDiscs, setNumDiscs]);

  return (
    <div className="App">
      <Info
        numDiscs={numDiscs}
        numMoves={numMoves}
        incrementDiscs={incrementDiscs}
        decrementDiscs={decrementDiscs}
      />
      <Game numDiscs={numDiscs} numMoves={numMoves} setNumMoves={setNumMoves} />
    </div>
  );
}

export default App;
