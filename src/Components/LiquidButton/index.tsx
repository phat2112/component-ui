import React, { ButtonHTMLAttributes } from "react";
import "./index.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const LiquidButton: React.FC<Props> = ({ text, ...props }) => {
  return (
    <button className="button-wrapper" {...props}>
      {text}
    </button>
  );
};

export default LiquidButton;
