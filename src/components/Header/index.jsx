import { Container, Profile } from "./styles";
import { Input } from "../Input";
import { FiSearch } from 'react-icons/fi'
import { Link } from "react-router-dom";

export function Header(){
  return(
    <Container>
      <h1>FavoriteMovies</h1>
      <Input 
        type="text" 
        placeholder="Pesquisar"
        icon={FiSearch}
      />
      <Profile>
        <div className="profile-wrapper">
          <span>Alan Wengrze</span>
          <button type="button">Sair</button>
        </div>
        <Link to="/profile">
          <img src="https://github.com/alanwengrze.png" alt="Foto do usuário" />
        </Link>
      </Profile>
    </Container>
  )
}