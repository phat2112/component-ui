import { useReducer } from "react";

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

export function initialReducer(state: State, actions: Actions) {
  switch (actions.type) {
    case actionTypes.toggle: {
      return {
        ...state,
        on: !state.on,
      };
    }

    case actionTypes.reset: {
      return {
        ...state,
        on: false,
      };
    }

    default: {
      throw new Error(`Unsupported type ${actions.type}`);
    }
  }
}

export default function useToggle(reducer = initialReducer) {
  const [state, dispatch] = useReducer(reducer, { on: false });

  const toggle = () => {
    dispatch({ type: actionTypes.toggle });
  };

  const reset = () => dispatch({ type: actionTypes.reset });

  return {
    on: state.on,
    toggle,
    reset,
  };
}
