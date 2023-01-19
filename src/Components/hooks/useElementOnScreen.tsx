import { useEffect, useRef, useState } from "react";

interface Props {
  options: IntersectionObserverInit;
}

export default function useElementOnScreen({ options }: Props) {
  const containerRef = useRef<any>(null);
  const [isVisible, setIsVisible] = useState(false);

  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;

    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    let observer: IntersectionObserver;
    let observeRefValue: any;
    if (containerRef.current) {
      observer = new IntersectionObserver(observerCallback, options);
      observer.observe(containerRef.current);
      observeRefValue = containerRef.current;
    }

    return () => {
      observer.unobserve(observeRefValue);
    };
  }, [options]);

  return { containerRef, isVisible };
}
