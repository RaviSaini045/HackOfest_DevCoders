import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "../slices/authSlice";
import issueSlice from "../slices/issueSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  issue: issueSlice,
});

export default rootReducer;
