import types from '../reducers/types';   

const initialState = {
  value: '',
  users: [], 
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.VALUE:
      return {
        ...state,
        value: action.payload,
      };
    case types.ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload], 
      };
    case types.DELETE_ALL_USERS:
      return {
        ...state,
        users: [], 
      };
    default:
      return state;
  }
};

export default userReducer;

