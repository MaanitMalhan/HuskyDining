import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
  token: localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { token, ...userInfo } = action.payload;
      state.userInfo = userInfo;
      state.token = token;
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      localStorage.setItem("token", JSON.stringify(token));
    },
    setAccessToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", JSON.stringify(action.payload));
    },
    logout: (state, action) => {
      state.userInfo = null;
      state.token = null;
      localStorage.removeItem("userInfo");
      localStorage.removeItem("token");
    },
  },
});

export const { setCredentials, setAccessToken, logout } = authSlice.actions;
export default authSlice.reducer;

export const selectUserInfo = (state) => state.auth.userInfo;
export const selectAccessToken = (state) => state.auth.token;
