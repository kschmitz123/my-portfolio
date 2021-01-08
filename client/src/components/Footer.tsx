import React from "react";
import styled from "styled-components";

export default function Footer() {
  return <StyledFooter>@Kathrin Schmitz</StyledFooter>;
}
const StyledFooter = styled.footer`
  background-color: var(--main-color);
  height: 3rem;
  color: white;
  display: grid;
  place-content: center;
  bottom: 0;
  position: fixed;
  width: 100%;
`;
