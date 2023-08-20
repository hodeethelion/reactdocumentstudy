import { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  


  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  const handleClick = (i) => {
    // 복사하기
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  return (
    <div>
      <div>
        <div className="status text-center font-thin">{status}</div>
        <div className="board-row flex">
          <Square
            value={squares[0]}
            id={0}
            onSquareClick={() => handleClick(0)}
          />
          <Square
            value={squares[1]}
            id={1}
            onSquareClick={() => handleClick(1)}
          />
          <Square
            value={squares[2]}
            id={2}
            onSquareClick={() => handleClick(2)}
          />
        </div>
        <div className="board-row flex">
          <Square
            value={squares[3]}
            id={3}
            onSquareClick={() => handleClick(3)}
          />
          <Square
            value={squares[4]}
            id={4}
            onSquareClick={() => handleClick(4)}
          />
          <Square
            value={squares[5]}
            id={5}
            onSquareClick={() => handleClick(5)}
          />
        </div>
        <div className="board-row flex">
          <Square
            value={squares[6]}
            id={6}
            onSquareClick={() => handleClick(6)}
          />
          <Square
            value={squares[7]}
            id={7}
            onSquareClick={() => handleClick(7)}
          />
          <Square
            value={squares[8]}
            id={8}
            onSquareClick={() => handleClick(8)}
          />
        </div>
      </div>
    </div>
  );
};

export default Board;
