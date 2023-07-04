import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isAuth: false,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState: initialState,
  reducers: {
    handleIsAuth(state) {
      state.isAuth = true;
    },
    handleLogoutUser(state) {
      state.isAuth = false;
      state.user = {};
    },
    handleUserLoggedIn(state, action) {
      state.user = action.payload;
    },
  },
});

export const authSliceActions = authSlice.actions;

export default authSlice.reducer;
