import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { changeScreen } from '../Actions/screens';
import { resetScore } from '../Actions/score';
import './EndScreen.css';

function EndScreen() {
  const dispatch = useDispatch();
  const currScore = useSelector(st => st.score);

  function handleResetGame() {
    dispatch(changeScreen('landing'));
    dispatch(resetScore());
  }

  return (
    <div className="container-fluid end-screen">
      <div className="row text-center flex-grow-1">
        <div className="col end-screen-score">
          <p>SCORE: {currScore.score} </p>
        </div>

      </div>
      <div className="row text-center flex-grow-1">
        <div className="col end-screen-play-again">
          <p onClick={evt => handleResetGame()}>
            PLAY AGAIN?</p>
        </div>
      </div>
    </div>
  );
}

export default EndScreen;