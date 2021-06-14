import { useState } from "react";

import { Check } from "@styled-icons/boxicons-regular/Check";
import Button from "components/Button";

import { useAppDispatch, useAppSelector } from "hooks";
import {
  setOrderDough,
  setOrderName,
  setOrderPrice,
  setOrderSize,
  setRecommendedStatus,
} from "store/ducks/order";

import * as S from "./styles";

export type PizzaCardProps = {
  img?: string;
  name?: string;
  description?: string;
  price?: number | string;
  recommended?: boolean;
  type: "name" | "dough" | "size" | "recommended";
  points?: number | string;
};

export default function PizzaCard({
  img = "https://images.unsplash.com/photo-1544982503-9f984c14501a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
  name = "Nome da Pizza",
  description = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem vitae, accusantium ipsa magni sequi mollitia! Distinctio cum mollitia eaque odit qui, ad aspernatur ex est voluptatem saepe accusamus soluta tenetur",
  price,
  recommended = false,
  type,
  points,
}: PizzaCardProps) {
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useAppDispatch();
  const order = useAppSelector(({ order }) => order);

  const addToCart = () => {
    if (!recommended) {
      setIsChecked(!isChecked);
      if (!isChecked) {
        if (type === "name") {
          dispatch(setOrderName(name));
          price && dispatch(setOrderPrice(price));
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
    }
  };

  const addRecommended = () => {
    dispatch(setRecommendedStatus(!order.recommendedStatus));
  };
  return (
    <>
      {recommended && <S.TitleDay>Pizza do dia:</S.TitleDay>}
      <S.Wrapper onClick={addToCart} recommended={recommended}>
        <S.Image src={img} alt="Pizza de calabresa" />
        <S.Info>
          <S.Header>
            <S.Name>{name}</S.Name>
            {recommended ? (
              <S.Ribbon>Ganhe {Number(points)} pontos</S.Ribbon>
            ) : (
              <S.CheckBox onClick={addToCart}>
                {isChecked && <Check />}
              </S.CheckBox>
            )}
          </S.Header>

          <S.Description>{description}</S.Description>
          {recommended && price && (
            <S.Recommended>
              <S.Price recommended={recommended}>
                R$ {Number(price).toFixed(2)}
              </S.Price>
              <Button
                className="addRecommended"
                onClick={addRecommended}
                size="large"
              >
                {order.recommendedStatus ? (
                  <span>{<Check />}</span>
                ) : (
                  <span>Quero!</span>
                )}
              </Button>
            </S.Recommended>
          )}
          {price && !recommended && (
            <S.Price recommended={recommended}>
              R$ {Number(price).toFixed(2)}
            </S.Price>
          )}
        </S.Info>
      </S.Wrapper>
    </>
  );
}
