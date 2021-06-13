import logo from "assets/img/stoom_logo.svg";

import { useAppSelector } from "hooks";

import { Link } from "react-router-dom";

import * as S from "./styles";

export default function Stepper() {
  const { name, dough, size } = useAppSelector(({ order }) => order);

  return (
    <S.Wrapper>
      <Link to="/">
        <S.Logo src={logo} alt="Logo da Stoom" />
      </Link>
      <S.Stepper>
        <S.List>
          <span className={name ? "stepNumberActive" : "stepNumber"}>1</span>
          <span className="stepLabel">Passo 1</span>
        </S.List>
        <S.List>
          <span className={dough ? "stepNumberActive" : "stepNumber"}>2</span>
          <span className="stepLabel">Passo 2</span>
        </S.List>
        <S.List>
          <span className={size ? "stepNumberActive" : "stepNumber"}>3</span>
          <span className="stepLabel">Passo 3</span>
        </S.List>
      </S.Stepper>
    </S.Wrapper>
  );
}
