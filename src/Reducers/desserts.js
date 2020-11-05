export default function rootReducer(state = {}, action) {

  if (action.type === "ADD_DESSERT") {
    return { ...state, [action.dessertNumber]: action.dessertPosition };
  } else if (action.type === "MOVE_DESSERT") {
    return { ...state, [action.dessertNumber]: action.dessertPosition - 10 };
  } else if (action.type === "REMOVE_DESSERT") {
    let newState = { ...state };
    delete newState[action.dessertNumber];

    return newState;
  }

  return state;
}