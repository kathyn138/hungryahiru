import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { moveFork, removeFork } from '../../Actions/forks';
import './Fork.css';

function Fork(props) {
  const dispatch = useDispatch();
  let { forkNumber, forkPosition } = props.forkData;

  // check fork coordinates each time the fork moves
  // fork moves from left to right
  // remove fork if out of bounds (>= 100)
  function handleMoveFork(num, pos) {
    if (pos < 100) {
      dispatch(moveFork(num, pos + 10));
    } else {
      dispatch(removeFork(num, pos));
    }
  }

  useEffect(() => {
    const moveInterval = setInterval(() => {
      handleMoveFork(forkNumber, forkPosition);
    }, 100);
    return () => clearInterval(moveInterval);
  });

  return (
    <div className="fork-container" style={{ left: forkPosition + '%' }}>
      <img src="https://cdn.discordapp.com/attachments/709285942430531650/773044064073285662/fork.png"
        className="fork-img" alt="fork"></img>
    </div>
  );
}

export default Fork;