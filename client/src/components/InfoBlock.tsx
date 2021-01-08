import React, { ReactNode } from "react";
import styled from "styled-components";
import Background from "../assets/background-test.png";

const Container = styled.div`
  border-radius: 15px;
  box-shadow: 4px 8px 19px -6px rgba(0, 0, 0, 0.75);
  width: 50%;
  color: var(--main-color);
  padding: 10px;
  margin: 30px;
  background: url(${Background}) no-repeat center center fixed;
`;

interface Props {
  children: ReactNode;
}

export default function InfoBlock({ children }: Props) {
  return <Container>{children}</Container>;
}
