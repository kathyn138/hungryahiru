import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from 'uuid';
import { addDessert } from '../../Actions/desserts';
import Dessert from '../Dessert';

function DessertContainer() {
  const dispatch = useDispatch();
  
  function handleAddDessert(num, pos) {
    dispatch(addDessert(num, pos));
  }
  
  // add dessert at x position 100 
  // timing at 1000 to not overlap with vegetable start time
  useEffect(() => {
    const addInterval = setInterval(() => {
      handleAddDessert(uuid(), 100);
    }, 1000);
    return () => clearInterval(addInterval);
  });
  
  // object with dessert IDs as keys and dessert positions as values
  let dessertsFromStore = useSelector(st => st.desserts);
  
  // reformat dessertsFromStore to map through them in return statement
  let dessertsForGame = [];

  for (let dessert of Object.keys(dessertsFromStore)) {
    let currDessert = {
      'dessertNumber': dessert,
      'dessertPosition': dessertsFromStore[dessert]
    };
    dessertsForGame.push(currDessert);
  }

  return (
    <React.Fragment>
      {dessertsForGame.map((dessert) => <Dessert key={dessert.dessertNumber}
        dessertData={dessert} />)}
    </React.Fragment>
  );
}

export default DessertContainer;