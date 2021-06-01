import React from 'react';

type Props = {
  score: number;
  loadStartCallback: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const GameOverPanel: React.FC<Props> = ({
  score,
  loadStartCallback
}) => (
  <div className="game-over-panel">
    <p>Final score: {score}</p>
    <button 
      className="load-start-panel"
      onClick={loadStartCallback}>
      Back to Quiz Settings
    </button>
  </div>
);

export default GameOverPanel;