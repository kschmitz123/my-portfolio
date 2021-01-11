import React, { ReactNode } from "react";
import styled from "styled-components/macro";

interface Children {
  children: ReactNode;
}

export default function ProjectPreview({ children }: Children) {
  return <Container>{children}</Container>;
}
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  margin: 2rem;
  padding: 1rem;
  border-radius: 15px;
  box-shadow: 4px 8px 19px -6px rgba(0, 0, 0, 0.75);
  color: var(--main-color);
  margin-bottom: 70px;

  a {
    border-radius: 15px;
    margin: 5px;
    padding: 10px;
    background-color: var(--accent-color);
    text-decoration: none;
    color: var(--main-color);
  }
  div {
    margin-top: 20px;
  }
`;
