import { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  console.log('Board: ', squares)

  const handleClick = (i) => {
    // 복사하기
    const nextSquares = squares.slice();
    console.log(nextSquares);
    nextSquares[i] = 'X';
    setSquares(nextSquares)
    console.log('square changing into', squares)
  }

  return (
    <div>
      <div>
        <div className="board-row flex">
          <Square value={squares[0]} id={0} onSquareClick={()=> handleClick(0)}/>
          <Square value={squares[1]} id={1}/>
          <Square value={squares[2]} id={2}/>
        </div>
        <div className="board-row flex">
          <Square value={squares[3]} id={3}/>
          <Square value={squares[4]} id={4}/>
          <Square value={squares[5]} id={5}/>
        </div>
        <div className="board-row flex">
          <Square value={squares[6]} id={6}/>
          <Square value={squares[7]} id={7}/>
          <Square value={squares[8]} id={8}/>
        </div>
      </div>
    </div>
  );
};

export default Board;
