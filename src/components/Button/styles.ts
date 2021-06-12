import styled, { css, DefaultTheme } from "styled-components";
import { ButtonProps } from ".";

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    width: 6.3rem;
    height: 3.5rem;
    font-size: ${theme.font.sizes.small};
  `,

  medium: (theme: DefaultTheme) => css`
    width: 33.1rem;
    height: 3.5rem;
    font-size: ${theme.font.sizes.medium};
  `,

  large: (theme: DefaultTheme) => css`
    width: 27.8rem;
    height: 4.8rem;
    font-size: ${theme.font.sizes.large};
  `,

  xlarge: (theme: DefaultTheme) => css`
    width: 32.6rem;
    height: 4.8rem;
    font-size: ${theme.font.sizes.large};
  `,
};

export const Wrapper = styled.button<ButtonProps>`
  ${({ theme, size }) => css`
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.white};
    background: ${theme.colors.green};
    border: none;
    border-radius: ${theme.border.radius};
    font-weight: ${theme.font.weight.bold};
    text-decoration: none;

    ${!!size && wrapperModifiers[size!](theme)}

    &:hover {
      opacity: 0.8;
    }

    &:disabled {
      cursor: not-allowed;
    }
  `}
`;
