import { Meta } from "@storybook/react";
import styled from "styled-components";
import TypingText from "../Components/ui/TypingText";

export default {
  title: "Common ui/Typing Text",
} as Meta;

const Wrapper = styled.div`
  background: #414345;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Playground = () => {
  return (
    <Wrapper>
      <TypingText content={"Loading..."} />
    </Wrapper>
  );
};
