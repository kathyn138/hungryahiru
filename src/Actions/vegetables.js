import { ADD_VEGETABLE, MOVE_VEGETABLE, REMOVE_VEGETABLE } from './types';

export function addVegetable(vegetableNumber, vegetablePosition) {
  return function (dispatch) {
    return dispatch({
      type: ADD_VEGETABLE,
      vegetableNumber,
      vegetablePosition
    });
  };
}

export function moveVegetable(vegetableNumber, vegetablePosition) {
  return function (dispatch) {
    return dispatch({
      type: MOVE_VEGETABLE,
      vegetableNumber,
      vegetablePosition
    });
  };
}

export function removeVegetable(vegetableNumber, vegetablePosition) {
  return function (dispatch) {
    return dispatch({
      type: REMOVE_VEGETABLE,
      vegetableNumber,
      vegetablePosition
    });
  };
}
