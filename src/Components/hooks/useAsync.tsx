import { useReducer, useEffect, useCallback } from "react";

export type State = {
  data: any | null;
  error: any | null;
  status: "idle" | "pending" | "success" | "error";
};

export type actionTypes = {
  type: State["status"];
  data?: any;
  error?: any;
};

function asyncReducer(state: State, actions: actionTypes) {
  switch (actions.type) {
    case "idle":
    case "pending": {
      return {
        ...state,
        status: actions.type,
      };
    }

    case "success": {
      return {
        ...state,
        status: actions.type,
        data: actions.data,
        error: null,
      };
    }

    case "error": {
      return {
        ...state,
        status: actions.type,
        data: null,
        error: actions.error,
      };
    }
  }
}

export default function useAsync() {
  const [state, dispatch] = useReducer(asyncReducer, {
    data: null,
    error: null,
    status: "idle",
  });

  const run = useCallback((promise: Promise<any>) => {
    dispatch({ type: "pending" });
    promise.then(
      (data) => {
        dispatch({ type: "success", data });
      },
      (error) => {
        dispatch({ type: "error", error: error });
      }
    );
  }, []);

  return { ...state, run };
}
