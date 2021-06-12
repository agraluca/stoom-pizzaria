import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0;
    right: 0;

    background-color: ${theme.colors.black};
    margin-bottom: ${theme.spacings.large};
    border-radius: 0 0 ${theme.border.radius} ${theme.border.radius};

    ul.stepper {
      display: flex;
    }
    li {
      list-style: none;
      a {
        color: ${theme.colors.white};
        text-decoration: none;

        .circle {
          width: 10rem;
          height: 10rem;
          border-radius: 100%;
          background-color: ${theme.colors.white};
        }
      }
    }
  `}
`;
