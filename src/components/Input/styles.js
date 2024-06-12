import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border-radius: .5rem;

  > input {
    width: 100%;
    background: transparent;
    border: 0;
    padding: 1.2rem;
  }

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
  > svg{
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    margin-left: 1.2rem;
  }
`;