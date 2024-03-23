import { createSlice } from "@reduxjs/toolkit";
import { api } from "../api";

const initialState = {
  accessToken: "",
  refreshToken: "",
  user: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: () => initialState,
    setTokens: (state, { payload }) => {
      state.accessToken = payload.accessToken;
      state.refreshToken = payload.refreshToken;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(api.endpoints.login.matchFulfilled, (state, { payload }) => {
      console.log(payload);
      state.accessToken = payload.accessToken;
      state.refreshToken = payload.refreshToken;
      state.user = payload.user;
    });
  },
});

export default authSlice.reducer;

export const { setTokens, logOut } = authSlice.actions;

export const selectAuth = (state) => state.auth;
