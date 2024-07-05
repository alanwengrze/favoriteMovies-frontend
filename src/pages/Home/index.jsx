import { Container, Menu } from "./styles";
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
  const [tags, setTags] = useState([]);
  const [tagsSelected, setTagsSelected] = useState("");

  const navigate = useNavigate();

  function handleTagSelected(tagName){
    const alreadySelected = tagsSelected.includes(tagName);
    if(alreadySelected){
      const filteredTags = tagsSelected.filter(tag => tag !== tagName);
      setTagsSelected(filteredTags);
    }else{
      setTagsSelected(prevState =>[...prevState, tagName]);
    }
    if(tagName === "all"){
      setTagsSelected([]);
    }
    
  }

  function handlePreview(id){
    navigate(`/preview/${id}`);
    console.log(id)
  }

  useEffect(()=>{
    async function fetchTags(){
      const response = await api.get("/movies_tags");
      setTags(response.data);
      console.log(response.data)
    }
    fetchTags();
  }, []);

  useEffect(() => {
      async function fetchMovies(){
        const response = await api.get(`/movies_notes?title=${search}&movies_tags=${tagsSelected}`);
        setMovies(response.data);
        console.log(response.data)
      }
      fetchMovies();
    
  },[search, tagsSelected]);

  return(
    <Container>
      <Header 
        onChange={e => setSearch(e.target.value)}
      />
      <main>
        <Content>
        <Menu>
        <li>
          <ButtonText 
            title="Todos"
            onClick={() => handleTagSelected("all")}
            isActive={tagsSelected.length === 0}
          />
        </li>
        {
         tags && tags.map(tag => (
          <li key={tag.id}>
            <ButtonText
              title={tag.name}
              onClick={() => handleTagSelected(tag.name)}
              isActive={tagsSelected.includes(tag.name)}
            />
          </li>
         ))
        }
      </Menu>
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