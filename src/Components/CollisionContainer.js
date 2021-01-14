import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { removeFork } from '../Actions/forks';
import { removeDessert } from '../Actions/desserts';
import { increaseScore } from '../Actions/score';
import { changeScreen } from '../Actions/screens';

function CollisionContainer() {
  const dispatch = useDispatch();

  let currentForks = useSelector(st => st.forks);
  let currentDesserts = useSelector(st => st.desserts);
  let currentVegetables = useSelector(st => st.vegetables);


  // rn it keeps running 
  // investigate why
  // https://stackoverflow.com/questions/62336340/cannot-update-a-component-while-rendering-a-different-component-warning
  useEffect(() => {

    for (let fork in currentForks) {
      for (let dessert in currentDesserts) {
        if (currentForks[fork] >= currentDesserts[dessert]) {
          dispatch(removeDessert(dessert, currentDesserts[dessert]));
          dispatch(removeFork(fork, currentForks[fork]));
          dispatch(increaseScore());
        }
      }
    }
  
    for (let fork in currentForks) {
      for (let vegetable in currentVegetables) {
        if (currentForks[fork] >= currentVegetables[vegetable]) {
          dispatch(changeScreen('end'));
        }
      }
    }
  })

  return (<React.Fragment></React.Fragment>);
}

export default CollisionContainer;