import { JUMP } from '../Actions/types';

export default function rootReducer(state = {}, action) {

  if (action.type === "JUMP") {
    return { ...state, [action.ahiruPosition]: action.ahiruPosition };
  }

  return state;
}