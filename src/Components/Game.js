import React from 'react';
import UserContainer from './UserContainer';
import DessertContainer from './DessertContainer';
import VegetableContainer from './VegetableContainer';
import CollisionContainer from './CollisionContainer';
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