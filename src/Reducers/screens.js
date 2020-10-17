import { CHANGE_SCREEN } from '../Actions/types';

export default function rootReducer(state = { name: 'landing' }, action) {
  switch (action.type) {
    case CHANGE_SCREEN:
      return { ...state, name: action.screen };

    default:
      return state;
  };
}