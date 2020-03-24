import { INCREMENT, DECREMENT } from "./types";

const initialState = {
  counterFollowing: 4732,
  counterFollower:732
};

export const counterReducer = (state = initialState, action) => {
  //console.log(state.counter);
  switch (action.type) {
    case INCREMENT:
	  return { ...state, counter: state.counter + 1 };
	  case DECREMENT:
		return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};
