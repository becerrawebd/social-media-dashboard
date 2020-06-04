import React from "react";
import styled from "styled-components";
import Container from "./Container";
import SwitchTheme from "./SwitchTheme";

const H1 = styled.h1`
  color: ${(props) => props.theme.colors.textPrimary};
  margin: 5px 0;
`;

const P = styled.p`
  color: ${(props) => props.theme.colors.textSecondary};
  margin: 0;
  font-weight: 700;
`;

const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    color: ${(props) => props.theme.colors.textPrimary};
    margin: 0;
    @media screen and (min-width: 768px) {
      margin: 0 10px;
    }
    height: 26px;
    font-weight: 700;
  }
`;

const Header = ({ isDarkMode, setDarkMode }) => {
  return (
    <Container>
      <div>
        <H1>Social Media Dashboard</H1>
        <P>Total followers: 23,004</P>
      </div>
      <SwitchContainer>
        <p>{isDarkMode ? "Dark" : "Light"} Mode</p>
        <SwitchTheme setDarkMode={setDarkMode} />
      </SwitchContainer>
    </Container>
  );
};

export default Header;
