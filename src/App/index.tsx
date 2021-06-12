import Routes from "routes";

import { ThemeProvider } from "styled-components";
import theme from "styles/theme";

import { Provider } from "react-redux";
import store from "store";

import GlobalStyles from "styles/global";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Routes />
        <GlobalStyles />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
