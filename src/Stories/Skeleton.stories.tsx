import { Meta } from "@storybook/react";
import styled from "styled-components";
import Skeleton from "../Components/ui/Skeleton";

export default {
  title: "Common ui/Skeleton",
} as Meta;

const Wrapper = styled.div`
  width: 1000px;
  height: 50px;
`;

export const Playground = () => {
  return (
    <Wrapper>
      <Skeleton />
    </Wrapper>
  );
};
