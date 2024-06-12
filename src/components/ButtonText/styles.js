import styled from "styled-components";

export const Container = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  line-height: 2.4rem;
  cursor: pointer;
`;