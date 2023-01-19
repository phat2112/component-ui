import { useState } from "react";
import ToggleSwitch from "Components/ui/ToggleSwitch";
import useToggle, {
  Actions,
  State,
  initialReducer,
  actionTypes,
} from "./useToggle";

const Usage = () => {
  const [timesClicked, setTimesClicked] = useState(0);
  const clickTooMuch = timesClicked >= 4;
  function newReducer(state: State, actions: Actions) {
    if (actions.type === actionTypes.toggle && clickTooMuch) {
      return { ...state, on: state.on };
    }

    return initialReducer(state, actions);
  }
  const { on, toggle, reset } = useToggle(newReducer);

  return (
    <div>
      <ToggleSwitch
        on={on}
        onClick={() => {
          toggle();
          setTimesClicked(timesClicked + 1);
        }}
      />
      <br />
      {clickTooMuch && <p>Whoa you clicked too much!</p>}
      <br />
      <button
        onClick={() => {
          reset();
          setTimesClicked(0);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Usage;
