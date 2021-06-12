import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "pages/Home";
import Menu from "components/Menu";

import * as paths from "./paths";

export default function Routes() {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route path={paths.home} component={Home} />
        <Route render={() => <h1>404</h1>} />
      </Switch>
    </BrowserRouter>
  );
}
