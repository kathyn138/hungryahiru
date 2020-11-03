
export default function rootReducer(state = {}, action) {

  if (action.type === "SHOOT_FORK") {
    console.log(action);
    return { ...state, [action.forkNumber]: action.forkPosition };
  }

  return state;
}