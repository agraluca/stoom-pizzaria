import { useEffect } from "react";

import Button from "components/Button";
import { Container } from "components/Container";
import Loading from "components/Spinner";
import PizzaCard from "components/PizzaCard";

import { useHistory } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "hooks";
import { fetchGetDough } from "store/fetchActions/fetchMenu";

import * as path from "routes/paths";

import * as S from "./styles";

export default function DoughTypes() {
  const dispatch = useAppDispatch();
  const { name, dough } = useAppSelector(({ order }) => order);
  const { doughs } = useAppSelector(({ menu }) => menu);
  const { loading } = useAppSelector(({ loading }) => loading);
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
      {loading ? (
        <Loading />
      ) : (
        <Container>
          {doughs.map((dough) => {
            return (
              <PizzaCard
                img={dough?.img}
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
      )}
    </S.Wrapper>
  );
}
