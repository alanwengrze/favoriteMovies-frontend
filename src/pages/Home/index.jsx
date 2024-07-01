import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Movie } from "../../components/Movie";	
import { Content } from "../../components/Content";
import { ButtonText } from "../../components/ButtonText";

import { FiPlus } from "react-icons/fi";

import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";

export function Home(){
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();

  function handlePreview(id){
    navigate(`/preview/${id}`);
    console.log(id)
  }

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

  useEffect(()=>{
    async function getMovies(){
      const response = await api.get("/movies_notes");
      setMovies(response.data);
      console.log(response.data)
    }
    getMovies();
  }, []);

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
                onClick={() => handlePreview(movie.id)}
              />
                
            ))
          }
        </Content>
      </main>
    </Container>
  )
}