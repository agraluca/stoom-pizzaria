import Button from "components/Button";
import { Container } from "components/Container";
import PizzaCard from "components/PizzaCard";
import { Link } from "react-router-dom";
import * as path from "routes/paths";
import * as S from "./styles";

export default function Size() {
  return (
    <S.Wrapper>
      <Container>
        <PizzaCard name="Pizza Grande" />
        <PizzaCard name="Pizza Média" />
        <PizzaCard name="Pizza Pequena" />
        <Link to={path.recommended}>
          <Button>Continuar</Button>
        </Link>
      </Container>
    </S.Wrapper>
  );
}
