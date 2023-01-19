import React from "react";
import Counters from "./Counters";
import { Count, Decrement, Increment } from "./components";

const CompoundComponent = () => {
  return (
    <div>
      <Counters>
        <Decrement />
        <Count />
        <Increment />
      </Counters>
    </div>
  );
};

export default CompoundComponent;
