import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    error: null,
    isLoading: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    loginUserSuccess(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logoutUser(state) {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, setLoading, setError, loginUserSuccess, logoutUser } =
  authSlice.actions;

export default authSlice.reducer;
