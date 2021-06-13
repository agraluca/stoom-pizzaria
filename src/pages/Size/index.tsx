import Button from "components/Button";
import { Container } from "components/Container";
import PizzaCard from "components/PizzaCard";
import { useAppDispatch, useAppSelector } from "hooks";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import * as path from "routes/paths";
import { fetchGetSize } from "store/fetchActions/fetchMenu";
import * as S from "./styles";

export default function Size() {
  const dispatch = useAppDispatch();
  const { dough, size } = useAppSelector(({ order }) => order);
  const { sizes } = useAppSelector(({ menu }) => menu);
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
    </S.Wrapper>
  );
}
