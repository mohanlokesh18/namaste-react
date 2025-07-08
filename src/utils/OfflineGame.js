import React, { useState } from "react";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [player, setPlayer] = useState("X");
  const [status, setStatus] = useState("Player X's Turn");
  const [gameOver, setGameOver] = useState(false);

  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // columns
    [0, 4, 8],
    [2, 4, 6], // diagonals
  ];

  const checkWin = (newBoard) => {
    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (
        newBoard[a] &&
        newBoard[a] === newBoard[b] &&
        newBoard[a] === newBoard[c]
      ) {
        return true;
      }
    }
    return false;
  };

  const handleClick = (index) => {
    if (board[index] || gameOver) return;

    const newBoard = [...board];
    newBoard[index] = player;
    setBoard(newBoard);

    if (checkWin(newBoard)) {
      setStatus(`Player ${player} Wins!`);
      setGameOver(true);
    } else if (newBoard.every((cell) => cell)) {
      setStatus("It's a Draw!");
      setGameOver(true);
    } else {
      const nextPlayer = player === "X" ? "O" : "X";
      setPlayer(nextPlayer);
      setStatus(`Player ${nextPlayer}'s Turn`);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(""));
    setPlayer("X");
    setStatus("Player X's Turn");
    setGameOver(false);
  };

  return (
    <div className="tictactoe-container">
      <h1>Tic Tac Toe</h1>
      <div className="board">
        {board.map((cell, index) => (
          <div className="cell" key={index} onClick={() => handleClick(index)}>
            {cell}
          </div>
        ))}
      </div>
      <h2>{status}</h2>
      <button onClick={resetGame}>Reset</button>
    </div>
  );
};

export default TicTacToe;
