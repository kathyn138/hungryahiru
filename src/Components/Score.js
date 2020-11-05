import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import './Score.css';

function Score() {
  const dispatch = useDispatch();
  const currScore = useSelector(st => st.score);


  return (
    <div className="score">
      SCORE: {currScore.score}
    </div>
  );
}

export default Score;