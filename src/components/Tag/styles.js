import styled from "styled-components";

export const Container = styled.div`
  padding:.4rem .8rem;
  background-color: ${({ theme }) => theme.COLORS.BGYELLOW};
  color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius:.5rem;
  display: inline;
  margin: .8rem .8rem 0 0;
`;