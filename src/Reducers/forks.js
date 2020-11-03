
export default function rootReducer(state = {}, action) {

  if (action.type === "SHOOT_FORK") {
    return { ...state, [action.forkNumber]: action.forkPosition };
  } else if (action.type === "MOVE_FORK") {
    return { ...state, [action.forkNumber]: action.forkPosition + 300 };
  } else if (action.type === "REMOVE_FORK") {
    let newState = { ...state };
    delete newState[action.forkNumber];
    
    return { newState };
  }

  return state;
}