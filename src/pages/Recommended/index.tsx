import Button from "components/Button";
import { Container } from "components/Container";
import PizzaCard from "components/PizzaCard";

import { Link } from "react-router-dom";

import * as path from "routes/paths";
import * as S from "./styles";

export default function Recommended() {
  return (
    <S.Wrapper>
      <Container>
        <PizzaCard type="recommended" recommended name="Pepperoni" price={50} />
        <Link to={path.home}>
          <Button className="pay">Pagar</Button>
        </Link>
      </Container>
    </S.Wrapper>
  );
}
