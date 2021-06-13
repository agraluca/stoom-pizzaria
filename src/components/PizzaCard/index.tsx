import { useState } from "react";

import { Check } from "@styled-icons/boxicons-regular/Check";
import Button from "components/Button";

import * as S from "./styles";
import { useAppDispatch, useAppSelector } from "hooks";
import {
  setOrderDough,
  setOrderName,
  setOrderPrice,
  setOrderSize,
  setRecommended,
  setPoints,
} from "store/ducks/order";

export type PizzaCardProps = {
  img?: string;
  name?: string;
  description?: string;
  price?: number;
  recommended?: boolean;
  type: "name" | "dough" | "size" | "recommended";
  points?: number;
};

export default function PizzaCard({
  img = "https://images.unsplash.com/photo-1544982503-9f984c14501a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
  name = "Nome da Pizza",
  description = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem vitae, accusantium ipsa magni sequi mollitia! Distinctio cum mollitia eaque odit qui, ad aspernatur ex est voluptatem saepe accusamus soluta tenetur",
  price = 50,
  recommended = false,
  type,
  points,
}: PizzaCardProps) {
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useAppDispatch();
  const order = useAppSelector(({ order }) => order);

  const addToCart = () => {
    setIsChecked(!isChecked);
    if (!isChecked) {
      if (type === "name") {
        dispatch(setOrderName(name));
        dispatch(setOrderPrice(price));
      } else if (type === "dough") {
        dispatch(setOrderDough(name));
      } else {
        dispatch(setOrderSize(name));
      }
    } else {
      if (type === "name") {
        dispatch(setOrderName(""));
        dispatch(setOrderPrice(""));
      } else if (type === "dough") {
        dispatch(setOrderDough(""));
      } else {
        dispatch(setOrderSize(""));
      }
    }
  };

  const addRecommended = () => {
    const totalPrice = Number(order.price + price);
    const totalPoints = Number(order.points + points);
    console.log("preco total", totalPrice);
    if (type === "recommended") {
      dispatch(setRecommended(name));
      dispatch(setOrderPrice(totalPrice));
      dispatch(setPoints(totalPoints));
    } else {
      const oldPrice = Number(totalPrice - price);
      const oldPoints = points ? Number(totalPoints - points) : order.points;
      dispatch(setRecommended(""));
      dispatch(setOrderPrice(oldPrice));
      dispatch(setPoints(oldPoints));
    }
  };
  return (
    <S.Wrapper>
      <S.Image src={img} alt="Pizza de calabresa" />
      <S.Info>
        <S.Header>
          <S.Name>{name}</S.Name>
          {recommended ? (
            <S.Ribbon>Ganhe 50 pontos</S.Ribbon>
          ) : (
            <S.CheckBox onClick={addToCart}>
              {isChecked && <Check />}
            </S.CheckBox>
          )}
        </S.Header>

        <S.Description>{description}</S.Description>
        {recommended && price && (
          <S.Recommended>
            <S.Price recommended={recommended}>R$ {price.toFixed(2)}</S.Price>
            <Button
              className="addRecommended"
              onClick={addRecommended}
              size="large"
            >
              Quero! <span>{!!order.recommended && <Check />}</span>
            </Button>
          </S.Recommended>
        )}
        {price && !recommended && (
          <S.Price recommended={recommended}>R$ {price.toFixed(2)}</S.Price>
        )}
      </S.Info>
    </S.Wrapper>
  );
}
