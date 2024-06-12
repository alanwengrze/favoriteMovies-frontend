import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  h1{
    font-size: 2.4rem;
  }
  svg{
    color: ${({ theme }) => theme.COLORS.RED};
    
  }
`;