import React, { useState, useEffect } from "react";

const TicTacToe = ({ isMaximized }) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMsg, setPopupMsg] = useState("");

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
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

  useEffect(() => {
    if (winner) {
      setPopupMsg(winner === "X" ? "🎉 You Won! So cute! 💖" : "🤖 The Bot won! Try again! 💫");
      setShowPopup(true);
    } else if (isDraw) {
      setPopupMsg("🤝 It's a Draw! How fun! ✨");
      setShowPopup(true);
    }
  }, [winner, isDraw]);

  useEffect(() => {
    if (!isXNext && !winner && !isDraw) {
      // Bot's turn
      const timer = setTimeout(() => {
        makeBotMove();
      }, 500); // slight delay for realism
      return () => clearTimeout(timer);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isXNext, winner, isDraw, board]);

  const makeBotMove = () => {
    const available = board.map((sq, i) => (sq === null ? i : null)).filter(v => v !== null);
    if (available.length === 0) return;

    // Helper to find winning/blocking move
    const findWinningMove = (player) => {
      const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (board[a] === player && board[b] === player && board[c] === null) return c;
        if (board[a] === player && board[c] === player && board[b] === null) return b;
        if (board[b] === player && board[c] === player && board[a] === null) return a;
      }
      return null;
    };

    let move = findWinningMove("O"); // Try to win
    if (move === null) move = findWinningMove("X"); // Try to block
    if (move === null) move = available[Math.floor(Math.random() * available.length)]; // Random

    const newBoard = [...board];
    newBoard[move] = "O";
    setBoard(newBoard);
    setIsXNext(true);
  };

  const handleClick = (index) => {
    if (board[index] || winner || !isXNext) return;

    const newBoard = [...board];
    newBoard[index] = "X";
    setBoard(newBoard);
    setIsXNext(false);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setShowPopup(false);
  };

  return (
    <div 
      className={`relative flex flex-col items-center justify-center h-full w-full overflow-y-auto px-4 py-8 ${isMaximized ? "pb-20" : ""}`}
      style={{ background: "var(--color-window-content)", color: "var(--color-text-dark)", fontFamily: "'MS Sans Serif', sans-serif", userSelect: "none" }}
    >
      <h2 
        className="text-[28px] font-extrabold mb-2 text-center"
        style={{ color: "var(--color-text-dark)" }}
      >
        Tic Tac Toe
      </h2>
      <h3
        className="text-xl font-bold mb-6 text-center"
        style={{ color: "var(--color-accent)" }}
      >
        Play against the Bot!
      </h3>
      
      <div className="mb-4 h-6 text-base font-bold uppercase" style={{ color: "var(--color-text-dark)" }}>
        <span>{isXNext ? "Your Turn (X)" : "Bot is thinking... (O)"}</span>
      </div>

      <div 
        className="grid grid-cols-3 gap-1 mb-8 p-1" 
        style={{ 
          background: "var(--color-btn-face)", 
          borderTop: "2px solid var(--color-border-dark)", 
          borderLeft: "2px solid var(--color-border-dark)", 
          borderRight: "2px solid #fff", 
          borderBottom: "2px solid #fff" 
        }}
      >
        {board.map((cell, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center text-5xl font-bold hover:opacity-90 active:scale-[0.98] transition-all"
            style={{
              background: "var(--color-window-content)",
              borderTop: "2px solid #fff",
              borderLeft: "2px solid #fff",
              borderRight: "2px solid var(--color-border-dark)",
              borderBottom: "2px solid var(--color-border-dark)",
              color: cell === "X" ? "var(--color-accent)" : cell === "O" ? "var(--color-btn-face)" : "transparent"
            }}
          >
            {cell}
          </button>
        ))}
      </div>

      <button 
        onClick={resetGame}
        className="px-6 py-2 text-sm uppercase font-bold hover:opacity-90 active:scale-95 transition-all"
        style={{ 
          background: "var(--color-btn-face)",
          color: "var(--color-text-light)",
          borderTop: "2px solid #fff", 
          borderLeft: "2px solid #fff", 
          borderRight: "2px solid var(--color-border-dark)", 
          borderBottom: "2px solid var(--color-border-dark)" 
        }}
      >
        Restart Game
      </button>

      {/* Cute Popup Modal */}
      {showPopup && (
        <div className="absolute inset-0 flex items-center justify-center z-50" style={{ background: "rgba(0, 0, 0, 0.4)" }}>
          <div 
            className="p-6 flex flex-col items-center gap-4 text-center max-w-[80%]"
            style={{ 
              background: "var(--color-window-content)", 
              borderTop: "2px solid #fff", 
              borderLeft: "2px solid #fff", 
              borderRight: "2px solid var(--color-border-dark)", 
              borderBottom: "2px solid var(--color-border-dark)",
              boxShadow: "4px 4px 15px rgba(0,0,0,0.5)"
            }}
          >
            <h3 className="text-xl font-bold" style={{ color: "var(--color-accent)" }}>{popupMsg}</h3>
            <button 
              onClick={resetGame}
              className="px-6 py-2 text-sm uppercase font-bold active:scale-95 mt-4"
              style={{ 
                background: "var(--color-btn-face)",
                color: "var(--color-text-light)",
                borderTop: "2px solid #fff", 
                borderLeft: "2px solid #fff", 
                borderRight: "2px solid var(--color-border-dark)", 
                borderBottom: "2px solid var(--color-border-dark)" 
              }}
            >
              Play Again!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TicTacToe;
