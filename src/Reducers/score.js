export default function rootReducer(state = { score: 0 }, action) {
    if (action.type === "INCREASE_SCORE") {
      return { ...state, score: state.score + 1 };
    } else if (action.type === "RESET_SCORE") {
      return { ...state, score: 0 };
    }
  
    return state;
  }