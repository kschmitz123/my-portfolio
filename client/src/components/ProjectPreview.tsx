import React from "react";
import gif from "../assets/frame_with_video.gif";
import styled from "styled-components/macro";
import ListItems from "./ListItems";

export default function ProjectPreview() {
  return (
    <Container>
      <img src={gif} alt="" />
      <span>
        <h3> CRAFTIFIED</h3>
        <p>
          For all DIY Geeks who seek inspiration for the next project or want to
          upload their own to share it with the community.
        </p>
        <ListItems />
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
    </Container>
  );
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
