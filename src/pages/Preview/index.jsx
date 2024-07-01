import { Container, Creator } from "./styles";
import { Header } from "../../components/Header";
import { Evaluation } from "../../components/Evaluation";
import {ButtonText} from "../../components/ButtonText";
import { Content } from "../../components/Content";
import { Tag } from "../../components/Tag";
import { FiClock } from 'react-icons/fi';
import { useParams, useNavigate } from "react-router-dom";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

export function Preview() {
  const [data, setData] = useState(null);
  const { user } = useAuth();

  const params = useParams();
  const navigate = useNavigate();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  async function handleRemove(){
    if(window.confirm("Tem certeza que deseja excluir este filme?")){
      await api.delete(`/movies_notes/${params.id}`);
      navigate(-1);
    }else{
      return;
    }
  }

  function handleBack(){
    navigate(-1);
  }

  useEffect(() =>{
    async function fetchMovie(){
      const response = await api.get(`/movies_notes/${params.id}`);
      setData(response.data);
      console.log(response.data)
    }
    fetchMovie();
  }, []);
  return (
    <Container>
        <Header />
        { data &&
          <main>
            <Content>
              <div className="wrapper-buttons">
                <ButtonText
                  title="Voltar"
                  onClick={handleBack}
                />
                <ButtonText 
                  title="Excluir filme"
                  onClick={handleRemove}
                />
              </div>
              <Evaluation title={data.title}/>
              <Creator>
                <img src={avatarUrl} alt={user.name} />
                <span>{`Por ${user.name}`}</span>
                <FiClock />
                <span>12/06/2024 às 10:42</span>
              </Creator>
              <div className="tags">
              {
              data.movies_tags && data.movies_tags.map(tag => (
                <Tag 
                  key={String(tag.id)} 
                  title={tag.name}
                />
              ))
              }
              </div>
              <p> 
                {data.description}
              </p>
            </Content>
          </main>
        }
    </Container>
  );
}