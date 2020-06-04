import React from "react";
import styled from "styled-components";
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import instagram from "../images/icon-instagram.svg";
import youtube from "../images/icon-youtube.svg";
import up from "../images/icon-up.svg";
import down from "../images/icon-down.svg";

const StyledCard = styled.div`
  width: 100%;
  border-radius: 5px;
  background: ${(props) => props.theme.colors.backgroundCard};
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.colors.hoverCard};
  }
`;

const CardTodayHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  @media screen and (min-width: 1400px){
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    padding-top: 1rem;
  }
  align-items: center;
  color: ${(props) => props.theme.colors.textSecondary};
  font-weight: 700;
  img {
    object-fit: contain;
  }
`;
const CardTodayBody = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  @media screen and (min-width: 1400px){
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    padding-bottom: 1rem;
  }
  align-items: center;
  p:first-child {
    margin: 0;
    color: ${(props) => props.theme.colors.textPrimary};
    font-size: 1.5rem;
  }
  p:last-child {
    display: flex;
    img {
      object-fit: contain;
    }
    color: ${(props) =>
      props.percentage >= 0
        ? props.theme.colors.limeGreen
        : props.theme.colors.brightRed};
  }
`;

const CardToday = (props) => {
  const cardData = props.data;
  return (
    <StyledCard>
      <CardTodayHeader>
        <p>{props.title}</p>
        {props.social_media === "facebook" && <img src={facebook} alt="logo" />}
        {props.social_media === "twitter" && <img src={twitter} alt="logo" />}
        {props.social_media === "instagram" && (
          <img src={instagram} alt="logo" />
        )}
        {props.social_media === "youtube" && <img src={youtube} alt="logo" />}
      </CardTodayHeader>
      <CardTodayBody percentage={cardData.percentage}>
        <p>{cardData.total}</p>
        <p>
          <img src={cardData.percentage >= 0 ? up : down} alt="logo" />
          {cardData.percentage >= 0
            ? cardData.percentage
            : cardData.percentage * -1}
          %
        </p>
      </CardTodayBody>
    </StyledCard>
  );
};

export default CardToday;
