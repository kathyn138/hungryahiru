import React from 'react';
import { useDispatch } from "react-redux";
import { changeScreen } from '../../Actions/screens';
import './LandingScreen.css';

function LandingScreen() {
  const dispatch = useDispatch();

  function handleScreenChange(name) {
    dispatch(changeScreen(name));
  }

  return (
    <div className="container-fluid landing">
      <div className="row flex-grow-1">
        <div className="col title">
          <h1>HUNGRY AHIRU</h1>
        </div>
      </div>
      <div className="row flex-grow-1">
        <div className="col landing-options">
          <ol>
            <li onClick={evt => handleScreenChange('game')}>
              START GAME
                </li>
            <li onClick={evt => handleScreenChange('instructions')}>
              INSTRUCTIONS
                </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default LandingScreen;