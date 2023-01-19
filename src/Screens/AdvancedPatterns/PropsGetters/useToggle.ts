import { useState } from "react";

function callAll(...fns: any[]) {
  return (...args: any[]) => {
    for (const fn of fns) {
      fn?.(...args);
    }
  };
}

export default function useToggle() {
  const [on, setOn] = useState(false);
  const toggle = () => setOn(!on);

  function getToggleProps<T>({
    onClick,
    ...props
  }: T & { onClick?: () => void }) {
    return {
      "aria-pressed": on,
      onClick: () => {
        callAll(onClick, toggle);
      },
      ...props,
    };
  }

  return {
    on,
    toggle,
    getToggleProps,
  };
}
