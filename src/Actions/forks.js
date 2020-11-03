import { SHOOT_FORK } from './types';

export function shootFork(forkNumber, forkPosition) {
  return function (dispatch) {
    return dispatch({
      type: SHOOT_FORK, 
      forkNumber, 
      forkPosition
    });
  };
}
