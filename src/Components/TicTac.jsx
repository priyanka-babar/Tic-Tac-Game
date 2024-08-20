import React, { useState } from "react";

export default function TicTac() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTure, setisXTure] = useState();
  const [winner, setWinner] = useState(null);
  const renderSquare = (index) => {
    return (
      <button className="square" onClick={() => handleclick(index)}>
        {board[index]}
      </button>
    );
  };
  const handleclick = (index) => {
    if (board[index] != null) {
      return;
    }
    console.log(index, "click");
    const newBoard = [...board];
    newBoard[index] = isXTure ? "x" : "o";
    setBoard(newBoard);
    setisXTure(!isXTure);
    const winnercombination = checkWinner(newBoard);
    if (winnercombination) {
      setWinner(newBoard[winnercombination[0]]);
    }
  };
  const checkWinner = (newBoard) => {
    const combination = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < combination.length; i++) {
      const [a, b, c] = combination[i];
      if (board[a] === board[b] && board[b] === board[c]) {
        return combination[i];
      }
    }
    return null;
  };
  return (
    <>
      <div className="board">
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>

        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>

        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>

      {winner && <div>{winner}is winner of this game.</div>}
    </>
  );
}
