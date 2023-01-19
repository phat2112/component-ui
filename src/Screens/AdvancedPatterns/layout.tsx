import React from "react";
import { Link } from "react-router-dom";

const LINK_URL = [
  { url: "/advanced-patterns/compound", name: "Compound Components" },
  { url: "/advanced-patterns/props-getter", name: "Props Getters" },
  { url: "/advanced-patterns/state-reducer", name: "State Reducer" },
  { url: "/advanced-patterns/control-props", name: "Control Props" },
];

const AdvancedPatterns = () => {
  return (
    <nav>
      <ul>
        {LINK_URL.map((link) => (
          <li key={link.url}>
            <Link to={link.url}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default AdvancedPatterns;
