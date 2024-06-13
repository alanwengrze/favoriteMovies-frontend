import { Container, Form } from "./styles";
import { Header } from "../../components/Header";
import { Content } from "../../components/Content";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { MovieItem } from "../../components/MovieItem";

export function New() {
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
              />
              <Input
                type="number"
                placeholder="Sua nota (de 0 a 5)"
              />
            </div>
            <Textarea
              placeholder="Observações"
            />
            <h2>Marcadores</h2>
            <div className="tags">
              <MovieItem 
                value="Comédia"
                title="Testando"
              />
              <MovieItem 
                placeholder="Novo marcador"
                isNew
              />
            </div>
            <div className="button-wrapper">
              <Button title="Cancelar" />
              <Button title="Salvar" />
            </div>
          </Form>
        </Content>
      </main>
    </Container>
  );
}