import React, { useState } from "react";
import { CounterContext } from "./useCounterContext";

type Props = {
  children: React.ReactNode;
};

const Counters: React.FC<Props> = ({ children }) => {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <CounterContext.Provider
      value={{ count, handleDecrement, handleIncrement }}
    >
      {children}
    </CounterContext.Provider>
  );
};

export default Counters;
