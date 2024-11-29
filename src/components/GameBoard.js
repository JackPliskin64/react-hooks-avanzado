import React from 'react';
import useGameLogic from '../hooks/useGameLogic';

function GameBoard() {
  const { board, isXNext, winner, handleSquareClick, resetGame } =
    useGameLogic();

  return (
    <div className="game-container">
      <h1>Tres en Raya</h1>
      <div className="board">
        {board.map((square, index) => (
          <button
            key={index}
            className="square"
            onClick={() => handleSquareClick(index)}
          >
            {square}
          </button>
        ))}
      </div>
      <p className="game-status">
        {winner ? `Ganador: ${winner}` : `Turno de: ${isXNext ? 'X' : 'O'}`}
      </p>
      <button className="reset-button" onClick={resetGame}>
        Reiniciar
      </button>
    </div>
  );
}

export default GameBoard;
