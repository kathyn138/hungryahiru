import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from 'uuid';
import { shootFork } from '../../Actions/forks';
import Ahiru from '../Ahiru';
import Fork from '../Fork';
import Score from '../Score';

function UserContainer() {
  const dispatch = useDispatch();
  const [jump, setJump] = useState(false);
  // chrome console detects checkJump and checkSpace as not used
  // actually needed for jump and shoot
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
        handleShootFork(uuid(), 10);
      }
    }

    function handleRelease({ key }) {
      let jumpTimer;
      if (key === targetKey && targetKey === 'ArrowUp') {
        jumpTimer = setTimeout(() => setJump(false), 800);
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

  // object with fork IDs as keys and fork positions as values
  let forksFromStore = useSelector(st => st.forks);

  // reformat forksFromStore to map through them in return statement
  let forksForGame = [];

  for (let fork of Object.keys(forksFromStore)) {
    let currFork = { 'forkNumber': fork, 'forkPosition': forksFromStore[fork] };
    forksForGame.push(currFork);
  }

  return (
    <div className="user-container">
      <Score />
      {forksForGame.map((fork) => <Fork key={fork.forkNumber}
        forkData={fork} />)}
      <Ahiru jump={jump} />
    </div>
  );
}

export default UserContainer;