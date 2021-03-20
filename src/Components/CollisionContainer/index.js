import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { changeScreen } from '../../Actions/screens';
import { increaseScore } from '../../Actions/score';
import { removeDessert } from '../../Actions/desserts';
import { removeFork } from '../../Actions/forks';

/* 
I chose this code because it demonstrates 
my knowledge of React and solves a problem with logic. 
The problem was that I needed to check for collisions
between 3 moving parts: forks, desserts, and vegetables. 
*/

function CollisionContainer() {
  const dispatch = useDispatch();

  let currentForks = useSelector(st => st.forks);
  let currentDesserts = useSelector(st => st.desserts);
  let currentVegetables = useSelector(st => st.vegetables);

  useEffect(() => {
    // Check for fork and dessert collision
    // If collided, remove dessert and fork and increment score
    for (let fork in currentForks) {
      for (let dessert in currentDesserts) {
        if (currentForks[fork] >= currentDesserts[dessert]) {
          dispatch(removeDessert(dessert, currentDesserts[dessert]));
          dispatch(removeFork(fork, currentForks[fork]));
          dispatch(increaseScore());
        }
      }
    }

    // Check for fork and vegetable collision
    // If collided, end the game
    for (let fork in currentForks) {
      for (let vegetable in currentVegetables) {
        if (currentForks[fork] >= currentVegetables[vegetable]) {
          dispatch(changeScreen('end'));
        }
      }
    }
  });

  return (<React.Fragment></React.Fragment>);
}

export default CollisionContainer;