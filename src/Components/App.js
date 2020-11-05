import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { changeScreen } from '../Actions/screens';
import Instructions from './Instructions';
import Game from './Game';
import EndScreen from './EndScreen';
import DessertContainer from './DessertContainer';
import VegetableContainer from './VegetableContainer';
import CollisionContainer from './CollisionContainer';
import './App.css';

function App() {
  const dispatch = useDispatch();
  let currentScreen = useSelector(st => st.screen.name);

  function handleScreenChange(name) {
    dispatch(changeScreen(name));
  }


  if (currentScreen === 'landing') {
    console.log('rerender start');
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
  } else if (currentScreen === 'instructions') {
    return (
      <Instructions />
    );
  } else if (currentScreen === 'game') {
    return (
      <React.Fragment>
        <CollisionContainer />
        <DessertContainer />
        <VegetableContainer />
        <Game />
      </React.Fragment>
    );
  } else {
    return (
      <EndScreen />
    );
  }
}

export default App;
