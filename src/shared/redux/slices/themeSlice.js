import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  globalLoading: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setGlobalLoading: (state, { payload }) => {
      state.globalLoading = payload.isLoading;
    },
  },
});

export default themeSlice.reducer;

export const { setGlobalLoading } = themeSlice.actions;

export const selectTheme = (state) => state.theme;
