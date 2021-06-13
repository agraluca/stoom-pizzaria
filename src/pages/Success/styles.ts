import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxlarge} 0 calc(${theme.spacings.xxlarge} * 3);
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      align-text: center;
      margin-bottom: ${theme.spacings.small};
    }
  `}
`;

export const CheckMark = styled.div`
  ${({ theme }) => css`
    text-align: center;
    padding: ${theme.spacings.small};
    svg {
      color: ${theme.colors.white};
      background: ${theme.colors.white};
      border-radius: 50%;
      padding: 1rem;
      width: 7rem;
    }
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
    text-align: center;
    max-width: 60rem;
    margin-bottom: ${theme.spacings.large};
  `}
`;
