import { Container } from "./styles";
import { FiStar } from 'react-icons/fi'

export function Evaluation({title, ...rest}) {
  return (
    <Container>
      <h1>{title}</h1>
      <div className="stars">
        <FiStar />
        <FiStar />
        <FiStar />
        <FiStar />
        <FiStar />
      </div>
    </Container>
  );
}