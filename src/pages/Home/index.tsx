import pizza from "assets/img/pizza.svg";
import { Link } from "react-router-dom";
import { Container } from "components/Container";
import * as S from "./styles";

export default function Home() {
  return (
    <S.Wrapper>
      <Container>
        <h1>Stoom Pizzaria</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
          voluptatem harum neque. Architecto eaque, numquam debitis, esse veniam
          culpa repudiandae commodi aliquid quas iure consectetur.
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
  );
}
