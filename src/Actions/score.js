import { INCREASE_SCORE, RESET_SCORE } from './types';

export function increaseScore() {
  return function (dispatch) {
    return dispatch({
      type: INCREASE_SCORE
    });
  };
}

export function resetScore() {
  return function (dispatch) {
    return dispatch({
      type: RESET_SCORE
    });
  };
}
