import { useEffect } from "react";

import pizza from "assets/img/pizza.svg";
import Menu from "components/Menu";
import { Container } from "components/Container";

import { Link } from "react-router-dom";

import { useAppDispatch } from "hooks";

import {
  setOrderDough,
  setOrderName,
  setOrderPrice,
  setOrderSize,
  setRecommended,
  setRecommendedStatus,
} from "store/ducks/order";

import * as S from "./styles";

export default function Home() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setOrderName(""));
    dispatch(setOrderDough(""));
    dispatch(setOrderPrice(""));
    dispatch(setOrderSize(""));
    dispatch(setRecommended(""));
    dispatch(setRecommendedStatus(false));
    dispatch(setOrderName(""));
  }, [dispatch]);
  return (
    <>
      <Menu />
      <S.Wrapper>
        <Container>
          <h1>Stoom Pizzaria</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
            voluptatem harum neque. Architecto eaque, numquam debitis, esse
            veniam culpa repudiandae commodi aliquid quas iure consectetur.
          </p>
          <Link to="/cardapio">Veja nosso cardápio</Link>
        </Container>
        <Container>
          <img
            src={pizza}
            alt="Amigos reúnidos comendo Pizza"
            className="imgHero"
          />
        </Container>
      </S.Wrapper>
    </>
  );
}
