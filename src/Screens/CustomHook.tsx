import React, { useEffect } from "react";
import Prism from "prismjs";
import {
  useDisclosure,
  useClickOutside,
  useToggle,
  useElementOnScreen,
} from "Constants/hookText";
import Disclosure from "Components/Disclosure";
import ClickOutside from "Components/ClickOutside";
import Toggle from "Components/Toggle";
import DetectElementOnScreen from "Components/DetectElementOnScreen";

import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-okaidia.css";
import "./CustomHook.scss";

interface HookCompProps {
  syntax: string;
  example: React.ReactNode;
  title: string;
}

const HookComponent: React.FC<HookCompProps> = ({ title, syntax, example }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div className="custom-hook">
        {/* syntax */}
        <div className="custom-hook--syntax">
          <pre>
            <code className="language-javascript">{syntax}</code>
          </pre>
        </div>
        {/* example */}
        <div className="custom-hook--example">{example}</div>
      </div>
    </div>
  );
};

const CustomHook = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div>
      <HookComponent
        title="Use Disclosure"
        syntax={useDisclosure}
        example={<Disclosure />}
      />

      <HookComponent
        title="Use Click Outside"
        syntax={useClickOutside}
        example={<ClickOutside />}
      />

      <HookComponent
        title="Use Toggle"
        syntax={useToggle}
        example={<Toggle />}
      />

      <HookComponent
        title="Use Element on Screen"
        syntax={useElementOnScreen}
        example={<DetectElementOnScreen />}
      />
    </div>
  );
};

export default CustomHook;
