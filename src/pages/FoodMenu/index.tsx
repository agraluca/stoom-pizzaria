import Button from "components/Button";
import { Container } from "components/Container";
import PizzaCard from "components/PizzaCard";
import { Link } from "react-router-dom";
import * as path from "routes/paths";
import * as S from "./styles";

export default function FoodMenu() {
  return (
    <S.Wrapper>
      <Container>
        <PizzaCard name="Pepperoni" price={50} />
        <PizzaCard name="Calabresa" price={45} />
        <Link to={path.dough}>
          <Button>Escolher a massa</Button>
        </Link>
      </Container>
    </S.Wrapper>
  );
}
