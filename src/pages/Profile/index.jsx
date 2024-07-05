import { Container, Form, Avatar } from "./styles";
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { Button } from "../../components/Button"

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { api } from "../../services/api";

import { useAuth } from "../../hooks/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Profile(){
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  const navigate = useNavigate();

  async function handleUpdate(){
    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld
    }

    const userUpdated = Object.assign(user, updated);

    await updateProfile({user: userUpdated, avatarFile})
  }

  function handleChangeAvatar(event){
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  function handleBack(){
    navigate(-1);
  }

  return(
    <Container>
      <header>  
        <ButtonText 
          title="Voltar"
          onClick={handleBack}
          isActive
        />
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