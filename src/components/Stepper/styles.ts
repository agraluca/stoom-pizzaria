import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;

    align-items: center;
    justify-content: space-evenly;

    ${media.lessThan("medium")`
      flex-direction: column;
    `};

    background-color: ${theme.colors.black};
    padding-top: ${theme.spacings.large};
    padding-bottom: ${theme.spacings.large};
    border-radius: 0 0 ${theme.border.radius} ${theme.border.radius};

    overflow: hidden;
  `}
`;

export const Stepper = styled.ul`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 0.5rem;
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.gray};
    width: 50%;
    margin-bottom: ${theme.spacings.small};

    ${media.lessThan("medium")`
        margin-right: ${theme.spacings.large};
      `};

    list-style: none;
  `};
`;

export const List = styled.li`
  ${({ theme }) => css`
    .stepNumber {
      position: absolute;
      bottom: -2.5rem;

      display: flex;
      flex-direction: column;
      align-items: center;
      color: ${theme.colors.black};
      background-color: ${theme.colors.gray};
      border-radius: 50%;
      padding: ${theme.spacings.xsmall};
      width: 5rem;
    }

    .stepNumberActive {
      position: absolute;
      bottom: -2.5rem;

      display: flex;
      flex-direction: column;
      align-items: center;
      color: ${theme.colors.white};
      background-color: ${theme.colors.green};
      border-radius: 50%;
      padding: ${theme.spacings.xsmall};
      width: 5rem;
    }

    .stepLabel {
      color: ${theme.colors.white};
      position: absolute;
      bottom: -5rem;

      &:last-child {
        width: 100%;
      }
    }
  `}
`;

export const Logo = styled.img`
  ${({ theme }) => css`
    width: 15rem;
    ${media.lessThan("medium")`
      margin-bottom: ${theme.spacings.large};
    `};
  `}
`;
