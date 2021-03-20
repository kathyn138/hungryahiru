import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { changeScreen } from '../../Actions/screens';
import { increaseScore } from '../../Actions/score';
import { removeDessert } from '../../Actions/desserts';
import { removeFork } from '../../Actions/forks';

function CollisionContainer() {
  const dispatch = useDispatch();

  let currentForks = useSelector(st => st.forks);
  let currentDesserts = useSelector(st => st.desserts);
  let currentVegetables = useSelector(st => st.vegetables);

  useEffect(() => {
    // check if fork and dessert collision
    // if collided, remove dessert and fork and increment score
    for (let fork in currentForks) {
      for (let dessert in currentDesserts) {
        if (currentForks[fork] >= currentDesserts[dessert]) {
          dispatch(removeDessert(dessert, currentDesserts[dessert]));
          dispatch(removeFork(fork, currentForks[fork]));
          dispatch(increaseScore());
        }
      }
    }

    // check for fork and vegetable collision
    // if collided, end the game
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