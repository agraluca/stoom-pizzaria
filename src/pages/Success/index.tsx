import Button from "components/Button";
import { Container } from "components/Container";
import { Link, useHistory } from "react-router-dom";
import Menu from "components/Menu";

import {
  setOrderDough,
  setOrderName,
  setOrderPrice,
  setOrderSize,
  setRecommended,
} from "store/ducks/order";

import * as path from "routes/paths";
import * as S from "./styles";
import { useAppDispatch, useAppSelector } from "hooks";

export default function Success() {
  const order = useAppSelector(({ order }) => order);
  const dispatch = useAppDispatch();
  const history = useHistory();
  const handleClean = () => {
    dispatch(setOrderName(""));
    dispatch(setOrderDough(""));
    dispatch(setOrderPrice(""));
    dispatch(setOrderSize(""));
    dispatch(setRecommended(""));
    dispatch(setOrderName(""));
    history.push(path.home);
  };
  return (
    <>
      <Menu />
      <S.Wrapper>
        <Container>
          <S.Wrapper>
            <h1>Sua Compra foi efetuada com sucesso</h1>

            <S.Text>Você esta com {order.points} pontos</S.Text>

            <S.Text>
              Você pediu uma {order.name} com {order.dough} de tamanho{" "}
              {order.size}
            </S.Text>
            {order.recommended && (
              <S.Text>
                Além disso você pediu a recomendação de {order.recommended} do
                dia
              </S.Text>
            )}
            <S.Text>Preço total: R$ {order.price} </S.Text>
            <S.Text>Seu pedido chegará em breve</S.Text>
            <Link to={path.home}>
              <Button onClick={handleClean} className="pay">
                Pedir novamente
              </Button>
            </Link>
          </S.Wrapper>
        </Container>
      </S.Wrapper>
    </>
  );
}
