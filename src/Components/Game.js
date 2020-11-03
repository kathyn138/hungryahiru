import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from 'uuid';
import { changeScreen } from '../Actions/screens';
import { shootFork } from '../Actions/forks';
import Ahiru from './Ahiru';
import Score from './Score';
import Fork from './Fork';
import './Game.css';

function Game() {
  const dispatch = useDispatch();
  const [jump, setJump] = useState(false);
  let currentForks = useSelector(st => st.forks);
  const checkJump = useKeyPress('ArrowUp');
  const checkSpace = useKeyPress(' ');

  function handleShootFork(num, pos) {
    dispatch(shootFork(num, pos));
  }

  // custom hook for detecting key press 
  function useKeyPress(targetKey) {
    function handlePress({ key }) {
      if (key === targetKey && targetKey === 'ArrowUp') {
        setJump(true);
      }
      if (key === targetKey && targetKey === ' ') {
        handleShootFork(uuid(), 0);
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

  let reformattedForks = [];
  console.log('currF', currentForks)

  for (let fork of Object.keys(currentForks)) {
    let currFork = {'forkNumber': fork, 'forkPosition': currentForks[fork]};
    reformattedForks.push(currFork);
  }

  return (
    <div className="game">
      <Score />
      {reformattedForks.map((fork) => <Fork key={fork.forkNumber} />)}
      <Ahiru jump={jump} />
    </div>
  );
}

export default Game;