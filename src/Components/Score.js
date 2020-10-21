import React from 'react';
import { useDispatch } from "react-redux";
import './Score.css';

function Score() {
  const dispatch = useDispatch();


  return (
    <div className="score">
      SCORE:
    </div>
  );
}

export default Score;