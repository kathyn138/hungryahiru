import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { changeScreen } from '../Actions/screens';
import Instructions from './Instructions';
import './App.css';

function App() {
  const dispatch = useDispatch();
  let currentScreen = useSelector(st => st.screen.name);
  // const change = dispatch({screen: 'instructions', type: 'CHANGE_SCREEN'});

  console.log('changing screen to', currentScreen);
  // const currentScreen = useState('');

  function change(name) {
    dispatch(changeScreen(name));
  }



  if (currentScreen === 'start' || !currentScreen) {
    console.log('rerender start');
    return (
      <div>
        <button type="button" className="btn btn-primary" onClick={evt => change('start')}>Start</button>
        <button type="button" className="btn btn-primary" onClick={evt => change('instructions')}>Instructions</button>
      </div>
    );
  } else if (currentScreen === 'instructions') {
    console.log('rerender at instructions');
    return (
      <Instructions />
    );
  }

  // return (
  //   <div>
  //   {console.log('rendering')}
  //    <button type="button" className="btn btn-primary" onClick={evt => change('start')}>Start</button>
  //      <button type="button" className="btn btn-primary" onClick={evt => change('instructions')}>Instructions</button>
  //   {currentScreen ? 'ok' : 'no'}
  //    </div>
  // );
}

export default App;
