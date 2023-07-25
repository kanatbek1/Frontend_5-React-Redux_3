import { ADD_NUMBER, CLEAR_NUMBERS } from "../reducers/types";
const initialState = {
  numbers: [],
};
const numberReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return {
        ...state,
        numbers: [...state.numbers, action.payload],
      };
    case CLEAR_NUMBERS:
      return {
        ...state,
        numbers: [],
      };
    default:
      return state;
  }
};

export default numberReducer;



