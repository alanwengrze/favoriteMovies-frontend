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
    grid-area: content;
    overflow-y: auto;
    padding: 0 8rem;
  }
`;

export const Creator = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 400;

  img{
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
  }
  svg{
    color: ${({ theme }) => theme.COLORS.YELLOW};
  }
`;