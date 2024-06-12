import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 10.5rem auto;
  grid-template-areas: 
  "header"
  "content";

  > main{
    padding: 0 8rem;
    overflow-y: auto;

    > h1{
      font-size: 3.2rem;
      font-weight: 500;
      margin-top: 3rem;
    }
  }

`