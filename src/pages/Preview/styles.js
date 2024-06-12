import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 10.5rem auto;
  grid-template-areas:
    "header"
    "content";
  
  > h1{
    color:${({ theme }) => theme.COLORS.YELLOW};
  }
`;