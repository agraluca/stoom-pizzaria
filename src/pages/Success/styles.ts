import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding-top: ${theme.spacings.large};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      color: ${theme.colors.white};
      text-align: center;
      margin-bottom: ${theme.spacings.small};
    }
    a {
      text-decoration: none;
    }
    .pay {
      margin-bottom: ${theme.spacings.medium};
      width: 100%;
    }
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
    text-align: center;
    max-width: 60rem;
    margin-bottom: ${theme.spacings.small};
  `}
`;
