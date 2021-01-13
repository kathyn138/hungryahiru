export default function rootReducer(state = {}, action) {

  if (action.type === "ADD_VEGETABLE") {
    return { ...state, [action.vegetableNumber]: action.vegetablePosition };
  } else if (action.type === "MOVE_VEGETABLE") {
    return { ...state, [action.vegetableNumber]: action.vegetablePosition - 7 };
  } else if (action.type === "REMOVE_VEGETABLE") {
    let newState = { ...state };
    delete newState[action.vegetableNumber];

    return newState;
  } else if (action.type === "RESET_VEGETABLE") {
    return {};
  }

  return state;
}