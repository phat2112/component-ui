import React from "react";
import { useCounterContext } from "../useCounterContext";

const Decrement = () => {
  const { handleDecrement } = useCounterContext();
  return <button onClick={handleDecrement}>Decrement</button>;
};

export default Decrement;
