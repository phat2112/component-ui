import React from "react";
import useToggle from "Components/hooks/useToggle";

const Toggle = () => {
  const [isShow, toggle] = useToggle();
  return (
    <div>
      <h1>Toggle example</h1>

      <button onClick={toggle}>click me</button>
      {isShow && (
        <div>
          <h1>content displayed</h1>
        </div>
      )}
    </div>
  );
};

export default Toggle;
