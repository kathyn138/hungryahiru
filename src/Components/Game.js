import React from 'react';
import CollisionContainer from './CollisionContainer';
import DessertContainer from './DessertContainer';
import UserContainer from './UserContainer';
import VegetableContainer from './VegetableContainer';
import './Game.css';

function Game() {
  return (
    <div className="game">
      <CollisionContainer />
      <DessertContainer />
      <VegetableContainer />
      <UserContainer />
    </div>
  );
}

export default Game;