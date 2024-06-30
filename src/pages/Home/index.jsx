import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Movie } from "../../components/Movie";	
import { Content } from "../../components/Content";
import { ButtonText } from "../../components/ButtonText";

import { FiPlus } from "react-icons/fi";

import { api } from "../../services/api";

import { useState, useEffect } from "react";

export function Home(){
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    if(search){
      async function fetchMovies(){
        const response = await api.get(`/movies_notes?title=${search}`);
        setMovies(response.data);
        console.log(response.data)
      }
      fetchMovies();
    }
    
  },[search]);
  return(
    <Container>
      <Header 
        onChange={e => setSearch(e.target.value)}
      />
      <main>
        <Content>
          <header>
            <h1>Meus filmes</h1>
            <ButtonText
              title="Adicionar filme"
              to="/new"
            >

              <FiPlus />
            </ButtonText>
          </header>
          {
            movies && movies.map(movie => (
              <Movie
                key={String(movie.id)}
                data={movie}
              />
                
            ))
          }
        </Content>
      </main>
    </Container>
  )
}