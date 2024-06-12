import styled from "styled-components";

export const Container = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.COLORS.YELLOW};
  line-height: 2.4rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;