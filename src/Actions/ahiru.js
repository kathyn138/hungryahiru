import { JUMP } from './types';

export function jump() {
  return function (dispatch) {
    return dispatch({
      type: JUMP
    });
  };
}
