import React from "react";
import "./index.scss";

interface Props {
  placeholder: string;
}

const LiquidInput: React.FC<Props> = ({ placeholder }) => {
  return (
    <div className="input-wrapper">
      <input type="text" placeholder={placeholder} />
    </div>
  );
};

export default LiquidInput;
