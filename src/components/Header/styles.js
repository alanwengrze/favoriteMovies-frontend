import styled from "styled-components";

export const Container = styled.header`
  max-width: 160rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 8rem;
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

  > img{
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 50%;
  }
`