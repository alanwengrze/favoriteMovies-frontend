import { Container, Profile, Menu, SideMenu } from "./styles";
import { Input } from "../Input";
import { ButtonText } from "../ButtonText";
import { FiSearch, FiList, FiX } from 'react-icons/fi'
import { Link } from "react-router-dom";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { api } from "../../services/api";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { useState } from "react";

export function Header({onChange}) {
  const { signOut, user } = useAuth();
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  const [openMenu, setOpenMenu] = useState(false);

  const navigate = useNavigate();

  function handleSignOut(){
    const confirm = window.confirm("Tem certeza que deseja sair?");
    if(confirm){
      navigate("/");
      signOut();
    }else{
      return;
    }
  }
  function handleOnToggleMenu(){
    setOpenMenu(!openMenu);
  }

  return(
    <Container>
      <SideMenu data-openMenu={openMenu}>
        <div className="input-wrapper">
          <FiX 
            onClick={handleOnToggleMenu}
          />
          <h1>FavoriteMovies</h1>
            <Input 
              type="text" 
              placeholder="Pesquisar"
              icon={FiSearch}
              onChange={onChange}
            />
            <ButtonText 
              title="Pesquisar"
              isActive
              onClick={handleOnToggleMenu}
            />
        </div>
        <Profile>
          <div className="profile-wrapper">
            <span>{user.name}</span>
            <button 
              type="button"
              onClick={handleSignOut}
            >
                  Sair
            </button>
          </div>
          <Link to="/profile">
            <img src={avatarUrl} alt={user.name} />
          </Link>
        </Profile>
      </SideMenu>
      <Menu onClick={handleOnToggleMenu}>
        <FiList />
      </Menu>
      <h1>FavoriteMovies</h1>
      <div className="input-wrapper">
      <Input 
        type="text" 
        placeholder="Pesquisar"
        icon={FiSearch}
        onChange={onChange}
      />
      </div>
      <Profile>
        <div className="profile-wrapper">
          <span>{user.name}</span>
          <button 
            type="button"
            onClick={handleSignOut}
          >
                Sair
          </button>
        </div>
        <Link to="/profile">
          <img src={avatarUrl} alt={user.name} />
        </Link>
      </Profile>
    </Container>
  )
}