import "./box.scss";
import React from "react";
function Box({
  rightColor = null,
  leftColor = null,
  topColor = null,
  bottomColor = null,
  boxWidth = null,
  animationDuration = null,
}) {
  const styles = {
    ...(rightColor && { borderRightColor: `${rightColor}` }),
    ...(leftColor && { borderLeftColor: `${leftColor}` }),
    ...(topColor && { borderTopColor: `${topColor}` }),
    ...(bottomColor && { borderBottomColor: `${bottomColor}` }),
    ...(boxWidth && { borderWidth: `${boxWidth}` }),
    ...(animationDuration && {
      animationDuration: `${animationDuration}`,
    }),
  };
  return (
    <div className="flex mt-80 mb-80 center box__main">
      <div className="box" style={styles}></div>
    </div>
  );
}

export default Box;
