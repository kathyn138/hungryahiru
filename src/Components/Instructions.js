import React from 'react';
import { useDispatch } from "react-redux";
import { changeScreen } from '../Actions/screens';

function Instructions() {
  const dispatch = useDispatch();

  function handleScreenChange(name) {
    dispatch(changeScreen(name));
  }

  return (
    <div>
      "instructions"
      <button type="button" className="btn btn-primary" onClick={evt => handleScreenChange('landing')}>Back</button>
    </div>
  );
}

export default Instructions;