import { Container } from "./styles";
import { FiArrowLeft } from 'react-icons/fi'

export function ButtonText({children, icon: Icon = false ,title, isActive = false, ...rest}) {
  return(
    <Container 
      type="button"
      $isactive = {isActive}
      {...rest}
    >
      {Icon && <FiArrowLeft />}
      {children}
      {title}
    </Container>
  )
}