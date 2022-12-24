import { useEffect, useState, useRef } from "react";

export default function useClickOutside() {
  const [isComponentVisible, setComponentVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutSide = (e: any) => {
    if (containerRef.current) {
      setComponentVisible(containerRef.current.contains(e.target));
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutSide);

    return () => {
      window.removeEventListener("click", handleClickOutSide);
    };
  }, []);

  return {
    ref: containerRef,
    isComponentVisible,
  };
}
