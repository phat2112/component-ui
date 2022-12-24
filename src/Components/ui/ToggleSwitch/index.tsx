import React from "react";
import "./index.scss";

const ToggleSwitch = () => {
  return (
    <>
      <input type="checkbox" id="switch" className="input-switch" />
      <label
        htmlFor="switch"
        className="toggle"
        style={{ "--active-bgr": "#bada55" } as React.CSSProperties}
      ></label>
    </>
  );
};

export default ToggleSwitch;
