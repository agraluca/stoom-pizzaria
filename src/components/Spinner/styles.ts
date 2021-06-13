import styled, { css } from "styled-components";

export const Wrapper = styled.svg`
  ${({ theme }) => css`
    stroke: ${theme.colors.white};
    padding: 0.1rem;
    margin: 0.2rem;
    position: absolute;
    top: 50%;
    bottom: 50%;
    left: 50%;
    right: 50%;
  `}
`;
