import { useEffect } from "react";

import Button from "components/Button";
import { Container } from "components/Container";
import Loading from "components/Spinner";
import PizzaCard from "components/PizzaCard";

import { useHistory } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "hooks";
import { fetchGetMenu } from "store/fetchActions/fetchMenu";
import {
  setOrderDough,
  setOrderName,
  setOrderPrice,
  setOrderSize,
  setRecommended,
  setRecommendedStatus,
} from "store/ducks/order";

import * as path from "routes/paths";

import * as S from "./styles";

export default function FoodMenu() {
  const dispatch = useAppDispatch();
  const { name } = useAppSelector(({ order }) => order);
  const { pizzas } = useAppSelector(({ menu }) => menu);
  const { loading } = useAppSelector(({ loading }) => loading);
  const history = useHistory();

  useEffect(() => {
    dispatch(setOrderName(""));
    dispatch(setOrderDough(""));
    dispatch(setOrderPrice(""));
    dispatch(setOrderSize(""));
    dispatch(setRecommended(""));
    dispatch(setRecommendedStatus(false));
    dispatch(setOrderName(""));
    dispatch(fetchGetMenu());
  }, [dispatch]);

  const goAhead = () => {
    if (name) {
      history.push(path.dough);
    }
  };

  return (
    <S.Wrapper>
      {loading ? (
        <Loading />
      ) : (
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
      )}
    </S.Wrapper>
  );
}
