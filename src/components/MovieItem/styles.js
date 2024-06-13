import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({theme, $isnew})=> $isnew? "transparent" : theme.COLORS.BACKGROUND_900};
  
  color: ${({theme, $isnew})=> $isnew? theme.COLORS.BACKGROUND_700 : theme.COLORS.WHITE};

  border: ${({theme, $isnew})=> $isnew ? `2px dashed ${theme.COLORS.GRAY_100}` : "none"};

  border-radius: .5rem;

  button {
    border: 0;
    background: none;
    

    svg{
      color: ${({theme})=> theme.COLORS.YELLOW};
      font-size: 1.8rem;
      margin-right: 1rem;
    }
  }

  > input{
    width: 100%;
    height: 4.5rem;
    padding: 1.2rem;
    color: ${({theme})=> theme.COLORS.WHITE};
    background: transparent;
    border: 0;
    outline: none;

    &::placeholder{
      color: ${({theme})=> theme.COLORS.GRAY_100};
    }
  }


`;