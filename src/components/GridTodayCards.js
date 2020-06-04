import React from "react";
import styled from "styled-components";
import CardToday from "./CardToday";

const StyledGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  column-gap: 2rem;
  row-gap: 1rem;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    column-gap: 2rem;
  }
`;

const GridTodayCards = ({ data }) => {
  return (
    <StyledGrid>
      <CardToday
        social_media="facebook"
        data={data.facebook.overview_today.page_views}
        title="Page Views"
      />
      <CardToday
        social_media="facebook"
        data={data.facebook.overview_today.likes}
        title="Likes"
      />
      <CardToday
        social_media="instagram"
        data={data.instagram.overview_today.likes}
        title="Likes"
      />
      <CardToday
        social_media="instagram"
        data={data.instagram.overview_today.profile_views}
        title="Profile Views"
      />
      <CardToday
        social_media="twitter"
        data={data.twitter.overview_today.retweets}
        title="Retweets"
      />
      <CardToday
        social_media="twitter"
        data={data.twitter.overview_today.likes}
        title="Likes"
      />
      <CardToday
        social_media="youtube"
        data={data.youtube.overview_today.likes}
        title="Likes"
      />
      <CardToday
        social_media="youtube"
        data={data.youtube.overview_today.total_views}
        title="Total Views"
      />
    </StyledGrid>
  );
};

export default GridTodayCards;
