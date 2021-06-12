import Button from "components/Button";
import { Container } from "components/Container";
import PizzaCard from "components/PizzaCard";
import { Link } from "react-router-dom";
import * as path from "routes/paths";
import * as S from "./styles";

export default function DoughTypes() {
  return (
    <S.Wrapper>
      <Container>
        <PizzaCard name="Massa Grossa" />
        <PizzaCard name="Massa Média" />
        <PizzaCard name="Massa Fina" />
        <Link to={path.size}>
          <Button>Escolher a tamanho</Button>
        </Link>
      </Container>
    </S.Wrapper>
  );
}
