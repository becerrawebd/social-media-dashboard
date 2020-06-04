import React from "react";
import styled, { keyframes } from "styled-components";
import { ReactComponent as GithubLogo } from "../images/icon-github.svg";

const A = styled.a`
  position: absolute;
  top: 0;
  right: 0;
`;
const wave = keyframes`
    0%, 100% { transform: rotate(0) }
    20%,60% { transform: rotate(-25deg) }
    40%,80% { transform: rotate(10deg) }
`;

const StyledGithubLogo = styled(GithubLogo)`
  transition: all ease 0.3s;
  &:hover {
    path:nth-child(2) {
      animation: ${wave} 560ms ease-in-out;
    }
  }
  path:first-child {
    fill: ${(props) => props.theme.colors.textPrimary};
  }
  fill: ${(props) => props.theme.colors.backgroundLayout};
`;

const GithubCorner = () => {
  return (
    <A
      href="https://github.com/becerrawebd/social-media-dashboard"
      target="_blank"
      aria_label="View source on GitHub"
      rel="noopener noreferrer"
    >
      <StyledGithubLogo />
    </A>
  );
};

export default GithubCorner;
