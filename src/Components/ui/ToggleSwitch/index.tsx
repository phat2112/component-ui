import React from "react";
import "./index.scss";

interface Props {
  on: boolean;
  onClick: () => void;
}

const ToggleSwitch: React.FC<Props> = ({ on, onClick }) => {
  return (
    <>
      <input
        type="checkbox"
        id="switch"
        className="input-switch"
        checked={on}
        onClick={onClick}
      />
      <label
        htmlFor="switch"
        className="toggle"
        style={{ "--active-bgr": "#bada55" } as React.CSSProperties}
      ></label>
    </>
  );
};

export default ToggleSwitch;
