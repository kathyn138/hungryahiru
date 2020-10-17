import { CHANGE_SCREEN } from './types';

export function changeScreen(screen) {
  return function (dispatch) {
    return dispatch({
      type: CHANGE_SCREEN, 
      screen
    });
  };
}
