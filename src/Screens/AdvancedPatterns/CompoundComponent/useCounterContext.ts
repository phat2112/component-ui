import { createContext, useContext } from "react";

type CounterProps = {
  count: number;
  handleIncrement: () => void;
  handleDecrement: () => void;
};

const CounterContext = createContext<CounterProps>(undefined!);
CounterContext.displayName = "CounterContext";

function useCounterContext() {
  const context = useContext(CounterContext);

  if (!context) {
    throw new Error("useCounterContext is using within Counter");
  }

  return context;
}

export { CounterContext, useCounterContext };
