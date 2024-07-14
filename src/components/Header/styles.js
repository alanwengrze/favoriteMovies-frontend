import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.header`
  grid-area: header;
  width: 100%;
  height: 10.5rem;
  margin: 0 auto;
  padding: 0 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({theme})=> theme.COLORS.BACKGROUND_700};

  h1{
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.YELLOW};
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    h1{
      display: none;
    }
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.SM}){
    .input-wrapper{
      display: none;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  .profile-wrapper{
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    span{
      width: max-content;
    }

    button{
      background: transparent;
      border: none;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      cursor: pointer;
    }
  }
  > a {
    > img{
      width: 4.8rem;
      height: 4.8rem;
      border-radius: 50%;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}){
    display: none;
  }
 
`;
export const Menu = styled.button`
  background: transparent;
  border: none;
  display: none;
  > svg{
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.YELLOW};
    cursor: pointer;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    display: block;
  }
`;

export const SideMenu = styled.div`
  display: none;
  position: absolute;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  top: 0;
  left: 0;
  z-index: 1;

  &[data-openMenu="true"]{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;

    h1{
      display: block;
      text-align: center;
    }
    .input-wrapper{
      display: flex;
      flex-direction: column;
      gap: 1rem;
      > svg{
          font-size: 2.4rem;
          color: ${({ theme }) => theme.COLORS.GRAY_100};
          cursor: pointer;
        }
    }

    > div{
      display: flex;
    }
  }
`;
