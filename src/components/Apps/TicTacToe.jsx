import React, { useState } from "react";

const TicTacToe = ({ isMaximized }) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
      [0, 4, 8], [2, 4, 6]             // diagonals
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(board);
  const isDraw = !winner && board.every((square) => square !== null);

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div 
      className={`flex flex-col items-center justify-center h-full w-full bg-[#c0c0c0] ${isMaximized ? "pb-20" : ""}`}
      style={{ fontFamily: "'MS Sans Serif', sans-serif", userSelect: "none" }}
    >
      <div 
        className="p-4 bg-[#c0c0c0] flex flex-col items-center"
        style={{ borderTop: "2px solid #fff", borderLeft: "2px solid #fff", borderRight: "2px solid #808080", borderBottom: "2px solid #808080" }}
      >
        <h2 className="text-xl font-bold mb-4">Tic Tac Toe</h2>
        
        <div className="mb-4 h-6 text-lg font-bold">
          {winner ? (
            <span className="text-red-700">Winner: {winner}!</span>
          ) : isDraw ? (
            <span>It's a Draw!</span>
          ) : (
            <span>Next Player: {isXNext ? "X" : "O"}</span>
          )}
        </div>

        <div className="grid grid-cols-3 gap-1 mb-6 bg-[#808080] p-1" style={{ border: "2px solid #808080", borderRight: "2px solid #fff", borderBottom: "2px solid #fff" }}>
          {board.map((cell, index) => (
            <button
              key={index}
              onClick={() => handleClick(index)}
              className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center text-4xl font-bold bg-[#c0c0c0] active:scale-[0.98]"
              style={{
                borderTop: "2px solid #fff",
                borderLeft: "2px solid #fff",
                borderRight: "2px solid #808080",
                borderBottom: "2px solid #808080",
                color: cell === "X" ? "blue" : cell === "O" ? "red" : "black"
              }}
            >
              {cell}
            </button>
          ))}
        </div>

        <button 
          onClick={resetGame}
          className="px-6 py-1 font-bold bg-[#c0c0c0] active:scale-95"
          style={{ borderTop: "2px solid #fff", borderLeft: "2px solid #fff", borderRight: "2px solid #808080", borderBottom: "2px solid #808080" }}
        >
          Restart Game
        </button>
      </div>
    </div>
  );
};

export default TicTacToe;
