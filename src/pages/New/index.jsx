import { Container, Form } from "./styles";
import { Header } from "../../components/Header";
import { Content } from "../../components/Content";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { MovieItem } from "../../components/MovieItem";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

export function New() {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleAddTag(){
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted){
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  async function handleNewMovie(){
    if(!title){
      return alert("Você precisa adicionar um título.")
    }
    if(!rating){
      return alert("Você precisa adicionar uma nota (de 0 a 5).")
    }
    if(rating < 0 || rating > 5){
      return alert("A nota deve estar entre 0 e 5.")
    }
    if(!description){
      return alert("Você precisa adicionar uma descrição.")
    }
    
    if(newTag){
      return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. 😥 Clique para adicionar ou deixe o campo vazio.")
    }

    await api.post("/movies_notes", {
      title,
      rating: Number(rating),
      description,
      movies_tags: tags
    });
    alert("Filme criado com sucesso");
    navigate("/");
  }

  function handleCancel(){
    const confirm = window.confirm("Tem certeza que deseja cancelar?");
    if(confirm){
      navigate("/");
    }else{
      return;
    }
  }

  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText 
          title="Voltar"
          to="/"
          icon
          />
          <h1>Novo filme</h1>
          <Form>
            <div className="input-wrapper">
              <Input
                type="text"
                placeholder="Título"
                onChange={e => setTitle(e.target.value)}
              />
              <Input
                type="text"
                placeholder="Sua nota (de 0 a 5)"
                onChange={e => setRating(e.target.value)}
              />
            </div>
            <Textarea
              placeholder="Observações"
              onChange={e => setDescription(e.target.value)}
            />
            <h2>Marcadores</h2>
            <div className="tags">
              <MovieItem 
                placeholder="Novo marcador"
                value={newTag}
                onChange={e => setNewTag(e.target.value)}
                onClick={handleAddTag}
                isNew
              />

              {
                tags.map((tag, index) => (
                  <MovieItem
                    key={index}
                    value={tag}
                    onClick={()=>{handleRemoveTag(tag)}}
                  />
                ))
              }
            
            </div>
            <div className="button-wrapper">
              <Button 
                title="Cancelar"
                onClick={handleCancel} 
              />
              <Button 
                title="Salvar"
                onClick={handleNewMovie}
              />
            </div>
          </Form>
        </Content>
      </main>
    </Container>
  );
}