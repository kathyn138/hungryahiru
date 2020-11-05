import React, { useEffect } from 'react';
import './Dessert.css';

function Dessert(props) {
  let { dessertNumber, dessertPosition } = props.dessertData;

  useEffect(() => {
    const moveInterval = setInterval(() => {
      props.moveDessert(dessertNumber, dessertPosition);
    }, 400);

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