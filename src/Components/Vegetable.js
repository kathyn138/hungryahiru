import React, { useEffect } from 'react';
import './Vegetable.css';

function Vegetable(props) {
  let { vegetableNumber, vegetablePosition } = props.vegetableData;

  useEffect(() => {
    const moveInterval = setInterval(() => {
      props.moveVegetable(vegetableNumber, vegetablePosition - 7);
    }, 1000);
    return () => clearInterval(moveInterval);
  });

return (
  <div className="vegetable-container" style = {{ left: vegetablePosition + '%' }}>
    <img src="https://cdn.discordapp.com/attachments/709285942430531650/773369549093339156/vegetable1.png"
      className="vegetable-img" alt="vegetable"></img>
  </div>
);
}

export default Vegetable;