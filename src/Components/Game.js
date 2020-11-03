import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from 'uuid';
// import { changeScreen } from '../Actions/screens';
import { shootFork, moveFork, removeFork } from '../Actions/forks';
import { addDessert, moveDessert, removeDessert } from '../Actions/desserts';
import Ahiru from './Ahiru';
import Score from './Score';
import Fork from './Fork';
import Dessert from './Dessert';
import './Game.css';

function Game() {
  const dispatch = useDispatch();
  const [jump, setJump] = useState(false);
  let currentForks = useSelector(st => st.forks);
  let currentDesserts = useSelector(st => st.desserts);
  const checkJump = useKeyPress('ArrowUp');
  const checkSpace = useKeyPress(' ');

  function handleShootFork(num, pos) {
    dispatch(shootFork(num, pos));
  }

  function handleMoveFork(num, pos) {
    // yes vw changes as viewport changes
    const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    // chose 300 indiscriminately :(
    if (pos < viewportWidth - 300) {
      dispatch(moveFork(num, pos));
    } else {
      dispatch(removeFork(num, pos));
    }
  }

  let reformattedForks = [];

  for (let fork of Object.keys(currentForks)) {
    let currFork = { 'forkNumber': fork, 'forkPosition': currentForks[fork] };
    reformattedForks.push(currFork);
  }

  function handleAddDessert(num, pos) {
    dispatch(addDessert(num, pos));
  }

  function handleMoveDessert(num, pos) {
    if (pos > 0) {
      dispatch(moveDessert(num, pos));
    } else {
      console.log('removed dessert');
      dispatch(removeDessert(num, pos));
    }
  }

  // useEffect(() => {
  //   const moveInterval = setTimeout(() => {
  //     const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  //   handleAddDessert(uuid(), viewportWidth);
  //   }, 1000);
  //   return () => clearTimeout(moveInterval);
  // });

  let reformattedDesserts = [];

  for (let dessert of Object.keys(currentDesserts)) {
    let currDessert = { 'dessertNumber': dessert, 'dessertPosition': currentDesserts[dessert] };
    reformattedDesserts.push(currDessert);
  }

  // custom hook for detecting key press 
  function useKeyPress(targetKey) {
    function handlePress({ key }) {
      if (key === targetKey && targetKey === 'ArrowUp') {
        setJump(true);
      }
      if (key === targetKey && targetKey === ' ') {
        handleShootFork(uuid(), 120);
      }
    }

    function handleRelease({ key }) {
      let jumpTimer;
      if (key === targetKey) {
        jumpTimer = setTimeout(
          () => setJump(false), 900);
      }

      return () => clearTimeout(jumpTimer);
    }

    useEffect(() => {
      window.addEventListener('keydown', handlePress);
      window.addEventListener('keyup', handleRelease);

      return () => {
        window.removeEventListener('keydown', handlePress);
        window.removeEventListener('keyup', handleRelease);
      };
    });

    return jump;
  }

  // function handleScreenChange(name) {
  //   dispatch(changeScreen(name));
  // }


  return (
    <div className="game">
      <Score />
      {reformattedForks.map((fork) => <Fork key={fork.forkNumber}
        moveFork={(num, pos) => handleMoveFork(num, pos)}
        forkData={fork} />)}
      {reformattedDesserts.map((dessert) => <Dessert key={dessert.dessertNumber}
        moveDessert={(num, pos) => handleMoveDessert(num, pos)}
        dessertData={dessert} />)}
      <Ahiru jump={jump} />
    </div>
  );
}

export default Game;