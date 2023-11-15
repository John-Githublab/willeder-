import "./box.scss";
import React from "react";
function Box({ style, borderWidth, className }) {
  return (
    <div className="flex mt-80 mb-80 center box__main ">
      <div
        className={`box ${className}`}
        style={{ borderWidth: borderWidth }}
      ></div>
    </div>
  );
}

export default Box;
