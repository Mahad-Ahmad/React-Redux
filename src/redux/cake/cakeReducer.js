import { BUY_CAKE, ADD_CAKE } from "./cakeTypes";

const initialState = {
  numOfCakes: 10,
  numOfIceCream: 20,
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      };
    case ADD_CAKE:
      debugger;
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };

    default:
      return state;
  }
};

export default cakeReducer;
