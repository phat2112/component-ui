import ToggleSwitch from "Components/ui/ToggleSwitch";
import useToggle, { State, Actions } from "./useToggle";

interface Props {
  on: boolean;
  onChange?: (state: State, action: Actions) => void;
}

const Toggle: React.FC<Props> = ({ on: controlledOn, onChange }) => {
  const { on, toggle } = useToggle({ controlledOn, onChange });
  return <ToggleSwitch on={on} onClick={toggle} />;
};

export default Toggle;
