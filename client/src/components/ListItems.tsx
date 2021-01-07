import React from "react";
import styled from "styled-components";

const Stack: string[] = [
  "react",
  "react router",
  "react hook form",
  "styled components",
  "react query",
  "node.js",
  "express",
  "mongoDB",
  "cloudinary",
  "heroku",
  "git workflow",
  "storybook",
];

export default function ListItems() {
  return (
    <List>
      {Stack.map((tool, index) => (
        <li key={index}>{tool}</li>
      ))}
    </List>
  );
}

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;

  li {
    border: 1px solid black;
    border-radius: 15px;
    margin: 5px;
    padding: 5px;
  }
`;
