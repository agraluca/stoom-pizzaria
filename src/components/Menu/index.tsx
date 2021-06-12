import * as S from "./styles";
import logo from "assets/img/stoom_logo.svg";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <S.Wrapper>
      <Link to="/">
        <S.Logo src={logo} alt="Logo da Stoom" />
      </Link>
      <S.MenuGroup>
        <Link to="/">Home</Link>
        <Link to="/cardapio">Cardapio</Link>
      </S.MenuGroup>
    </S.Wrapper>
  );
}
