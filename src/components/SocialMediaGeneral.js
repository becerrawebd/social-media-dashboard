import React from "react";
import CardTotal from "./CardTotal";
import Container from "./Container";

const SocialMediaGeneral = ({data}) => {
  return (
    <Container>
      <CardTotal social_media="facebook" data={data}/>
      <CardTotal social_media="twitter" data={data}/>
      <CardTotal social_media="instagram" data={data}/>
      <CardTotal social_media="youtube" data={data}/>
    </Container>
  );
};

export default SocialMediaGeneral;
