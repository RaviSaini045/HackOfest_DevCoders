import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "../slices/authSlice";
import issueSlice from "../slices/issueSlice";
import projectSlice from "../slices/projectSlice";
import loaderSlice from "../slices/LoaderSlice";
import commentSlice from "../slices/commentSlice";
const rootReducer = combineReducers({
  auth: authReducer,
  issue: issueSlice,
  project:projectSlice,
  loader:loaderSlice,
  comment:commentSlice,
});

export default rootReducer;
