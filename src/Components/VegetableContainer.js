import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from 'uuid';
import { addVegetable, moveVegetable, removeVegetable } from '../Actions/vegetables';
import Vegetable from './Vegetable';

function VegetableContainer() {
  const dispatch = useDispatch();
  let currentVegetables = useSelector(st => st.vegetables);

  function handleAddVegetable(num, pos) {
    dispatch(addVegetable(num, pos));
  }

  useEffect(() => {
    const addInterval = setInterval(() => {
      handleAddVegetable(uuid(), 98);
    }, 1800);
    return () => clearInterval(addInterval);
  });

  function handleMoveVegetable(num, pos) {
    if (pos > 0) {
      dispatch(moveVegetable(num, pos));
    } else {
      dispatch(removeVegetable(num, pos));
    }
  }

  let reformattedVegetables = [];

  for (let vegetable of Object.keys(currentVegetables)) {
    let currVegetable = { 'vegetableNumber': vegetable, 'vegetablePosition': currentVegetables[vegetable] };
    reformattedVegetables.push(currVegetable);
  }

  return (
    <React.Fragment>
      {reformattedVegetables.map((vegetable) => <Vegetable key={vegetable.vegetableNumber}
        moveVegetable={(num, pos) => handleMoveVegetable(num, pos)}
        vegetableData={vegetable} />)}
    </React.Fragment>
  );
}

export default VegetableContainer;