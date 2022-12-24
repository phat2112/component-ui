import useClickOutside from "Components/hooks/useClickOutside";

import "./index.scss";

const ClickOutside = () => {
  const { ref, isComponentVisible } = useClickOutside();

  return (
    <div>
      <h1>Click Outside example</h1>
      <div ref={ref} className="outside-container">
        <h3>{isComponentVisible ? "inside" : "outside"}</h3>
      </div>
    </div>
  );
};

export default ClickOutside;
