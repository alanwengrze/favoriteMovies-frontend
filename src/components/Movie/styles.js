import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 2rem;
  background-color: ${({theme})=> theme.COLORS.BACKGROUND_800};
  margin-top: 2rem;
  border-radius: 1rem;
  border:none;
  .movie-info{
    font-weight: 300;
    opacity: .9;
    > div{
      display: flex;
      flex-direction: column;
      align-items: baseline;

      svg {
        margin-bottom: 2rem;
      }
    }
  }
`;