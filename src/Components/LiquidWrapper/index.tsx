import React from "react";

import "./index.scss";

interface Props {
  size: number;
  children: React.ReactNode;
}

const LiquidWrapper: React.FC<Props> = ({ size, children }) => {
  return (
    <div
      className="liquid-container"
      style={{ "--liquid-width": `${size}px` } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

export default LiquidWrapper;
