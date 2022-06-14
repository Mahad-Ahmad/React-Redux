import React from "react";
import { Button } from "@mui/material";
import { connect } from "react-redux";
import { buyCake, addCake } from "../redux";

function CakeContainer(props) {
  return (
    <>
      <h1>Number of Cakes - {props.item}</h1>
      <Button variant="contained" size="large" onClick={props.addCake}>
        ADD
      </Button>
      <Button variant="contained" size="large" onClick={props.buyCake}>
        BUY
      </Button>
    </>
  );
}

const mapStateToProps = (state, ownProps) => {
  const items = ownProps.cake
    ? state.cake.numOfCakes
    : state.cake.numOfIceCream;
  return {
    item: items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
    addCake: () => dispatch(addCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
