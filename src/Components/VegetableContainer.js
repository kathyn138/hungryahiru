import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from 'uuid';
import { addVegetable } from '../Actions/vegetables';
import Vegetable from './Vegetable';

function VegetableContainer() {
  const dispatch = useDispatch();

  function handleAddVegetable(num, pos) {
    dispatch(addVegetable(num, pos));
  }

  // add vegetable at x position 100 
  // timing at 2500 to not overlap with dessert start time
  useEffect(() => {
    const addInterval = setInterval(() => {
      handleAddVegetable(uuid(), 100);
    }, 2500);
    return () => clearInterval(addInterval);
  });

  // object with vegetable IDs as keys and vegetable positions as values
  let vegetablesFromStore = useSelector(st => st.vegetables);

  // reformat vegetablesFromStore to map through them in return statement
  let vegetablesForGame = [];

  for (let vegetable of Object.keys(vegetablesFromStore)) {
    let currVegetable = {
      'vegetableNumber': vegetable,
      'vegetablePosition': vegetablesFromStore[vegetable]
    };
    vegetablesForGame.push(currVegetable);
  }

  return (
    <React.Fragment>
      {vegetablesForGame.map((vegetable) => <Vegetable key={vegetable.vegetableNumber}
        vegetableData={vegetable} />)}
    </React.Fragment>
  );
}

export default VegetableContainer;