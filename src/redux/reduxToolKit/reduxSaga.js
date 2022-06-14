// import { call, put, takeEvery } from "redux-saga/effects";
import { createAsyncThunk } from "@reduxjs/toolkit";

// import { getFetchError, getFetchUser } from "./userState";

// function* workGetUserFetch() {
//   try {
//     const users = yield call(() =>
//       fetch("https://jsonplaceholder.typicode.com/users")
//     );
//     const formatUsers = yield users.json();
//     yield put(getFetchUser(formatUsers));
//   } catch (error) {
//     const err = error.message;
//     yield put(getFetchError(err));
//   }
// }
// function* userSaga() {
//   yield takeEvery("users/getFetchRequest", workGetUserFetch);
// }

// export default userSaga;
const getUsers = createAsyncThunk("users/getUsers", async (a, b) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const formatUsers = await response.json();
    return formatUsers;
  } catch (error) {
    // const err = error;
    // console.log(err.message);
    return b.rejectWithValue(error.message);
  }
});

export default getUsers;
