import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components/macro";

export default function Header() {
  return (
    <StyledHeader>
      <NavLink exact to="/" activeStyle={{ visibility: "hidden" }}>
        Zurück
      </NavLink>
      <Link to="/contact">Kontakt</Link>
      <Link to="/projects">Projekte</Link>
      <Link to="/about">Über mich</Link>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: var(--main-color);
  height: 3rem;
  width: 100%;
  position: fixed;
  top: 0;

  a {
    float: right;
    text-decoration: none;
    color: white;
    margin: 0.7rem;
  }
  a:first-of-type {
    float: left;
  }
`;
