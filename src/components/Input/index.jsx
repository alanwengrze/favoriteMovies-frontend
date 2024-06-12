import { Container } from "./styles";
import { FiSearch } from 'react-icons/fi'

export function Input({ ...rest }) {
  return (
    <Container>
      <FiSearch />
      <input {...rest} />
    </Container>
  );
}