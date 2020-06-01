import React from "react";
import styled from "styled-components";
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import instagram from "../images/icon-instagram.svg";
import youtube from "../images/icon-youtube.svg";
import up from "../images/icon-up.svg";
import down from "../images/icon-down.svg";

// border-style: 4px solid ${props => props.theme.colors[props.social_media]};

const StyledCard = styled.div`
position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0.5rem;
  background: ${(props) => props.theme.colors.backgroundCard};
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 2rem;
  &:after {
      top: 0;
      left: 0;
      position: absolute;
    content: "";
    height: 5px;
    display: block;
    background: ${(props) => props.theme.colors[props.social_media]};
  }
  @media (min-width: 768px) {
    margin-right: 2rem;
  }
  &:hover {
    background: ${(props) => props.theme.colors.hoverCard};
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
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
  margin: 15px 0;
  p {
    margin: 0;
    &:first-child {
      font-size: 4rem;
      font-weight: 700;
      color: ${(props) => props.theme.colors.textPrimary};
    }
    &:last-child {
      font-size: 0.8rem;
      letter-spacing: 5px;
      text-transform: uppercase;
      color: ${(props) => props.theme.colors.textSecondary};
    }
  }
`;

const CardFooter = styled.div`
  display: flex;
  img {
    object-fit: contain;
  }
  p {
    color: ${(props) => props.theme.colors.limeGreen};
  }
`;

const Card = (props) => {
  const cardData = props.data[props.social_media];
  return (
    <StyledCard social_media={props.social_media}>
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
      <CardFooter>
        <img src={cardData.todayFollowers >= 0 ? up : down} alt="logo" />
        {props.data && <p>{cardData.todayFollowers} Today</p>}
      </CardFooter>
    </StyledCard>
  );
};

export default Card;
