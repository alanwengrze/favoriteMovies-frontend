import { Container } from "./styles";
import { Evaluation } from "../../components/Evaluation";
import { Tag } from "../../components/Tag";

export function Movie({data, ...rest}) {
  return(
    <Container {...rest}>
     <div className="movie-info">
        <Evaluation title={data.title}/>
        <p>{data.description}</p>
      </div>
     {
      data.movies_tags &&
      <footer>
        {
          data.movies_tags.map(tag => (
            <Tag
              key={tag.id}
              title={tag.name}
            />
          ))
        }
      </footer>
     }
    </Container>
  )
}