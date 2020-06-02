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
  transition: 1s;

  &:hover {
    background: ${(props) => props.theme.colors.hoverCard};
  }
`;

const CardTodayHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  align-items: center;
  color: ${(props) => props.theme.colors.textSecondary};
  transition: 1s;
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
  align-items: center;
  p:first-child {
    margin: 0;
    color: ${(props) => props.theme.colors.textPrimary};
    transition: 1s;
    font-size: 1.5rem;
  }
`;

const CardToday = (props) => {
  const { overview_today } = props.data[props.social_media];
  return (
    <StyledCard>
      <CardTodayHeader>
        <p>Page Views</p>
        {props.social_media === "facebook" && <img src={facebook} alt="logo" />}
        {props.social_media === "twitter" && <img src={twitter} alt="logo" />}
        {props.social_media === "instagram" && (
          <img src={instagram} alt="logo" />
        )}
        {props.social_media === "youtube" && <img src={youtube} alt="logo" />}
      </CardTodayHeader>
      <CardTodayBody>
        {overview_today.views && (<p>{overview_today.views.total}</p>)}
        {overview_today.likes && (<p>{overview_today.likes.total}</p>)}
        <p>
          <img src={up} alt="logo" />
          3%
        </p>
      </CardTodayBody>
    </StyledCard>
  );
};

export default CardToday;
