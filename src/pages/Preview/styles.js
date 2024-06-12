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
    margin-top: 3rem;
    padding: 0 8rem;
  }
`;

export const Content = styled.div`
    max-width: 112rem;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    .tags{
      display: flex;
      align-items: center;
      gap: .8rem;
      margin-block: 3rem;
    }

    p{
      line-height: 2.8rem;
      text-align: justify;
      opacity: .9;
      font-weight: 300;
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