import React from "react";
import styled from "styled-components";
import githubLogo from "./github.svg";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  background-color: #02b3af;
  color: white;
  justify-content: center;

  h1 {
    background-color: #02b3af;
  }
`;

const StyledLink = styled.a`
  margin-left: 20px;
  border-radius: 50%;

  img {
    border-radius: 50%;
  }
`;

export const Header = () => {
  return (
    <>
      <StyledHeader>
        <h1>Welcome to Memes Collection 2023</h1>
        <StyledLink
          href="https://github.com/Alexandra-Haynes/memes-collection"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubLogo} alt="github repository" width="30px" />
        </StyledLink>
      </StyledHeader>
    </>
  );
};
