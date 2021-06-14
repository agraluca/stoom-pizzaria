import styled, { css } from "styled-components";

import { Container } from "components/Container";
import { Wrapper as Button } from "components/Button/styles";

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;

    ${Container} {
      margin: ${theme.spacings.large};
      max-width: 60rem;
    }
    a {
      text-decoration: none;
    }
    ${Button} {
      width: 100%;
    }
  `}
`;
