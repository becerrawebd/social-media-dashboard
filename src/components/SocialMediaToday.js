import React from "react";
import styled from "styled-components";
import Container from "./Container";
import GridTodayCards from "./GridTodayCards";

const H2 = styled.h2`
  color: ${(props) => props.theme.colors.textPrimary};
  margin: 5px 0;
  @media screen and (min-width: 1400px){
    margin-bottom: 1.5rem;
  }
`;

const Div = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
`;

const SocialMediaToday = ({ data }) => {
  return (
    <Container>
      <Div>
        <H2>Overview - Today</H2>
        <GridTodayCards data={data} />
      </Div>
    </Container>
  );
};

export default SocialMediaToday;
