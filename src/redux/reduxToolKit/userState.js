import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getUsers from "./reduxSaga";

const initialState = {
  users: [],
  loading: false,
  error: "",
};

// export const userState = createSlice({
//   name: "users",
//   initialState,
//   reducers: {
//     getFetchRequest: (state) => {
//       state.loading = true;
//     },
//     getFetchUser: (state, action) => {
//       state.users = action.payload;
//       state.loading = false;
//     },
//     getFetchError: (state, action) => {
//       state.error = action.payload;
//       state.loading = false;
//     },
//   },
// });

export const userState = createSlice({
  name: "users",
  initialState,
  extraReducers: {
    [getUsers.pending]: (state) => {
      state.loading = true;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.users = action.payload;
      state.loading = false;
    },
    [getUsers.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

// export const { getFetchRequest, getFetchError, getFetchUser } =
//   userState.actions;

export default userState.reducer;
