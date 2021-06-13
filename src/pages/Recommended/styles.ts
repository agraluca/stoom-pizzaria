import styled, { css } from "styled-components";

import { Container } from "components/Container";

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;

    justify-content: center;

    ${Container} {
      margin: ${theme.spacings.large};
    }
    a {
      text-decoration: none;
    }
    .pay {
      width: 100%;
      margin-bottom: ${theme.spacings.small};
    }
    .cancel {
      width: 100%;
      margin-bottom: ${theme.spacings.xxsmall};
    }
  `}
`;
