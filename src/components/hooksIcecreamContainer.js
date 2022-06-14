import React from "react";
import { Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { buyIcecream, addIcecream } from "../redux";

function CakeContainer(props) {
  const items = props.cake
    ? (state) => state.cake.numberOfCake
    : (state) => state.cake.numberOfIcecream;
  const numberOfIcecream = useSelector(items);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Number of IceCreams- {numberOfIcecream}</h1>
      <Button
        variant="contained"
        size="large"
        onClick={() => dispatch(buyIcecream())}
      >
        ADD CAKE
      </Button>
      <Button
        variant="contained"
        size="large"
        onClick={() => dispatch(addIcecream())}
      >
        BUY CAKE
      </Button>
    </>
  );
}

export default CakeContainer;
