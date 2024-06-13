import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 25rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border: none;
  border-radius: .5rem;
  padding: 1.6rem;
  resize: none;
`;