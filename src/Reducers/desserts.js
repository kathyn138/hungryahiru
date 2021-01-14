export default function rootReducer(state = {}, action) {

  if (action.type === "ADD_DESSERT") {
    return { ...state, [action.dessertNumber]: action.dessertPosition };
  } else if (action.type === "MOVE_DESSERT") {
    return { ...state, [action.dessertNumber]: action.dessertPosition };
  } else if (action.type === "REMOVE_DESSERT") {
    let newState = { ...state };
    delete newState[action.dessertNumber];

    return newState;
  } else if (action.type === "RESET_DESSERT") {
    return {};
  }

  return state;
}