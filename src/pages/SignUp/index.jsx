import { Container, BackGroundMovie, Form } from "./styles";
import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { ButtonText} from "../../components/ButtonText";

export function SignUp() {
  return (
    <Container>
      <BackGroundMovie />
      <Form>
        <div>
        <h1>FavoriteMovies</h1>
        <span>Aplicação para acompanhar tudo que assistir.</span>
        </div>
        <p>Crie sua conta</p>
        <Input 
          type="text"
          placeholder="Nome"
          icon={FiUser}
        />
        <Input
          type="text"
          placeholder="Email"
          icon={FiMail}
        />
        <Input 
          type="password" 
          placeholder="Senha"
          icon={FiLock}
        />
        <Button title="Cadastrar" />
        <ButtonText 
          title="Voltar para o login"
          to="/"
          icon
        />
      </Form>
    </Container>
  );
}