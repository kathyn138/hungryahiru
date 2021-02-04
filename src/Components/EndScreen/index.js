import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { changeScreen } from '../../Actions/screens';
import { resetDessert } from '../../Actions/desserts';
import { resetFork } from '../../Actions/forks';
import { resetScore } from '../../Actions/score';
import { resetVegetable } from '../../Actions/vegetables';
import './EndScreen.css';

function EndScreen() {
  const dispatch = useDispatch();
  const currScore = useSelector(st => st.score);

  // resetting game resets desserts, forks, vegetables, and score
  // also takes user back to landing screen
  function handleResetGame() {
    dispatch(changeScreen('landing'));
    dispatch(resetDessert());
    dispatch(resetFork());
    dispatch(resetVegetable());
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