import { Meta } from "@storybook/react";
import styled from "styled-components";
import ButtonEffect from "../Components/ButtonEffect";

export default {
  title: "Common ui/Button Effect",
} as Meta;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #27282c;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Playground = () => {
  return (
    <Wrapper>
      <ButtonEffect text="Button 1" />
    </Wrapper>
  );
};
