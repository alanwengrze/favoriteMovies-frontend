import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  header{
    height: 10.5rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    display: flex;
    padding: 0 4rem;
  }
`;

export const Form = styled.form`
  margin: auto;
  max-width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 4rem;
  svg{
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 2rem;
  }

  div:nth-child(4){
    margin-top: 2rem;
  }

  > button{
    margin-top: 2rem;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: -80px auto 3.2rem;
  width: 14rem;
  height: 14rem;

  > img{
    width: 14rem;
    height: 14rem;
    border-radius: 50%;
  }

  > label{
    width: 4.8rem;
    height: 4.8rem;
    background-color: ${({ theme }) => theme.COLORS.YELLOW};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;
    cursor: pointer;

    svg{
      width: 2rem;
      height: 2rem;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }

    > input{
      display: none;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}){
    width: 10rem;
    height: 10rem;
    > img{
      width: 10rem;
      height: 10rem;
    }
  }
`;