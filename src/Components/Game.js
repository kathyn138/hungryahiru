import React from 'react';
import { useDispatch } from "react-redux";
import { changeScreen } from '../Actions/screens';
import Ahiru from './Ahiru';
import Score from './Score';
import Fork from './Fork';
import './Game.css';

function Game() {
  const dispatch = useDispatch();

  function handleScreenChange(name) {
    dispatch(changeScreen(name));
  }

  return (
    <div className="game">
      <Score />
      {/* <Fork /> */}
      <Ahiru />
    </div>
  );
}

export default Game;