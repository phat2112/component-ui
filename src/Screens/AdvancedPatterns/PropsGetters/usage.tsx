import ToggleSwitch from "Components/ui/ToggleSwitch";
import useToggle from "./useToggle";

const Usage = () => {
  const { on, getToggleProps } = useToggle();
  return (
    <>
      <ToggleSwitch
        {...getToggleProps({
          on,
          onClick: () => console.log("demo prop getter"),
        })}
      />
      <hr />
      <button aria-label="custom-button" {...getToggleProps({})}>
        {on ? "on" : "off"}
      </button>
    </>
  );
};

export default Usage;
