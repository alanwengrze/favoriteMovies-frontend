import { Container } from "./styles";
import { FiArrowLeft } from 'react-icons/fi'

export function ButtonText({children, icon: Icon = false ,title, ...rest}) {
  return(
    <Container type="button" {...rest}>
      {Icon && <FiArrowLeft />}
      {children}
      {title}
    </Container>
  )
}