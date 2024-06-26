import { Container, Form, Avatar } from "./styles";
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { Button } from "../../components/Button"

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { api } from "../../services/api";

import { useAuth } from "../../hooks/auth";
import { useState } from "react";

export function Profile(){
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleUpdate(){
    const user = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld
    }

    await updateProfile({user, avatarFile})
  }

  function handleChangeAvatar(event){
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  return(
    <Container>
      <header>  
        <ButtonText title="Voltar" to="/"/>
      </header>
      <Form>
        <Avatar>
          <img src={avatar} alt="Foto do usuário"/>
          <label htmlFor="avatar">
            <FiCamera />
            <input 
              type="file" 
              id="avatar"
              onChange={handleChangeAvatar}
            />
          </label>
        </Avatar>
        <Input
          icon={FiUser}
          type="text" 
          placeholder="Digite seu nome"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Input
          icon={FiMail}
          type="text" 
          placeholder="Digite seu e-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          icon={FiLock}
          type="password" 
          placeholder="Senha atual"
          onChange={e => setPasswordOld(e.target.value)}
        />
         <Input
          icon={FiLock}
          type="password" 
          placeholder="Nova senha"
          onChange={e => setPasswordNew(e.target.value)}
        />
        <Button 
          title="Salvar"
          onClick={handleUpdate}
        />
      </Form>
    </Container>
  )
}