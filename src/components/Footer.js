import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  text-align: center;
  font-size: 0.7rem;
  color: ${(props) => props.theme.colors.textSecondary};
  flex-shrink: 0;
  padding: 0.5rem;
  @media screen and (min-width: 768px) {
    font-size: 0.9rem;
  }
  a {
    color: ${(props) => props.theme.colors.textSecondary};
    font-weight: 700;
    text-decoration: none;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      Design by{" "}
      <a href="https://www.frontendmentor.io/" target="_blank" rel="noopener noreferrer">
        Frontend Mentor
      </a>{" "}
      | Coded by Diego Becerra | becerradiego94@gmail.com
    </StyledFooter>
  );
};

export default Footer;
