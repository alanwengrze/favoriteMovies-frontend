import { Container, BackGroundMovie, Form } from "./styles";

import { FiMail, FiLock, FiUser } from "react-icons/fi";

import { useState } from "react";

import { api } from "../../services/api";

import { useNavigate } from "react-router-dom";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText} from "../../components/ButtonText";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;


  const navigate = useNavigate();

  function handleSignUp() {
    if(!name || !email || !password) {
      alert("Preencha todos os campos");
      return;
    }

    if(!emailRegex.test(email)){
      return alert("E-mail inválido. Digite um e-mail válido. Ex: yourname@example.com");
    }
    if(!passwordRegex.test(password)){
      return alert("Senha fraca. Sua senha deve conter pelo menos 8 caracteres, 1 maiúscula, 1 minúscula, 1 número e 1 caractere especial");
    }

    api.post("/users", {name, email, password})
    .then(() => {
      alert("Cadastrado com sucesso");
      navigate("/");
    })
    .catch(error =>{
      if(error.response){
        alert(error.response.data.message);
      }else{
        alert("Não foi possivel cadastrar");
      }
    })
  }
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
          onChange={e => setName(e.target.value)}
        />
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
          title="Cadastrar" 
          onClick={handleSignUp}
        />
        <ButtonText 
          title="Voltar para o login"
          to="/"
          icon
        />
      </Form>
    </Container>
  );
}