import { useState } from "react";
import { Meta } from "@storybook/react";
import ToggleSwitch from "../Components/ui/ToggleSwitch";

export default {
  title: "Common ui/Toggle Switch",
} as Meta;

export const Playground = () => {
  const [on, setOn] = useState(false);
  return <ToggleSwitch on={on} onClick={() => setOn(!on)} />;
};
