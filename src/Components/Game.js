import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { changeScreen } from '../Actions/screens';
import Ahiru from './Ahiru';
import Score from './Score';
import Fork from './Fork';
import './Game.css';

function Game() {
  const dispatch = useDispatch();
  const [jump, setJump] = useState(false);
  const checkJump = useKeyPress('ArrowUp');

  function useKeyPress(targetKey) {

    function handlePress({ key }) {
      if (key === targetKey) {
        setJump(true);
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
      {/* <Fork /> */}
      <Ahiru jump={jump} />
    </div>
  );
}

export default Game;