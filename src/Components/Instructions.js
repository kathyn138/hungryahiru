import React from 'react';
import { useDispatch } from "react-redux";
import { changeScreen } from '../Actions/screens';
import './Instructions.css';

function Instructions() {
  const dispatch = useDispatch();

  function handleScreenChange(name) {
    dispatch(changeScreen(name));
  }

  return (
    <div className="container-fluid instructions">
      <div className="row">
        <div className="col back-to-main">
          <h3 onClick={evt => handleScreenChange('landing')}>BACK TO MAIN MENU</h3>
        </div>
      </div>
      <div className="row text-center flex-grow-1">
        <div className="col instructions-list">
          <ol>
            <li>SPACE BAR TO SHOOT FORKS</li>
            <li>UP ARROW TO JUMP</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Instructions;