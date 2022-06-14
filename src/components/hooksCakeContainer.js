import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { buyCake, addCake } from "../redux";

function CakeContainer() {
  const [number, setNumber] = useState(1);
  const numberOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Number of Cakes - {numberOfCakes}</h1>
      <TextField
        id="standard"
        value={number}
        // placeholder={number}
        onChange={(e) => setNumber(e.target.value)}
        variant="standard"
      />
      <Button
        variant="contained"
        size="large"
        onClick={() => dispatch(addCake(number))}
      >
        ADD CAKE
      </Button>
      <Button
        variant="contained"
        size="large"
        onClick={() => dispatch(buyCake(number))}
      >
        BUY CAKE
      </Button>
    </>
  );
}

export default CakeContainer;
