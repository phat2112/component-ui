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

export function reducer(state: State, actions: Actions) {
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
    default:
      throw new Error(`Unsupported action type ${actions.type}`);
  }
}

type Props = {
  controlledOn?: boolean;
  handleChange?: (state: State, actions: Actions) => void;
};

export default function useToggle({ controlledOn, handleChange }: Props) {
  const isControlledOn = controlledOn || false;
  const [state, dispatch] = useReducer(reducer, {
    on: isControlledOn,
  });

  const newControlledOn = controlledOn || state.on;

  const dispatchWithChange = (action: Actions) => {
    if (!controlledOn) {
      dispatch(action);
    }

    handleChange?.(reducer({ ...state, on: newControlledOn }, action), action);
  };

  const toggle = () => dispatchWithChange({ type: actionTypes.toggle });
  const reset = () => dispatchWithChange({ type: actionTypes.reset });

  return { toggle, reset, on: newControlledOn };
}
