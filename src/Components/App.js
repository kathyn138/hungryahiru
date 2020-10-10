import React from 'react';
import { useDispatch } from "react-redux";
import { changeScreen } from '../Actions/screens';
import './App.css';

function App() {
  const dispatch = useDispatch();
  // const change = dispatch({screen: 'instructions', type: 'CHANGE_SCREEN'});

  function change(name) {
    dispatch({screen: name, type: 'CHANGE_SCREEN'});
    console.log('change');
  }
  return (
    <div>
      <button type="button" className="btn btn-primary">Start</button>
      <button type="button" className="btn btn-primary" onClick={change('instructions')}>Instructions</button>
    </div>
  );
}

export default App;
