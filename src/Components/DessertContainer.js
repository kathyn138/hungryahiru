import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from 'uuid';
import { addDessert } from '../Actions/desserts';
import Dessert from './Dessert';

function DessertContainer() {
  const dispatch = useDispatch();
  let currentDesserts = useSelector(st => st.desserts);

  function handleAddDessert(num, pos) {
    dispatch(addDessert(num, pos));
  }

  useEffect(() => {
    const addInterval = setInterval(() => {
      handleAddDessert(uuid(), 100);
    }, 1000);
    return () => clearInterval(addInterval);
  });

  let reformattedDesserts = [];

  for (let dessert of Object.keys(currentDesserts)) {
    let currDessert = {
      'dessertNumber': dessert,
      'dessertPosition': currentDesserts[dessert]
    };
    reformattedDesserts.push(currDessert);
  }

  return (
    <React.Fragment>
      {reformattedDesserts.map((dessert) => <Dessert key={dessert.dessertNumber}
        dessertData={dessert} />)}
    </React.Fragment>
  );
}

export default DessertContainer;