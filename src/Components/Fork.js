import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import './Fork.css';

function Fork(props) {
  let { forkNumber, forkPosition } = props.forkData;

  useEffect(() => {
    const moveInterval = setInterval(() => {
      props.moveFork(forkNumber, forkPosition);
    }, 500);
    return () => clearInterval(moveInterval);
  });


  return (
    <div className="fork-container" style={{left: forkPosition}}>
      <img src="https://cdn.discordapp.com/attachments/709285942430531650/773044064073285662/fork.png" 
      className="fork-img" alt="fork"></img>
    </div>
  );
}

export default Fork;