import Button from "components/Button";
import { Container } from "components/Container";
import PizzaCard from "components/PizzaCard";
import { useAppSelector } from "hooks";
import { Link } from "react-router-dom";
import * as path from "routes/paths";
import * as S from "./styles";

export default function DoughTypes() {
  const { dough } = useAppSelector(({ order }) => order);
  return (
    <S.Wrapper>
      <Container>
        <PizzaCard type="dough" name="Massa Grossa" />
        <PizzaCard type="dough" name="Massa Média" />
        <PizzaCard type="dough" name="Massa Fina" />
        <Link to={path.size}>
          <Button disabled={!dough}>Escolher a tamanho</Button>
        </Link>
      </Container>
    </S.Wrapper>
  );
}
