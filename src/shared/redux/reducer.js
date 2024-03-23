import { combineReducers } from "@reduxjs/toolkit";
import { api } from "./api";

import authReducer from "./slices/authSlice";
import themeReducer from "./slices/themeSlice";

export const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,

  auth: authReducer,
  theme: themeReducer,
});
