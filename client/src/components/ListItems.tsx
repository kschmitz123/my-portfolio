import React from "react";
import styled from "styled-components";

export default function ListItems({ stack }: Props) {
  return (
    <List>
      {stack.map((tool, index) => (
        <li key={index}>{tool}</li>
      ))}
    </List>
  );
}

interface Props {
  stack: string[];
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
