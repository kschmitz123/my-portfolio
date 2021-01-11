import React from "react";
import styled from "styled-components";
import InfoBlock from "../components/InfoBlock";
import experience from "../assets/CV";

const Container = styled.div`
  margin-bottom: 60px;

  div:nth-child(even) {
    margin-left: auto;
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
          <div>
            {job.info?.map((string) => (
              <p>{string}</p>
            ))}
          </div>
        </InfoBlock>
      ))}
    </Container>
  );
}
