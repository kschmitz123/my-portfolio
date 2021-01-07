import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";

export default function Header() {
  return (
    <StyledHeader>
      <Link to="">About</Link>
      <Link to="">Projects</Link>
      <Link to="">Contact</Link>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: var(--main-color);
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  a {
    text-decoration: none;
    color: white;
    margin: 0.7rem;
  }
`;
