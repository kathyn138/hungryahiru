import { INCREASE_SCORE } from './types';

export function increaseScore() {
  return function (dispatch) {
    return dispatch({
      type: INCREASE_SCORE
    });
  };
}
