import React, { useState, useEffect, useCallback } from "react";

const ROWS = 10;
const COLS = 10;
const MINES = 10;

const createEmptyGrid = () => {
  return Array.from({ length: ROWS }, (_, r) =>
    Array.from({ length: COLS }, (_, c) => ({
      r,
      c,
      isMine: false,
      isRevealed: false,
      isFlagged: false,
      neighborMines: 0,
    }))
  );
};

const getNeighbors = (r, c) => {
  const neighbors = [];
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i === 0 && j === 0) continue;
      const nr = r + i, nc = c + j;
      if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS) {
        neighbors.push([nr, nc]);
      }
    }
  }
  return neighbors;
};

const placeMines = (grid, excludeR, excludeC) => {
  let placed = 0;
  while (placed < MINES) {
    const r = Math.floor(Math.random() * ROWS);
    const c = Math.floor(Math.random() * COLS);
    if (!grid[r][c].isMine && !(r === excludeR && c === excludeC)) {
      grid[r][c].isMine = true;
      placed++;
    }
  }
  // Calculate neighbor mines
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (!grid[r][c].isMine) {
        let count = 0;
        getNeighbors(r, c).forEach(([nr, nc]) => {
          if (grid[nr][nc].isMine) count++;
        });
        grid[r][c].neighborMines = count;
      }
    }
  }
};

const Minesweeper = ({ isMaximized }) => {
  const [grid, setGrid] = useState(createEmptyGrid());
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [firstClick, setFirstClick] = useState(true);
  const [flags, setFlags] = useState(MINES);
  const [timer, setTimer] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isPlaying && !gameOver && !gameWon) {
      interval = setInterval(() => setTimer(t => t + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, gameOver, gameWon]);

  const resetGame = () => {
    setGrid(createEmptyGrid());
    setGameOver(false);
    setGameWon(false);
    setFirstClick(true);
    setFlags(MINES);
    setTimer(0);
    setIsPlaying(false);
  };

  const checkWinCondition = (currentGrid) => {
    let unrevealedSafeCells = 0;
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        if (!currentGrid[r][c].isRevealed && !currentGrid[r][c].isMine) {
          unrevealedSafeCells++;
        }
      }
    }
    if (unrevealedSafeCells === 0) {
      setGameWon(true);
      setIsPlaying(false);
      // Flag remaining mines
      const newGrid = [...currentGrid];
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          if (newGrid[r][c].isMine) {
            newGrid[r][c].isFlagged = true;
          }
        }
      }
      setGrid(newGrid);
      setFlags(0);
    }
  };

  const revealCell = (r, c) => {
    if (gameOver || gameWon || grid[r][c].isRevealed || grid[r][c].isFlagged) return;

    const newGrid = [...grid.map(row => [...row])];

    if (firstClick) {
      placeMines(newGrid, r, c);
      setFirstClick(false);
      setIsPlaying(true);
    }

    if (newGrid[r][c].isMine) {
      // Game Over
      newGrid[r][c].isRevealed = true;
      for (let ir = 0; ir < ROWS; ir++) {
        for (let ic = 0; ic < COLS; ic++) {
          if (newGrid[ir][ic].isMine) newGrid[ir][ic].isRevealed = true;
        }
      }
      setGrid(newGrid);
      setGameOver(true);
      setIsPlaying(false);
      return;
    }

    // Flood fill
    const stack = [[r, c]];
    while (stack.length > 0) {
      const [cr, cc] = stack.pop();
      if (!newGrid[cr][cc].isRevealed && !newGrid[cr][cc].isFlagged) {
        newGrid[cr][cc].isRevealed = true;
        if (newGrid[cr][cc].neighborMines === 0) {
          getNeighbors(cr, cc).forEach(([nr, nc]) => {
            if (!newGrid[nr][nc].isRevealed) stack.push([nr, nc]);
          });
        }
      }
    }

    setGrid(newGrid);
    checkWinCondition(newGrid);
  };

  const toggleFlag = (e, r, c) => {
    e.preventDefault();
    if (gameOver || gameWon || grid[r][c].isRevealed) return;

    const newGrid = [...grid.map(row => [...row])];
    const cell = newGrid[r][c];

    if (!cell.isFlagged && flags > 0) {
      cell.isFlagged = true;
      setFlags(f => f - 1);
    } else if (cell.isFlagged) {
      cell.isFlagged = false;
      setFlags(f => f + 1);
    }
    setGrid(newGrid);
  };

  // Helper for digit display
  const formatNumber = (num) => String(num).padStart(3, '0');

  const getNumberColor = (num) => {
    const colors = ["", "blue", "green", "red", "darkblue", "darkred", "teal", "black", "gray"];
    return colors[num];
  };

  return (
    <div 
      className={`flex flex-col items-center justify-center p-4 h-full bg-[#c0c0c0] ${isMaximized ? "pb-20" : ""}`}
      style={{ fontFamily: "'MS Sans Serif', sans-serif", userSelect: "none" }}
    >
      <div 
        className="p-2 bg-[#c0c0c0]"
        style={{ borderTop: "2px solid #fff", borderLeft: "2px solid #fff", borderRight: "2px solid #808080", borderBottom: "2px solid #808080" }}
      >
        {/* Header */}
        <div 
          className="flex justify-between items-center p-1 mb-2 bg-[#c0c0c0]"
          style={{ borderTop: "2px solid #808080", borderLeft: "2px solid #808080", borderRight: "2px solid #fff", borderBottom: "2px solid #fff" }}
        >
          <div className="bg-black text-red-500 font-mono text-xl px-1" style={{ border: "1px solid #808080" }}>
            {formatNumber(flags)}
          </div>
          <button 
            className="w-8 h-8 text-xl flex items-center justify-center active:scale-95 bg-[#c0c0c0]"
            style={{ borderTop: "2px solid #fff", borderLeft: "2px solid #fff", borderRight: "2px solid #808080", borderBottom: "2px solid #808080" }}
            onClick={resetGame}
          >
            {gameWon ? "😎" : gameOver ? "😵" : "🙂"}
          </button>
          <div className="bg-black text-red-500 font-mono text-xl px-1" style={{ border: "1px solid #808080" }}>
            {formatNumber(timer)}
          </div>
        </div>

        {/* Grid */}
        <div 
          style={{ 
            borderTop: "2px solid #808080", 
            borderLeft: "2px solid #808080", 
            borderRight: "2px solid #fff", 
            borderBottom: "2px solid #fff",
            display: "grid",
            gridTemplateColumns: `repeat(${COLS}, 1fr)`,
            gridTemplateRows: `repeat(${ROWS}, 1fr)`
          }}
        >
          {grid.map((row, r) =>
            row.map((cell, c) => (
              <div
                key={`${r}-${c}`}
                onClick={() => revealCell(r, c)}
                onContextMenu={(e) => toggleFlag(e, r, c)}
                className={`w-6 h-6 flex items-center justify-center font-bold text-sm cursor-pointer`}
                style={{
                  background: cell.isRevealed ? "#c0c0c0" : "#c0c0c0",
                  border: cell.isRevealed 
                    ? "1px solid #808080" 
                    : "2px solid #fff",
                  borderRightColor: cell.isRevealed ? "#808080" : "#808080",
                  borderBottomColor: cell.isRevealed ? "#808080" : "#808080",
                  color: cell.isRevealed && !cell.isMine ? getNumberColor(cell.neighborMines) : "black"
                }}
              >
                {cell.isRevealed && cell.isMine ? "💣" : ""}
                {cell.isRevealed && !cell.isMine && cell.neighborMines > 0 ? cell.neighborMines : ""}
                {!cell.isRevealed && cell.isFlagged ? "🚩" : ""}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Minesweeper;
