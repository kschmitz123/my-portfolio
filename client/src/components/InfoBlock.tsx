import React, { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  width?: string;
}

interface Children {
  children: ReactNode;
  width?: string;
}

export default function InfoBlock({ children, width }: Children) {
  return <Container width={width}>{children}</Container>;
}

const Container = styled.div<Props>`
  border-radius: 15px;
  box-shadow: 4px 8px 19px -6px rgba(0, 0, 0, 0.75);
  width: ${(props) => props.width || "50%"};
  color: var(--main-color);
  padding: 10px;
  margin: 20px;

  img {
    margin: 0 20px;
  }
`;
