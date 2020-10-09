import { CHANGE_SCREEN } from './types';

export function changeScreen(name) {
  return function (dispatch) {
    return dispatch({
      type: CHANGE_SCREEN,
      screen: name
    });
  };
}
