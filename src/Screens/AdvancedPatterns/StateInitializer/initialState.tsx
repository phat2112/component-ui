import { useState } from "react";

interface Props {
  initialCount?: number;
}

const InitialState: React.FC<Props> = ({ initialCount = 2 }) => {
  const [count, setCount] = useState(initialCount);

  const handleReset = () => setCount(initialCount);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount((c) => c + 1)}>increment</button>
      <button onClick={() => setCount((c) => c - 1)}>decrement</button>

      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default InitialState;
