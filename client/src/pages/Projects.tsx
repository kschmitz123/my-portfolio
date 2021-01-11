import React from "react";
import InfoBlock from "../components/InfoBlock";
import ListItems from "../components/ListItems";
import ProjectPreview from "../components/ProjectPreview";
import gif from "../assets/frame-with-video.gif";

export default function Projects() {
  return (
    <>
      <InfoBlock width={"95%"}>
        <h2>Tech Stack</h2>
        <ListItems />
      </InfoBlock>
      <ProjectPreview>
        <img src={gif} alt="" />
        <span>
          <h3> CRAFTIFIED</h3>
          <p>
            For all DIY Geeks who seek inspiration for the next project or want
            to upload their own to share it with the community.
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
      </ProjectPreview>
      <ProjectPreview>tba</ProjectPreview>
    </>
  );
}
