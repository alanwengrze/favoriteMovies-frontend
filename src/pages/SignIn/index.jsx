import { Container, BackGroundMovie, Form } from "./styles";
import { FiMail, FiLock } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function SignIn() {
  return (
    <Container>
      <Form>
        <div>
        <h1>FavoriteMovies</h1>
        <span>Aplicação para acompanhar tudo que assistir.</span>
        </div>
        <p>Faça seu login</p>
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
        <Button title="Entrar" />
        <ButtonText
          title="Criar conta"
          to="/register"
        />
      </Form>
      <BackGroundMovie />
    </Container>
  );
}