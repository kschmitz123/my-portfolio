import React from "react";
import InfoBlock from "../components/InfoBlock";
import GitHub from "../assets/GitHub-Mark-64px.png";
import LinkedIn from "../assets/LI-In-Bug-64px.png";
import Email from "../assets/email-64px.png";
import ContactBackground from "../assets/undraw_contact.svg";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(${ContactBackground}) no-repeat center;
  height: 100vh;

  div {
    display: flex;
    align-items: center;
    font-weight: bold;
    background-color: #ffffffe8;
  }
  a {
    text-decoration: none;
    color: var(--main-color);
  }
  img {
    margin-right: 10px;

    :hover {
      transform: scale(1.3);
    }
  }
`;

export default function Contact() {
  return (
    <Container>
      <InfoBlock>
        <h2>Hier bin ich erreichbar:</h2>
      </InfoBlock>
      <InfoBlock>
        <a href="https://github.com/kschmitz123" target="blank">
          <img src={GitHub} alt="GitHub Logo" />
        </a>
        <a href="https://github.com/kschmitz123" target="blank">
          https://github.com/kschmitz123
        </a>
      </InfoBlock>
      <InfoBlock>
        <a
          href="https://www.linkedin.com/in/kathrin-schmitz-5b477812b/"
          target="blank"
        >
          <img src={LinkedIn} alt="LinkedIn Logo" />
        </a>
        <a
          href="https://www.linkedin.com/in/kathrin-schmitz-5b477812b/"
          target="blank"
        >
          https://www.linkedin.com/in/kathrin-schmitz-5b477812b/
        </a>
      </InfoBlock>
      <InfoBlock>
        <a href="mailto:kathrin_schmitz93@gmx.de">
          <img src={Email} alt="Email Logo" />
        </a>
        <p>kathrin_schmitz93 at gmx.de</p>
      </InfoBlock>
    </Container>
  );
}
