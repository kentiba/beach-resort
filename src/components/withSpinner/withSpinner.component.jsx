import React from "react";
import "./withSpinner.styles.css";

const withSpinner = () => {
  return (
    <div className="spinner-container">
      <div className="lds-grid">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default withSpinner;
