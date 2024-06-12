import { Container } from "./styles";
import { FiArrowLeft } from 'react-icons/fi'

export function ButtonText({icon: Icon = false ,title, ...rest}) {
  return(
    <Container type="button" {...rest}>
      {Icon && <FiArrowLeft />}
      {title}
    </Container>
  )
}