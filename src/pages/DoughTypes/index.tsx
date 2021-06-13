import Button from "components/Button";
import { Container } from "components/Container";
import PizzaCard from "components/PizzaCard";
import { useAppDispatch, useAppSelector } from "hooks";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import * as path from "routes/paths";
import { fetchGetDough } from "store/fetchActions/fetchMenu";
import * as S from "./styles";

export default function DoughTypes() {
  const dispatch = useAppDispatch();
  const { name, dough } = useAppSelector(({ order }) => order);
  const { doughs } = useAppSelector(({ menu }) => menu);
  const history = useHistory();

  const goAhead = () => {
    if (dough) {
      history.push(path.size);
    }
  };

  useEffect(() => {
    dispatch(fetchGetDough());
    if (!name) {
      history.push(path.pizzaMenu);
    }
  }, [dispatch, history, name]);

  return (
    <S.Wrapper>
      <Container>
        {doughs.map((dough) => {
          return (
            <PizzaCard
              key={dough?.name}
              type="dough"
              name={dough?.name}
              description={dough?.description}
            />
          );
        })}

        <Button disabled={!dough} onClick={goAhead}>
          Escolher a tamanho
        </Button>
      </Container>
    </S.Wrapper>
  );
}
