import React from "react";
import { useCounterContext } from "../useCounterContext";

const Increment = () => {
  const { handleIncrement } = useCounterContext();
  return <button onClick={handleIncrement}>Increment</button>;
};

export default Increment;
