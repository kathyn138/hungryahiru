import { SHOOT_FORK, MOVE_FORK, REMOVE_FORK, RESET_FORK } from './types';

export function shootFork(forkNumber, forkPosition) {
  return function (dispatch) {
    return dispatch({
      type: SHOOT_FORK, 
      forkNumber, 
      forkPosition
    });
  };
}

export function moveFork(forkNumber, forkPosition) {
  return function (dispatch) {
    return dispatch({
      type: MOVE_FORK, 
      forkNumber, 
      forkPosition
    });
  };
}

export function removeFork(forkNumber, forkPosition) {
  return function (dispatch) {
    return dispatch({
      type: REMOVE_FORK, 
      forkNumber, 
      forkPosition
    });
  };
}

export function resetFork() {
  return function(dispatch) {
    return dispatch({
      type: RESET_FORK
    });
  };
}