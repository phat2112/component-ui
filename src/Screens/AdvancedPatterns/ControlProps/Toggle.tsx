import React from "react";
import ToggleSwitch from "Components/ui/ToggleSwitch";
import useToggle, { State, Actions } from "./useToggle";

interface Props {
  on: boolean;
  handleChange: (state: State, actions: Actions) => void;
}

const Toggle: React.FC<Props> = ({ on: controlledOn, handleChange }) => {
  const { on, toggle } = useToggle({ controlledOn, handleChange });
  return <ToggleSwitch on={on} onClick={toggle} />;
};

export default Toggle;
