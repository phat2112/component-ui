 
 export const useClickOutside = ` import { useEffect, useState, useRef } from "react";

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
 `  
 export const useDisclosure = ` import { useState } from "react";

interface Props {
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

export default function useDisclosure({
  isOpen: defaultIsOpen = false,
  onOpen = () => {},
  onClose = () => {},
}: Props) {
  const [isOpen, setOpen] = useState(defaultIsOpen);

  return {
    isOpen,
    onOpen: () => {
      onOpen();
      setOpen(true);
    },
    onClose: () => {
      onClose();
      setOpen(false);
    },
  };
}
 `  
 export const useElementOnScreen = ` import { useEffect, useRef, useState } from "react";

interface Props {
  options: IntersectionObserverInit;
}

export default function useElementOnScreen({ options }: Props) {
  const containerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;

    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    let observer: IntersectionObserver;
    let observeRefValue: HTMLElement;
    if (containerRef.current) {
      observer = new IntersectionObserver(observerCallback, options);
      observer.observe(containerRef.current);
      observeRefValue = containerRef.current;
    }

    return () => {
      observer.unobserve(observeRefValue);
    };
  }, [options]);

  return [containerRef, isVisible];
}
 `  
 export const usePrevious = ` import { useRef, useEffect } from "react";

export default function usePrevious(value: any) {
  const previousVal = useRef();

  useEffect(() => {
    previousVal.current = value;
  }, [value]);

  return previousVal;
}
 `  
 export const useToggle = ` import { useCallback, useState } from "react";

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
 ` 