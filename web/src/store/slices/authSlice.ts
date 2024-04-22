import User from "@/types/user";
import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  user: User | null;
  token: string | null;
  error: string | null;
  isLoading: boolean;
}

const initialState: AuthState = {
  user: null,
  token: null,
  error: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    logoutUser(state) {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, setLoading, setError, logoutUser } = authSlice.actions;

export default authSlice.reducer;
