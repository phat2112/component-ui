import React from "react";
import "./index.scss";

interface Props {
  text: string;
}

const ButtonEffect: React.FC<Props> = ({ text }) => {
  return (
    <button className="button-effect">
      <span className="button-effect__bar button-effect__top" />
      <span className="button-effect__bar button-effect__left" />
      <span className="button-effect__bar button-effect__bottom" />
      <span className="button-effect__bar button-effect__right" />
      <div className="button-effect__background" />
      <p className="button-effect__content">{text}</p>
    </button>
  );
};

export default ButtonEffect;
