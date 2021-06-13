import Button from "components/Button";
import { Container } from "components/Container";
import PizzaCard from "components/PizzaCard";
import { useAppDispatch, useAppSelector } from "hooks";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import * as path from "routes/paths";
import { fetchGetMenu } from "store/fetchActions/fetchMenu";
import * as S from "./styles";

export default function FoodMenu() {
  const dispatch = useAppDispatch();
  const { name } = useAppSelector(({ order }) => order);
  const { pizzas } = useAppSelector(({ menu }) => menu);
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchGetMenu());
  }, [dispatch]);

  const goAhead = () => {
    if (name) {
      history.push(path.dough);
    }
  };

  console.log("nome", name);
  return (
    <S.Wrapper>
      <Container>
        {pizzas.map((pizza) => {
          return (
            <PizzaCard
              img={pizza?.img}
              key={pizza?.name}
              type="name"
              name={pizza?.name}
              description={pizza?.description}
              price={pizza?.price}
            />
          );
        })}

        <Button disabled={!name} onClick={goAhead}>
          Escolher a massa
        </Button>
      </Container>
    </S.Wrapper>
  );
}
