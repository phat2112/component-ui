import React, { useEffect, useState, useRef } from "react";
import cn from "classnames";
import "./index.scss";

const SlideBar = () => {
  const [direction, setDirection] = useState(0);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const circleRef = useRef<HTMLDivElement | null>(null);

  const handleMouseDown = (e: any) => {
    if (circleRef.current) {
      setDragging(circleRef.current.contains(e.target));
    }
  };

  const handleMouseUp = () => setDragging(false);

  const handleMouseMove = (e: any) => {
    if (dragging && containerRef.current) {
      const wrapperRect = containerRef.current.getBoundingClientRect();
      let newWidth = e.clientX - 20;
      if (newWidth <= wrapperRect.x) {
        newWidth = 0;
      }

      if (newWidth >= wrapperRect.width) {
        newWidth = wrapperRect.width - 20;
      }
      setDirection(newWidth);
    }
  };

  useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp);

    return () => window.removeEventListener("mouseup", handleMouseUp);
  }, []);

  useEffect(() => {
    if (dragging) {
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dragging]);

  return (
    <div
      className="slide-bar"
      style={{ "--circle-direction": `${direction}px` } as React.CSSProperties}
      ref={containerRef}
      onMouseDown={handleMouseDown}
    >
      <div
        className={cn("slide-bar--circle", {
          "slide-bar--circle-active": dragging,
        })}
        ref={circleRef}
      />
    </div>
  );
};

export default SlideBar;
