import { combineReducers } from "redux";

import authReducer from "./authReducer";
import blogpostReducer from "./blogpostReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  auth: authReducer,
  blogpost: blogpostReducer,
  errors: errorReducer
});
