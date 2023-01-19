import React, { useRef } from "react";
import { CSSProperties } from "styled-components";
import "./index.scss";

interface Props {
  content: string;
}

const TypingText: React.FC<Props> = ({ content }) => {
  const textRef = useRef<HTMLParagraphElement | null>(null);

  console.log(textRef.current?.clientWidth);
  return (
    <div className="loader">
      <p
        ref={textRef}
        style={
          {
            "--content-text-width": `${textRef.current?.clientWidth || 0}px`,
          } as CSSProperties
        }
      >
        {content}
      </p>
    </div>
  );
};

export default TypingText;
