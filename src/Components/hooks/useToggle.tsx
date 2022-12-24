import { useCallback, useState } from "react";

export default function useToggle(
  initialValue = false
): [boolean, () => void, (value: boolean) => void] {
  const [isShow, setToggle] = useState(initialValue);

  const toggle = useCallback(() => {
    setToggle(!isShow);
  }, [isShow]);

  const customToggle = useCallback(
    (value: typeof initialValue) => setToggle(value),
    []
  );

  return [isShow, toggle, customToggle];
}
