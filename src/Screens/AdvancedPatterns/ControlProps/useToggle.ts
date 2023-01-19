import { useReducer, useRef } from "react";

export type State = {
  on: boolean;
};

export const actionTypes = {
  toggle: "toggle",
  reset: "reset",
};

export type Actions = {
  type: typeof actionTypes[keyof typeof actionTypes];
};

export function reducer(state: State, actions: Actions) {
  switch (actions.type) {
    case actionTypes.toggle: {
      return { ...state, on: !state.on };
    }

    case actionTypes.reset: {
      return { ...state, on: false };
    }

    default: {
      throw new Error(`Unsupported type ${actions.type}`);
    }
  }
}
export type ReducerType = typeof reducer;

export default function useToggle({
  on = false,
  onChange,
  controlledOn,
}: {
  on?: boolean;
  onChange?: (state: State, actions: Actions) => void;
  controlledOn?: boolean;
}) {
  const { current: initialState } = useRef({ on });
  const [state, dispatch] = useReducer(reducer, initialState);

  const newOnState = controlledOn || state.on;

  const dispatchWithChanges = (action: Actions) => {
    if (!controlledOn) {
      dispatch(action);
    }
    onChange?.(reducer({ ...state, on: newOnState }, action), action);
  };

  const toggle = () => dispatchWithChanges({ type: actionTypes.toggle });
  const reset = () => dispatchWithChanges({ type: actionTypes.reset });

  return {
    on: newOnState,
    toggle,
    reset,
  };
}
