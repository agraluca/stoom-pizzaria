import Button from "components/Button";
import { Container } from "components/Container";
import PizzaCard from "components/PizzaCard";
import { useAppSelector } from "hooks";
import { Link } from "react-router-dom";
import * as path from "routes/paths";
import * as S from "./styles";

export default function Size() {
  const { size } = useAppSelector(({ order }) => order);
  return (
    <S.Wrapper>
      <Container>
        <PizzaCard type="size" name="Grande" />
        <PizzaCard type="size" name="Média" />
        <PizzaCard type="size" name="Pequena" />
        <Link to={path.recommended}>
          <Button disabled={!size}>Continuar</Button>
        </Link>
      </Container>
    </S.Wrapper>
  );
}
