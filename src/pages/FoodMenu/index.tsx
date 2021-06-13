import Button from "components/Button";
import { Container } from "components/Container";
import PizzaCard from "components/PizzaCard";
import { useAppSelector } from "hooks";
import { Link } from "react-router-dom";
import * as path from "routes/paths";
import * as S from "./styles";

export default function FoodMenu() {
  const { name } = useAppSelector(({ order }) => order);
  console.log("nome", name);
  return (
    <S.Wrapper>
      <Container>
        <PizzaCard type="name" name="Pepperoni" price={50} />
        <PizzaCard type="name" name="Calabresa" price={45} />
        <Link to={path.dough}>
          <Button disabled={!name}>Escolher a massa</Button>
        </Link>
      </Container>
    </S.Wrapper>
  );
}
