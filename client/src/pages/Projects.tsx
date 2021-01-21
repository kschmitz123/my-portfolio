import React from "react";
import InfoBlock from "../components/InfoBlock";
import ListItems from "../components/ListItems";
import ProjectPreview from "../components/ProjectPreview";
import craftifiedGif from "../assets/frame-with-video.gif";
import wishlistGif from "../assets/wishlist.gif";
import { CraftifiedStack, TotalStack, WishlistStack } from "../lib/Stack";
import styled from "styled-components/macro";

export default function Projects() {
  return (
    <Container>
      <InfoBlock width={"80%"}>
        <h2>Tech Stack</h2>
        <ListItems stack={TotalStack} />
      </InfoBlock>
      <ProjectPreview>
        <img src={craftifiedGif} alt="" />
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
      <ProjectPreview>
        <img src={wishlistGif} alt="" />
        <span>
          <h3> Wishlist (in progress)</h3>
          <p>Create shared wishlists for Christmas or birthdays.</p>
          <ListItems stack={WishlistStack} />
          <div>
            <a
              href="https://github.com/kschmitz123/wishlist"
              target="_blank"
              rel="noreferrer"
            >
              Repository
            </a>
            <a
              href="https://my-wishlist-app.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              App
            </a>
          </div>
        </span>
      </ProjectPreview>
      <ProjectPreview>tba</ProjectPreview>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 45px 0;
`;
