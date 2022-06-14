import { combineReducers } from "redux";
import cakeReducers from "./cake/cakeReducer";
import icecreamReducers from "./iceCream/icecreamReducer";
import UseReducer from "./user/userReducer";

const rootReducer = combineReducers({
  cake: cakeReducers,
  icecream: icecreamReducers,
  user: UseReducer,
});

export default rootReducer;
