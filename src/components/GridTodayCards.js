import React from 'react'
import styled from "styled-components";
import CardToday from "./CardToday";

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: 50px 50px 50px 50px;
    grid-template-rows: 20px 20px 20px 20x;
`

const GridTodayCards = () => {
    return ( 
        <StyledGrid>
            <CardToday />
            <CardToday />
            <CardToday />
            <CardToday />
            <CardToday />
            <CardToday />
            <CardToday />
            <CardToday />
        </StyledGrid>
     );
}
 
export default GridTodayCards;