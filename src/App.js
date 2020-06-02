import React, {useState} from "react";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import Header from "./components/Header";
import SocialMediaGeneral from "./components/SocialMediaGeneral";
import SocialMediaToday from "./components/SocialMediaToday";
import data from "./data";

const Layout = styled.div`
  font-family: Inter;
  width: 100vw;
  min-height: 100vh;
  transition: 1s;
  background: ${props => props.theme.colors.backgroundLayout};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const dark = {
  colors: {
    backgroundLayout: "hsl(230, 17%, 14%)",
    backgroundCard: "hsl(228, 28%, 20%)",
    hoverCard: "hsl(229, 26%, 25%)",
    textSecondary: "hsl(228, 34%, 66%)",
    toggle: "linear-gradient(90deg, hsl(210, 78%, 56%) 0%, hsl(146, 68%, 55%) 100%)",
    textPrimary: "hsl(0, 0%, 100%)",
    limeGreen: "hsl(163, 72%, 41%)",
    brightRed: "hsl(356, 69%, 56%)",
    facebook: "hsl(208, 92%, 53%)",
    twitter: "hsl(203, 89%, 53%)",
    instagram: "linear-gradient(90deg, hsl(37, 97%, 70%) 0%, hsl(329, 70%, 58%) 100%)",
    youtube: "hsl(348, 97%, 39%)",
  }
}

const light = {
  colors: {
    backgroundLayout: "hsl(0, 0%, 100%)",
    backgroundCard: "hsl(227, 47%, 96%)",
    hoverCard: "hsl(225, 18%, 87%)",
    textSecondary: "hsl(228, 12%, 44%)",
    textPrimary: "hsl(230, 17%, 14%)",
    toggle: "linear-gradient(90deg, hsl(210, 78%, 56%) 0%, hsl(146, 68%, 55%) 100%)",
    limeGreen: "hsl(163, 72%, 41%)",
    brightRed: "hsl(356, 69%, 56%)",
    facebook: "hsl(208, 92%, 53%)",
    twitter: "hsl(203, 89%, 53%)",
    instagram: "linear-gradient(90deg, hsl(37, 97%, 70%) 0%, hsl(329, 70%, 58%) 100%)",
    youtube: "hsl(348, 97%, 39%)"
  }
}

const App = () => {
  const [darkMode, setDarkMode] = useState(true); 

  return (
    <ThemeProvider theme={ darkMode ? dark : light }>
      <Layout>
        <Header setDarkMode={setDarkMode} isDarkMode={darkMode}/>
        <SocialMediaGeneral data={data}/>
        <SocialMediaToday data={data}/>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
