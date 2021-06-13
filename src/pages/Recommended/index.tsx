import { useEffect } from "react";

import Button from "components/Button";
import { Container } from "components/Container";
import Loading from "components/Spinner";
import PizzaCard from "components/PizzaCard";

import { useAppDispatch, useAppSelector } from "hooks";
import {
  setOrderDough,
  setOrderName,
  setOrderPrice,
  setOrderSize,
  setRecommended,
  setRecommendedStatus,
  setPoints,
} from "store/ducks/order";
import { fetchGetRecommended } from "store/fetchActions/fetchMenu";

import { useHistory } from "react-router-dom";

import * as path from "routes/paths";

import * as S from "./styles";

export default function Recommended() {
  const dispatch = useAppDispatch();
  const { recommended } = useAppSelector(({ menu }) => menu);
  const order = useAppSelector(({ order }) => order);
  const { loading } = useAppSelector(({ loading }) => loading);
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchGetRecommended());

    if (!order.size) {
      history.push(path.size);
    }
  }, [dispatch, history, order.size]);

  const goAhead = () => {
    const totalPrice = Number(order.price) + Number(recommended[0].price);
    const totalPoints =
      Number(localStorage.getItem("points")) + Number(recommended[0].points);
    if (order.recommendedStatus) {
      dispatch(setRecommended(recommended[0].name));
      dispatch(setOrderPrice(totalPrice));
      dispatch(setPoints(totalPoints));
      localStorage.setItem("points", `${totalPoints}`);
    } else {
      const oldPrice = Number(totalPrice) - Number(recommended[0].price);
      const oldPoints = recommended[0].points
        ? Number(totalPoints) - Number(recommended[0].points)
        : Number(localStorage.getItem("points"));
      dispatch(setRecommended(""));
      dispatch(setOrderPrice(oldPrice));
      dispatch(setPoints(oldPoints));
      localStorage.setItem("points", `${oldPoints}`);
    }

    history.push(path.success);
  };

  const cancelOrder = () => {
    dispatch(setOrderName(""));
    dispatch(setOrderDough(""));
    dispatch(setOrderPrice(""));
    dispatch(setOrderSize(""));
    dispatch(setRecommended(""));
    dispatch(setRecommendedStatus(false));
    dispatch(setOrderName(""));
    history.push(path.home);
  };

  return (
    <S.Wrapper>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <PizzaCard
            type="recommended"
            recommended
            name={recommended[0].name}
            price={recommended[0].price}
            points={recommended[0].points}
          />

          <Button className="pay" onClick={goAhead}>
            Pagar
          </Button>

          <Button className="cancel" onClick={cancelOrder}>
            Cancelar
          </Button>
        </Container>
      )}
    </S.Wrapper>
  );
}
