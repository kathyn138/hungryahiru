import React from 'react';
import { useDispatch } from "react-redux";
import { changeScreen } from '../Actions/screens';

function Game() {
  const dispatch = useDispatch();

  function handleScreenChange(name) {
    dispatch(changeScreen(name));
  }

  return (
    <div>
      "game"
      <button type="button" className="btn btn-primary" onClick={evt => handleScreenChange('landing')}>Back</button>
    </div>
  );
}

export default Game;