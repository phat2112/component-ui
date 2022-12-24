import { useRef, useEffect } from "react";

export default function usePrevious(value: any) {
  const previousVal = useRef();

  useEffect(() => {
    previousVal.current = value;
  }, [value]);

  return previousVal;
}
