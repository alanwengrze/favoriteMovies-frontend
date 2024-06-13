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
    grid-area: content;
    overflow-y: auto;
    padding: 0 8rem;
  }
`;

export const Form = styled.form`
  width: 100%;
  
  .input-wrapper{
    display: flex;
    gap: 2.4rem;
    margin-bottom: 3rem;
  }

  h2{
    font-size: 1.6rem;
    font-weight: 400;
    opacity: .7;
    margin-block: 2rem;
  }

  .tags{
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    background-color: #0c0f0a;
    padding: 1rem;
    border-radius: .5rem;
  }

  .button-wrapper{
    display: flex;
    gap: 3rem;
    margin-top: 3rem;

    > button:first-child{
      background-color: #0c0f0a;
      color: ${({ theme }) => theme.COLORS.YELLOW};
    }
  }
`;