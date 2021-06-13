import { useEffect } from "react";

import Button from "components/Button";
import { Container } from "components/Container";
import Loading from "components/Spinner";
import PizzaCard from "components/PizzaCard";

import { useAppDispatch, useAppSelector } from "hooks";
import { fetchGetSize } from "store/fetchActions/fetchMenu";

import { useHistory } from "react-router-dom";
import * as path from "routes/paths";

import * as S from "./styles";

export default function Size() {
  const dispatch = useAppDispatch();
  const { dough, size } = useAppSelector(({ order }) => order);
  const { sizes } = useAppSelector(({ menu }) => menu);
  const { loading } = useAppSelector(({ loading }) => loading);
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchGetSize());
    if (!dough) {
      history.push(path.dough);
    }
  }, [dispatch, dough, history]);

  const goAhead = () => {
    if (size) {
      history.push(path.recommended);
    }
  };

  return (
    <S.Wrapper>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          {sizes.map((size) => {
            return (
              <PizzaCard
                key={size?.name}
                type="size"
                name={size?.name}
                description={size?.description}
              />
            );
          })}

          <Button disabled={!size} onClick={goAhead}>
            Continuar
          </Button>
        </Container>
      )}
    </S.Wrapper>
  );
}
