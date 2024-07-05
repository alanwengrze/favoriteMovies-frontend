import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled(Link)`
  background: transparent;
  border: none;
  color: ${({ theme, $isactive }) => $isactive ? theme.COLORS.YELLOW : theme.COLORS.GRAY_100};
  line-height: 2.4rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  width: fit-content;

  svg{
    color: ${({ theme }) => theme.COLORS.YELLOW};
  }
`;