import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 10.5rem auto;
  grid-template-areas: 
  "header"
  "content";

  > main{
    padding: 0 4rem;
    overflow-y: auto;

    > div{
       > header{
        display: flex;
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

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    > main header{
      flex-direction: column;
      gap: 1rem;
    }
  }

`
export const Menu = styled.ul`
  background-color: ${({theme})=> theme.COLORS.BACKGROUND_900};
  padding-top: 4.4rem;
  text-align: center;
  display: flex;
  gap: 1rem;

  > li {
    	margin-bottom: 2rem;
      padding: .5rem;
      background-color: ${({theme})=> theme.COLORS.BACKGROUND_700};
      border-radius: .5rem;
    button{
      text-transform: capitalize;
    }
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.SM}){
    align-items: center;
  }
`;