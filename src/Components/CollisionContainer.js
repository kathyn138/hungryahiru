import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { removeFork } from '../Actions/forks';
import { removeDessert } from '../Actions/desserts';
import { increaseScore } from '../Actions/score';

function CollisionContainer() {
  const dispatch = useDispatch();

  let currentForks = useSelector(st => st.forks);
  let currentDesserts = useSelector(st => st.desserts);


  // rn it keeps running 
  // investigate why
  for (let fork in currentForks) {
    for (let dessert in currentDesserts) {
      if (currentForks[fork] >= currentDesserts[dessert]) {
        dispatch(removeDessert(dessert, currentDesserts[dessert]));
        dispatch(removeFork(fork, currentForks[fork]));
        dispatch(increaseScore());
      }
    }
  }



  return (<React.Fragment></React.Fragment>);
}

export default CollisionContainer;