import { useState } from "react";

import { Check } from "@styled-icons/boxicons-regular/Check";
import Button from "components/Button";

import * as S from "./styles";

export type PizzaCardProps = {
  img?: string;
  name?: string;
  description?: string;
  price?: number;
  recommended?: boolean;
};

export default function PizzaCard({
  img = "https://images.unsplash.com/photo-1544982503-9f984c14501a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
  name = "Nome da Pizza",
  description = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem vitae, accusantium ipsa magni sequi mollitia! Distinctio cum mollitia eaque odit qui, ad aspernatur ex est voluptatem saepe accusamus soluta tenetur",
  price,
  recommended = false,
}: PizzaCardProps) {
  const [isChecked, setIsChecked] = useState(false);

  const addToCart = () => {
    setIsChecked(!isChecked);
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
            <Button size="large">Quero!</Button>
          </S.Recommended>
        )}
        {price && !recommended && (
          <S.Price recommended={recommended}>R$ {price.toFixed(2)}</S.Price>
        )}
      </S.Info>
    </S.Wrapper>
  );
}
