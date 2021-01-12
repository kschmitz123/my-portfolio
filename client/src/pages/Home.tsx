import React from "react";
import Jumbotron from "../components/Jumbotron";
import ProjectPreview from "../components/ProjectPreview";
import gif from "../assets/frame-with-video.gif";
import ListItems from "../components/ListItems";
import { CraftifiedStack } from "../lib/Stack";
import styled from "styled-components";

export default function Home() {
  return (
    <Container>
      <Jumbotron />
      <ProjectPreview>
        <img src={gif} alt="" />
        <span>
          <h3> CRAFTIFIED</h3>
          <p>
            For all DIY Geeks who seek inspiration for the next project or want
            to upload their own to share it with the community.
          </p>
          <ListItems stack={CraftifiedStack} />
          <div>
            <a
              href="https://github.com/kschmitz123/diy-project-app"
              target="_blank"
              rel="noreferrer"
            >
              Repository
            </a>
            <a
              href="https://craftified.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              App
            </a>
          </div>
        </span>
      </ProjectPreview>
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 60px;
`;
