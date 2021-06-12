import styled, { css } from "styled-components";
import media from "styled-media-query";
import { Container } from "components/Container";

export const Wrapper = styled.section`
  ${({ theme }) => css`
    height: 85vh;
    padding: ${theme.spacings.xxlarge} calc(${theme.spacings.xxlarge}*2);
    display: grid;
    grid-template-columns: repeat(2, minmax(35rem, 1fr));
    align-items: center;
    justify-content: center;
    column-gap: ${theme.grid.gutter};

    a {
      color: ${theme.colors.white};
      border: 0.2rem solid ${theme.colors.white};
      border-radius: ${theme.border.radius};
      text-decoration: none;
      padding: ${theme.spacings.xsmall};
      font-size: ${theme.font.sizes.large};
      font-weight: ${theme.font.weight.bold};

      &:hover {
        background-color: ${theme.colors.white};
        color: ${theme.colors.orange};
      }
    }

    ${media.lessThan("medium")`
      grid-template-columns: 1fr;
      height: 85vh;
      .imgHero{
        display: none;
      };
      ${Container} {
        padding-left: 0;
        padding-right: 0;
      };
    `};

    h1 {
      font-size: calc(${theme.font.sizes.xlarge}*2);
      line-height: calc(${theme.font.sizes.xlarge}*2);
      color: ${theme.colors.white};
    }

    p {
      margin: ${theme.spacings.medium} 0 ${theme.spacings.large} 0;

      font-size: ${theme.font.sizes.large};
      color: ${theme.colors.white};
    }

    img {
      width: 35rem;
      height: 40rem;
    }
  `}
`;
