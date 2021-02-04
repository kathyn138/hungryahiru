import React from 'react';
import { useSelector } from "react-redux";
import EndScreen from './EndScreen';
import GameScreen from './GameScreen';
import InstructionsScreen from './InstructionsScreen';
import LandingScreen from './LandingScreen';

function App() {
  let currentScreen = useSelector(st => st.screen.name);

  if (currentScreen === 'landing') {
    return (
      <LandingScreen />
    );
  } else if (currentScreen === 'instructions') {
    return (
      <InstructionsScreen />
    );
  } else if (currentScreen === 'game') {
    return (
      <GameScreen />
    );
  } else {
    return (
      <EndScreen />
    );
  }
}

export default App;
