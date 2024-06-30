import { Container, Profile } from "./styles";
import { Input } from "../Input";
import { FiSearch } from 'react-icons/fi'
import { Link } from "react-router-dom";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { api } from "../../services/api";

import { useAuth } from "../../hooks/auth";

export function Header({onChange}){
  const { signOut, user } = useAuth();
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  return(
    <Container>
      <h1>FavoriteMovies</h1>
      <Input 
        type="text" 
        placeholder="Pesquisar"
        icon={FiSearch}
        onChange={onChange}
      />
      <Profile>
        <div className="profile-wrapper">
          <span>{user.name}</span>
          <button 
            type="button"
            onClick={signOut}
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