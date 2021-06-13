import { Done } from "@styled-icons/material-outlined/Done";
import Button from "components/Button";
import { Container } from "components/Container";
import { Link } from "react-router-dom";

import * as path from "routes/paths";
import * as S from "./styles";

export default function Success() {
  return (
    <S.Wrapper>
      <Container>
        <S.Wrapper>
          <S.CheckMark>
            <Done />
          </S.CheckMark>
          <h1>Sua Compra foi efetuada com sucesso</h1>

          <S.Text>Seu pedido chegará em breve</S.Text>
          <Link to={path.home}>
            <Button className="pay">Pedir novamente</Button>
          </Link>
        </S.Wrapper>
      </Container>
    </S.Wrapper>
  );
}
