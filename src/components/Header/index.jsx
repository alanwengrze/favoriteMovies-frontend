import { Container, Profile } from "./styles";
import { Input } from "../Input";
import { ButtonText } from "../ButtonText";

export function Header(){
  return(
    <Container>
      <h1>FavoriteMovies</h1>
      <Input 
        type="text" 
        placeholder="Pesquisar"
      />
      <Profile>
        <div className="profile-wrapper">
          <span>Alan Wengrze</span>
          <button type="button">Sair</button>
        </div>
        <img src="https://github.com/alanwengrze.png" alt="Foto do usuário" />
      </Profile>
    </Container>
  )
}