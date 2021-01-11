import React, { ReactNode } from "react";
import styled from "styled-components";
import Background from "../assets/background-test.png";

interface Props {
  width?: string;
  background?: string;
}

const Container = styled.div<Props>`
  border-radius: 15px;
  box-shadow: 4px 8px 19px -6px rgba(0, 0, 0, 0.75);
  width: ${(props) => props.width || "50%"};
  color: var(--main-color);
  padding: 10px;
  margin: 30px;
  background: ${(props) =>
    props.background || `url(${Background}) no-repeat center center fixed`};

  img {
    margin: 0 20px;
  }
`;

interface Children {
  children: ReactNode;
  width?: string;
  background?: string;
}

export default function InfoBlock({ children, width, background }: Children) {
  return (
    <Container background={background} width={width}>
      {children}
    </Container>
  );
}
