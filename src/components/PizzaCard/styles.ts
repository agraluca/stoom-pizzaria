import styled, { css } from "styled-components";

import { Wrapper as Button } from "components/Button/styles";
import media from "styled-media-query";

export const Wrapper = styled.section`
  ${({ theme }) => css`
    height: 40rem;
    display: flex;
    justify-content: space-between;

    ${media.lessThan("medium")`
      flex-direction: column;
      height: auto;
    `};

    background-color: ${theme.colors.white};
    margin-bottom: ${theme.spacings.xlarge};
    border-radius: ${theme.border.radius};
  `}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    height: 100%;
    width: 30%;
    border-radius: ${theme.border.radius} 0 0 ${theme.border.radius};

    ${media.lessThan("medium")`
      width: 100%;
      height: 15rem;
      border-radius: ${theme.border.radius}  ${theme.border.radius} 0 0;
    `};
  `}
`;

export const Info = styled.aside`
  ${({ theme }) => css`
    margin: ${theme.spacings.large} 0 0 ${theme.spacings.large};
    width: 70%;
    display: flex;
    flex-direction: column;
  `}
`;

export const Header = styled.header`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: ${theme.spacings.small};
    margin-bottom: ${theme.spacings.medium};
    ${media.lessThan("medium")`
      padding-right: 0;
    `};
  `}
`;

export const Ribbon = styled.div`
  ${({ theme }) => css`
    text-align: center;
    background-color: ${theme.colors.orange};
    max-width: 15rem;
    padding: ${theme.spacings.xsmall};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.weight.bold};
    color: ${theme.colors.white};
    clip-path: polygon(
      0% 15%,
      15% 15%,
      15% 0%,
      85% 0%,
      85% 15%,
      100% 15%,
      100% 85%,
      85% 85%,
      85% 100%,
      15% 100%,
      15% 85%,
      0% 85%
    );
    ${media.lessThan("medium")`
      margin-left: ${theme.spacings.large};
    `};
  `}
`;

export const Name = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.black};
  `}
`;

export const CheckBox = styled.div`
  ${({ theme }) => css`
    margin-right: ${theme.spacings.xxsmall};
    cursor: pointer;
    position: relative;
    background: ${theme.colors.gray};
    width: 3rem;
    height: 3rem;
    border-radius: 100%;

    svg {
      position: absolute;
      left: 0.5rem;
      bottom: 0.8rem;
      pointer-events: none;
      z-index: ${theme.layers.menu};
      color: ${theme.colors.green};
      transform: scale(2.3);
    }
    ${media.lessThan("medium")`
      margin-right: 0;
    `};
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.darkGray};
    max-width: 30rem;
    margin-bottom: ${theme.spacings.medium};
  `}
`;

type RecommendedProps = {
  recommended: boolean;
};

export const Price = styled.span<RecommendedProps>`
  ${({ theme, recommended }) => css`
    font-size: ${recommended
      ? `${theme.font.sizes.xlarge}`
      : `${theme.font.sizes.large}`};
    font-weight: bold;
    color: ${theme.colors.green};

    ${media.lessThan("medium")`
     margin-bottom: ${theme.spacings.medium};
    `};
  `}
`;

export const Recommended = styled.section`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${Button} {
      width: 30%;
      margin-right: ${theme.spacings.medium};
    }

    .addRecommended {
      display: flex;
      svg {
        width: 3rem;
        height: 3rem;
        align-items: center;
      }
    }

    ${Price} {
      margin-bottom: 0;
    }

    ${media.lessThan("medium")`
     margin-bottom: ${theme.spacings.medium};
    `};
  `}
`;
