import React from "react";
import styled from "styled-components";
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import instagram from "../images/icon-instagram.svg";
import youtube from "../images/icon-youtube.svg";
import up from "../images/icon-up.svg";
import down from "../images/icon-down.svg";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0;
  position: relative;
  margin-bottom: 1rem;
  background: ${(props) => props.theme.colors.backgroundCard};
  border-radius: 5px;
  cursor: pointer;
  @media (min-width: 768px) {
    margin-right: 2rem;
    margin-bottom: 0;
    &:last-child {
      margin-right: 0;
    }
  }
  &:hover {
    background: ${(props) => props.theme.colors.hoverCard};
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 0.5rem;
  @media screen and (min-width: 1400px){
    padding-top: 1.5rem;
  }
  img {
    object-fit: contain;
    margin-right: 7px;
  }
  p {
    font-weight: 700;
    font-size: 13px;
    color: ${(props) => props.theme.colors.textSecondary};
  }
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 1400px) {
    margin: 1rem 0;
  }
  
  p {
    margin: 0;
    &:first-child {
      font-size: 3rem;
      font-weight: 700;
      color: ${(props) => props.theme.colors.textPrimary};
    }
    &:last-child {
      font-size: 0.7rem;
      letter-spacing: 5px;
      text-transform: uppercase;
      color: ${(props) => props.theme.colors.textSecondary};
    }
  }
`;

const CardFooter = styled.div`
  display: flex;
  @media screen and (min-width: 1400px){
    padding-bottom: 1rem;
  }
  img {
    object-fit: contain;
  }
  p {
    color: ${(props) =>
      props.followers >= 0
        ? props.theme.colors.limeGreen
        : props.theme.colors.brightRed};
  }
`;

const StyledBorder = styled.div`
  height: 5px;
  background: ${(props) => props.theme.colors[props.social_media]};
  position: absolute;
  width: 100%;
  border-radius: 5px 5px 0 0;
`;

const Card = (props) => {
  const cardData = props.data[props.social_media];
  return (
    <StyledCard social_media={props.social_media}>
      <StyledBorder social_media={props.social_media} />
      <CardHeader>
        {props.social_media === "facebook" && <img src={facebook} alt="logo" />}
        {props.social_media === "twitter" && <img src={twitter} alt="logo" />}
        {props.social_media === "instagram" && (
          <img src={instagram} alt="logo" />
        )}
        {props.social_media === "youtube" && <img src={youtube} alt="logo" />}
        <p>@becerrawebd</p>
      </CardHeader>
      <CardBody>
        {props.social_media && <p>{cardData.followers}</p>}
        <p>Followers</p>
      </CardBody>
      <CardFooter followers={cardData.todayFollowers}>
        <img src={cardData.todayFollowers >= 0 ? up : down} alt="logo" />
        {props.data && (
          <p>
            {cardData.todayFollowers >= 0
              ? cardData.todayFollowers
              : cardData.todayFollowers * -1}
          </p>
        )}
      </CardFooter>
    </StyledCard>
  );
};

export default Card;
