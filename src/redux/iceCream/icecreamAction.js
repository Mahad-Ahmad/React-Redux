import { BUY_ICECREAM, ADD_ICECREAM } from "./IcecreamTypes";

export const buyIcecream = () => {
  return {
    type: BUY_ICECREAM,
  };
};
export const addIcecream = () => {
  return {
    type: ADD_ICECREAM,
  };
};
