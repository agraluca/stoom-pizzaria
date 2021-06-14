import Button from "components/Button";
import { Container } from "components/Container";
import Loading from "components/Spinner";
import Menu from "components/Menu";

import { Link, useHistory } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "hooks";
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

export default function Success() {
  const order = useAppSelector(({ order }) => order);
  const { loading } = useAppSelector(({ loading }) => loading);
  const dispatch = useAppDispatch();
  const history = useHistory();
  const handleClean = () => {
    dispatch(setOrderName(""));
    dispatch(setOrderDough(""));
    dispatch(setOrderPrice(""));
    dispatch(setOrderSize(""));
    dispatch(setRecommended(""));
    dispatch(setRecommendedStatus(false));
    dispatch(setOrderName(""));
    history.push(path.pizzaMenu);
  };
  return (
    <>
      <Menu />
      <S.Wrapper>
        {loading ? (
          <Loading />
        ) : (
          <Container>
            <h1>Sua Compra foi efetuada com sucesso</h1>

            <S.Text>
              Você esta com {localStorage.getItem("points")} pontos
            </S.Text>

            <S.Text>
              Você pediu uma {order.name} com {order.dough.toLowerCase()} de
              tamanho {order.size.toLowerCase()}.
            </S.Text>
            {order.recommended && (
              <S.Text>
                Além disso você pediu a recomendação de {order.recommended} do
                dia.
              </S.Text>
            )}
            <S.Text>
              Preço total: <strong>R$ {Number(order.price).toFixed(2)}</strong>{" "}
            </S.Text>
            <S.Text>Seu pedido chegará em breve!</S.Text>

            <Link to={path.home}>
              <Button onClick={handleClean} className="pay">
                Pedir novamente
              </Button>
            </Link>
          </Container>
        )}
      </S.Wrapper>
    </>
  );
}
