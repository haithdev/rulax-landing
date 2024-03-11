import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";

const propTypes = {};

const LoadingScreen = (props) => {
  //! State
  const dispatch = useDispatch();

  //! Function

  //! Render
  return (
    <div className="loading">
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

LoadingScreen.propTypes = propTypes;
export default LoadingScreen;
