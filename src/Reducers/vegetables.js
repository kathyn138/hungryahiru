export default function rootReducer(state = { 0: 98 }, action) {

  if (action.type === "ADD_VEGETABLE") {
    return { ...state, [action.vegetableNumber]: action.vegetablePosition };
  } else if (action.type === "MOVE_VEGETABLE") {
    return { ...state, [action.vegetableNumber]: action.vegetablePosition - 15 };
  } else if (action.type === "REMOVE_VEGETABLE") {
    let newState = { ...state };
    delete newState[action.vegetableNumber];

    return newState;
  }

  return state;
}