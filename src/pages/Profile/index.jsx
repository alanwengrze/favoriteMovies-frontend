import { Container, Form, Avatar } from "./styles";
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { Button } from "../../components/Button"

export function Profile(){
  return(
    <Container>
      <header>  
        <ButtonText title="Voltar" to="/"/>
      </header>
      <Form>
        <Avatar>
          <img src="https://github.com/alanwengrze.png" alt="Foto do usuário"/>
          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id="avatar" />
          </label>
        </Avatar>
        <Input
          icon={FiUser}
          type="text" 
          placeholder="Alan Wengrze"
        />
        <Input
          icon={FiMail}
          type="text" 
          placeholder="alanwengrzee@gmail.com"
        />
        <Input
          icon={FiLock}
          type="password" 
          placeholder="Senha atual"
        />
         <Input
          icon={FiLock}
          type="password" 
          placeholder="Nova senha"
        />
        <Button title="Salvar"/>
      </Form>
    </Container>
  )
}