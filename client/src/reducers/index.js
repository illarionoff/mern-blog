import { combineReducers } from "redux";

import authReducer from "./authReducer";
import blogpostReducer from "./blogpostReducer";

export default combineReducers({
  auth: authReducer,
  blogpost: blogpostReducer
});
