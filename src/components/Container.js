import styled from "styled-components"

const Container = styled.div`
    box-sizing: border-box;
    margin: 1rem 0;
    width: 80vw;
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 768px) {
        flex-direction: row;
    }
    justify-content: space-between;
`

export default Container;