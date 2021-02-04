import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { moveDessert, removeDessert } from '../../Actions/desserts';
import './Dessert.css';

function Dessert(props) {
  const dispatch = useDispatch();
  let { dessertNumber, dessertPosition } = props.dessertData;

  // check dessert coordinates each time the dessert moves
  // dessert moves from right to left
  // remove dessert if out of bounds (<= 0)
  function handleMoveDessert(num, pos) {
    if (pos > 0) {
      dispatch(moveDessert(num, pos));
    } else {
      dispatch(removeDessert(num, pos));
    }
  }

  useEffect(() => {
    const moveInterval = setInterval(() => {
      handleMoveDessert(dessertNumber, dessertPosition - .30);
    }, 30);

    return () => clearInterval(moveInterval);
  });


  return (
    <div className="dessert-container" style={{ left: dessertPosition + '%' }}>
      <img src="https://cdn.discordapp.com/attachments/709285942430531650/773312535242997787/cake1.png"
        className="dessert-img" alt="dessert"></img>
    </div>
  );
}

export default Dessert;