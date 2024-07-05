import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  :root{
    font-size: 62.5%;
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