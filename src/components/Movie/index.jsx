import { Container } from "./styles";
import { Evaluation } from "../../components/Evaluation";
import { Tag } from "../../components/Tag";

export function Movie({text, ...rest}) {
  return(
    <Container>
      <div className="movie-info">
        <Evaluation title="Madagascar"/>
        <p>{text}</p>
      </div>
      <div className="tags">
        <Tag title="Animação"/>
        <Tag title="Aventura"/>
        <Tag title="Fantasia"/>
      </div>
    </Container>
  )
}