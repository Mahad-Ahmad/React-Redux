// import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import userState from "./reduxToolKit/userState";
// import userSaga from "./reduxToolKit/reduxSaga";
// import logger from "redux-logger";
// import thunk from "redux-thunk";
// import RootReducer from "./rootReducers";
// import { composeWithDevTools } from "redux-devtools-extension";

// const store = createStore(
//   RootReducer,
//   composeWithDevTools(applyMiddleware(logger, thunk))
// );

// const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    users: userState,
  },
  // middleware: [saga],
});

// saga.run(userSaga);

export default store;
