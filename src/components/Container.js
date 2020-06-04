import styled from "styled-components";

const Container = styled.div`
  box-sizing: border-box;
  margin: 10px 0;
  width: 80vw;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
  @media screen and (min-width: 1400px) {
    margin: 3rem 0;
  }
  justify-content: space-between;
`;

export default Container;
