import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      background-color: ${theme.colors.orange};
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      ::-webkit-scrollbar {
        width: 0.8rem;
        background-color: ${theme.colors.gray};
      }
      ::-webkit-scrollbar-thumb {
        -webkit-border-radius: 1rem;
        border-radius: 1rem;
        background-color: ${theme.colors.black};
      }
    }
  `}

`;
export default GlobalStyles;
