import { Container, BackGroundMovie, Form } from "./styles";
import { FiMail, FiLock } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

import { useState } from "react";

import { useAuth } from "../../hooks/auth";


export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }
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
          onChange={e => setEmail(e.target.value)}
        />
        <Input 
          type="password" 
          placeholder="Senha"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />
        <Button 
          title="Entrar" 
          onClick={handleSignIn}
        />
        <ButtonText
          title="Criar conta"
          to="/register"
        />
      </Form>
      <BackGroundMovie />
    </Container>
  );
}