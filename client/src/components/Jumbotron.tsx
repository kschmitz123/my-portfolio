import React from "react";
import styled from "styled-components/macro";
import ImageSrc from "../assets/kschmitz.jpg";
import GitHub from "../assets/GitHub-Mark-Light-32px.png";
import LinkedIn from "../assets/LI-In-Bug-32px.png";
import Email from "../assets/email-32px.png";

export default function Jumbotron() {
  return (
    <>
      <Container>
        <h2>Hello there!</h2>
        <h3>Ich bin Kathrin, frisch gebackene Webentwicklerin.</h3>
        <img src={ImageSrc} alt="" />
      </Container>
      <Social>
        <a href="https://github.com/kschmitz123" target="blank">
          <img src={GitHub} alt="GitHub Logo" />
        </a>
        <a
          href="https://www.linkedin.com/in/kathrin-schmitz-5b477812b/"
          target="blank"
        >
          <img src={LinkedIn} alt="LinkedIn Logo" />
        </a>
        <a href="mailto:kathrin_schmitz93@gmx.de">
          <img src={Email} alt="Email Logo" />
        </a>
      </Social>
    </>
  );
}
const Container = styled.div`
  background-color: var(--accent-color);
  color: white;
  height: 12rem;
  display: grid;
  width: 100%;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: 1fr 1fr;
  padding: 1.2rem;
  margin-top: 45px;

  img {
    height: 160px;
    width: 160px;
    border-radius: 50%;
    grid-column: 2;
    grid-row: 1 / 3;
    justify-self: end;
  }
  h3,
  h2 {
    margin-bottom: 0;
    text-align: right;
  }
  @media (max-width: 400px) {
    img {
      height: 120px;
      width: 120px;
    }
    h2,
    h3 {
      margin: 0;
    }
  } ;
`;

const Social = styled.div`
  background-color: var(--main-color);
  text-align: center;

  img {
    margin: 5px;
    :hover {
      transform: scale(1.3);
    }
  }
`;
