import React from 'react';
import { useSelector } from "react-redux";
import EndScreen from './EndScreen';
import Game from './Game';
import Instructions from './Instructions';
import LandingScreen from './LandingScreen';

function App() {
  let currentScreen = useSelector(st => st.screen.name);

  if (currentScreen === 'landing') {
    return (
      <LandingScreen />
    );
  } else if (currentScreen === 'instructions') {
    return (
      <Instructions />
    );
  } else if (currentScreen === 'game') {
    return (
      <Game />
    );
  } else {
    return (
      <EndScreen />
    );
  }
}

export default App;
