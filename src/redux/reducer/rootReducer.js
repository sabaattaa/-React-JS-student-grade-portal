import { combineReducers } from "redux";
import AuthR from "./auth";
import StudentR from "./studentR";
export default combineReducers({
  AuthR,
  StudentR,
});
