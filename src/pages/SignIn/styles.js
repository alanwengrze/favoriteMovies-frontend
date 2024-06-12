import styled from "styled-components";
import backGroundMovie from "../../assets/background.jpg";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: stretch;

`;

export const Form = styled.form`
  width: 60rem;
  padding: 0 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  h1 {
    color: ${({theme})=> theme.COLORS.YELLOW};
  }
  span{
    color: ${({theme})=> theme.COLORS.GRAY_100};
    font-size: 1.4rem;
  }
  p{
    margin-block: 2.4rem;
  }


  > a {
    margin: 1rem auto;
  }
`;

export const BackGroundMovie = styled.div`
  flex: 1;
  background: url(${backGroundMovie}) no-repeat center;
  background-size: cover;
  filter: brightness(0.8) opacity(80%);
`