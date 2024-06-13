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

    > div{
       > header{
        display: flex;
        align-items: center;
        justify-content: space-between;

       > a {
          text-align: center;
          background-color: ${({ theme }) => theme.COLORS.YELLOW};
          color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
          padding: 0.8rem 2.4rem;
          border-radius: .5rem;

          svg{
            color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
          }
        }
      }
    }

    > h1{
      font-size: 3.2rem;
      font-weight: 500;
      margin-top: 3rem;
    }
  }

`