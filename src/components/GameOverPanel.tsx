import React from 'react';

import { GameOverWrapper } from './GameOverPanel.styles';

type Props = {
  score: number;
  loadStartCallback: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const GameOverPanel: React.FC<Props> = ({
  score,
  loadStartCallback
}) => (
  <GameOverWrapper>
    <div className="inner-div">
    <p>Final score: {score}</p>
    <button 
      className="load-start-panel"
      onClick={loadStartCallback}>
      Back to Quiz Settings
    </button>
    </div>
  </GameOverWrapper>
);

export default GameOverPanel;