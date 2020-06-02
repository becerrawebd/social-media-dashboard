import React from 'react'
import styled from "styled-components";
import CardToday from "./CardToday";

const StyledGrid = styled.div`
    width: 80vw;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    column-gap: 2rem;
    row-gap: 1rem;
    @media screen and (min-width: 768px){
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        column-gap: 2rem;
        row-gap: 1rem;
    }
`

const GridTodayCards = ({data}) => {
    return ( 
        <StyledGrid>
            <CardToday social_media="facebook" data={data}/>
            <CardToday social_media="facebook" data={data}/>
            <CardToday social_media="instagram" data={data}/>
            <CardToday social_media="instagram" data={data}/>
            <CardToday social_media="twitter" data={data}/>
            <CardToday social_media="twitter" data={data}/>
            <CardToday social_media="youtube" data={data}/>
            <CardToday social_media="youtube" data={data}/>
        </StyledGrid>
     );
}
 
export default GridTodayCards;