import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import './EndScreen.css';

function EndScreen() {
  const dispatch = useDispatch();
  const currScore = useSelector(st => st.score);

  return (
    <div className="container-fluid end-screen">
      <div className="row text-center flex-grow-1">
        <div className="col end-screen-score">
          <p>SCORE: {currScore.score} </p>
        </div>

      </div>
      <div className="row text-center flex-grow-1">
        <div className="col end-screen-play-again">
          <p>PLAY AGAIN?</p>
        </div>
      </div>
    </div>
  );
}

export default EndScreen;