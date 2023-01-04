import "./Info.css";

function Info({ numDiscs, numMoves, incrementDiscs, decrementDiscs }) {
  return (
    <div className="Info">
      <div className="DiscCounter">
        <h1 className="DiscCount">{numDiscs}</h1>
        <div className="ButtonContainer">
          <button className="Button" onClick={() => incrementDiscs()}>
            +
          </button>
          <button className="Button" onClick={() => decrementDiscs()}>
            -
          </button>
        </div>
      </div>
      <h1 className="MoveCounter">{`${numMoves} Move(s)`}</h1>
    </div>
  );
}

export default Info;
