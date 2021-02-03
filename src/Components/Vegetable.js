import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { moveVegetable, removeVegetable } from '../Actions/vegetables';
import './Vegetable.css';

function Vegetable(props) {
  const dispatch = useDispatch();
  let { vegetableNumber, vegetablePosition } = props.vegetableData;

  function handleMoveVegetable(num, pos) {
    if (pos > 0) {
      dispatch(moveVegetable(num, pos));
    } else {
      dispatch(removeVegetable(num, pos));
    }
  }

  useEffect(() => {
    const moveInterval = setInterval(() => {
      handleMoveVegetable(vegetableNumber, vegetablePosition - .30);
    }, 30);
    return () => clearInterval(moveInterval);
  });

  return (
    <div className="vegetable-container" style={{ left: vegetablePosition + '%' }}>
      <img src="https://cdn.discordapp.com/attachments/709285942430531650/773369549093339156/vegetable1.png"
        className="vegetable-img" alt="vegetable"></img>
    </div>
  );
}

export default Vegetable;