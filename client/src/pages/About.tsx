import React from "react";
import styled from "styled-components";
import InfoBlock from "../components/InfoBlock";
import experience from "../lib/CV";
import Background from "../assets/background-test.png";

const Container = styled.div`
  margin: 60px 0;
  display: grid;
  place-items: center;

  div {
    background: url(${Background}) no-repeat center center fixed;
    width: 80%;
  }
  @media (min-width: 400px) {
    div:nth-child(even) {
      justify-self: end;
      width: 50%;
    }
    div:nth-child(odd) {
      justify-self: start;
      width: 50%;
    }
  }
`;

export default function About() {
  return (
    <Container>
      {experience.map((job) => (
        <InfoBlock>
          <img src={job.img} alt="" />
          <h3>{job.title}</h3>
          <h4>{job.location}</h4>
          <span>
            {job.info?.map((string) => (
              <p>{string}</p>
            ))}
          </span>
        </InfoBlock>
      ))}
    </Container>
  );
}
