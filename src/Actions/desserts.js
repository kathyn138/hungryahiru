import { ADD_DESSERT, MOVE_DESSERT, REMOVE_DESSERT } from './types';

export function addDessert(dessertNumber, dessertPosition) {
  return function (dispatch) {
    return dispatch({
      type: ADD_DESSERT,
      dessertNumber,
      dessertPosition
    });
  };
}

export function moveDessert(dessertNumber, dessertPosition) {
  return function (dispatch) {
    return dispatch({
      type: MOVE_DESSERT,
      dessertNumber,
      dessertPosition
    });
  };
}

export function removeDessert(dessertNumber, dessertPosition) {
  return function (dispatch) {
    return dispatch({
      type: REMOVE_DESSERT,
      dessertNumber,
      dessertPosition
    });
  };
}
