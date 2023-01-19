import React from "react";
import useElementOnScreen from "../hooks/useElementOnScreen";
import "./index.scss";

const DetectElementOnScreen = () => {
  const { containerRef, isVisible } = useElementOnScreen({
    options: {
      root: null,
      threshold: 0.5,
    },
  });
  return (
    <div className="element-on-screen__wrapper">
      <div className="element-on-screen__child"> div 1</div>
      <div ref={containerRef} className="element-on-screen__child">
        {" "}
        div 2 {`${isVisible}`}
      </div>
      <div className="element-on-screen__child"> div 3</div>
    </div>
  );
};

export default DetectElementOnScreen;
