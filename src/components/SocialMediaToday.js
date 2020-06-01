import React from "react";
import styled from "styled-components";
import Container from "./Container";
import GridTodayCards from "./GridTodayCards";

const H2 = styled.h2`
    color: ${props => props.theme.colors.textPrimary};
    margin: 5px 0;
`

const SocialMediaToday = ({data}) => {
  return (
    <Container>
        <div>
        <H2>Overview - Today</H2>
        <GridTodayCards />
        </div>
    </Container>
    );
};

export default SocialMediaToday;
