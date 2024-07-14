import { createGlobalStyle } from "styled-components";
import { DEVICE_BREAKPOINTS } from "./deviceBreakPoints";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  :root{
    font-size: 62.5%;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      body{
        font-size: 1.4rem;
      }
    }
    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
      body, p, button{
        font-size: 1.2rem;
      }
      h1{
        font-size: 1.8rem;
      }
    }
  }

  body, button, input, textarea{
    font-family: 'Roboto Slab', serif;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 1.6rem;
  }
  
  li{
    list-style: none;
  }
  
  a{
    text-decoration: none;
  }

  button{
    cursor: pointer;
  }

`;