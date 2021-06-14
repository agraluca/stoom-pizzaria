import styled, { css } from "styled-components";

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacings.small} ${theme.spacings.medium};
    background: ${theme.colors.black};
    height: 15vh;
  `}
`;

export const Logo = styled.img`
  ${() => css`
    width: 15rem;
  `}
`;

export const MenuGroup = styled.nav`
  ${({ theme }) => css`
    display: flex;

    a {
      color: ${theme.colors.white};
      text-decoration: none;
      font-size: ${theme.font.sizes.medium};
      position: relative;

      &:hover {
        &::after {
          content: "";
          position: absolute;
          display: block;
          height: 0.3rem;
          background-color: ${theme.colors.white};
          animation: hoverAnimation 0.2s forwards;
        }
      }
    }
    a:not(:last-child) {
      margin-right: ${theme.spacings.medium};
    }
    @keyframes hoverAnimation {
      from {
        width: 0;
        left: 50%;
      }
      to {
        width: 100%;
        left: 0;
      }
    }
  `}
`;
