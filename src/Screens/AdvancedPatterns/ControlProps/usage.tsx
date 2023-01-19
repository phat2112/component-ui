import React, { useState } from "react";
import Toggle from "./Toggle";
import { Actions, State, actionTypes } from "./useToggle";

const Usage = () => {
  const [bothOn, setBothOn] = useState(false);
  const [timesClicked, setTimesClicked] = useState(0);
  const handleSyncedChange = (state: State, actions: Actions) => {
    if (actions.type === actionTypes.toggle && timesClicked > 4) {
      return;
    }

    console.log("state", state);
    setBothOn(state.on);
    setTimesClicked((c) => c + 1);
  };

  console.log("bothOn", bothOn);
  return (
    <div>
      <div>
        <h1>Controlled props</h1>
        <Toggle on={bothOn} onChange={handleSyncedChange} />
        <Toggle on={bothOn} onChange={handleSyncedChange} />

        <br />
        <button onClick={() => setBothOn(false)}>Reset</button>
      </div>

      <div>
        <h1>Uncontrolled props</h1>
        <Toggle on={false} />
      </div>
    </div>
  );
};

export default Usage;
