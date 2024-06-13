import { Container } from "./styles";
import { FiX, FiPlus } from 'react-icons/fi'

export function MovieItem({title, value, onClick, isNew = false, ...rest}){
  return(
    <Container $isnew={isNew}>
      <input 
        type="text"
        value={value}
        readOnly={!isNew}
        {...rest}
      />
      <button
        type="button"
        onClick={onClick}
      >
        {isNew ? <FiPlus/> : <FiX/>}
      </button>
    </Container>
  )
}