import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);
  return (
    <div>
      <button onClick={increment}>+</button>
      <p>{count}</p>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default function ResetKey() {
  const [key, setKey] = useState(0);

  const handleReset = () => setKey((k) => k + 1);

  return (
    <>
      <Counter key={key} />
      <br />
      <button onClick={handleReset}>reset</button>
    </>
  );
}
