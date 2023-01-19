import React from "react";
import { useCounterContext } from "../useCounterContext";

const Counts = () => {
  const { count } = useCounterContext();
  return <div>{count}</div>;
};

export default Counts;
