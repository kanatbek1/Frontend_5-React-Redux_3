import { combineReducers } from "redux";
import numberReducer from "./numberReducer";
import userReducer from "./userReducer";
import titleReducer from "./titleReducer";

const rootReducer = combineReducers({
  numberReducer,
  userReducer,
  titleReducer,
});

export default rootReducer;
