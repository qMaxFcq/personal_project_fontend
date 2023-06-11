import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from "../../../api/auth-api";
import { removeAccessToken, setAccessToken } from "../../../utils/localstorage";

const initialState = {
  isAuthenticated: false,
  error: null,
  loading: false,
  user: null,
  initialLoading: false,
};

export const login = createAsyncThunk("/login", async (input, thunkApi) => {
  try {
    const res = await authService.login(input);
    setAccessToken(res.data.accessToken);
  } catch (err) {
    console.log(err);
    return thunkApi.rejectWithValue(err.response.data.message);
  }
});

const authSlice = createSlice({
  name: "/",
  initialState,
  extraReducers: (builder) =>
    builder.addCase(login.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    }),
});

export default authSlice.reducer;
