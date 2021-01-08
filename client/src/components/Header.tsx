import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components/macro";

export default function Header() {
  return (
    <StyledHeader>
      <NavLink exact to="/" activeStyle={{ visibility: "hidden" }}>
        Zurück
      </NavLink>
      <Link to="/about">Über mich</Link>
      <Link to="/projects">Projekte</Link>
      <Link to="/contact">Kontakt</Link>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: var(--main-color);
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;

  a {
    text-decoration: none;
    color: white;
    margin: 0.7rem;
  }
  a:first-of-type {
    position: fixed;
    left: 10px;
  }
`;
