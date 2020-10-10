import { CHANGE_SCREEN } from '../Actions/types';

export default function rootReducer(state = {}, action) {
  switch (action.type) {
    case CHANGE_SCREEN:
      return { ...state, screen: action.screen };

    default:
      return state;
  };
}