import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.YELLOW};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  text-align: center;
  border: 0;
  border-radius: .5rem;
  padding: 1rem;
`