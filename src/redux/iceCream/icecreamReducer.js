import { BUY_ICECREAM, ADD_ICECREAM } from "./IcecreamTypes";

const initialState = {
  numberOfIcecream: 20,
  numberOfCake: 10,
};

const icecreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numberOfIcecream: state.numberOfIcecream - 1,
      };
    case ADD_ICECREAM:
      return {
        ...state,
        numberOfIcecream: state.numberOfIcecream + 1,
      };
    default:
      return state;
  }
};

export default icecreamReducer;
