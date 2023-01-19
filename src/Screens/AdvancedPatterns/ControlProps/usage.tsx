import { useState } from "react";
import Toggle from "./Toggle";
import { State, Actions, actionTypes, reducer } from "./useToggle";

const Usage = () => {
  const [bothOn, setBothOn] = useState(false);
  const [clickedTime, setClickedTime] = useState(0);
  const clickedMostTime = clickedTime >= 4;

  const handleChange = (state: State, actions: Actions) => {
    console.log({ actions, clickedMostTime });
    if (actions.type === actionTypes.toggle && clickedMostTime) {
      return;
    }

    console.log({ state, actions });
    setBothOn(state.on);
    setClickedTime((c) => c + 1);
    reducer(state, actions);
  };

  return (
    <div>
      <h1>Controlled props</h1>
      <Toggle on={bothOn} handleChange={handleChange} />
      <Toggle on={bothOn} handleChange={handleChange} />
      <br />
      <button
        onClick={() => handleChange({ on: false }, { type: actionTypes.reset })}
      >
        Reset
      </button>
    </div>
  );
};

export default Usage;
