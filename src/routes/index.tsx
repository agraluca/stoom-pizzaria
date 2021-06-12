import { BrowserRouter, Switch, Route } from "react-router-dom";

import Menu from "components/Menu";
import Stepper from "components/Stepper";
import { Container } from "components/Container";

import Home from "pages/Home";
import FoodMenu from "pages/FoodMenu";
import DoughTypes from "pages/DoughTypes";
import Size from "pages/Size";
import Recommended from "pages/Recommended";

import * as paths from "./paths";

export default function Routes() {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route path={paths.home} component={Home} exact />
        <Container>
          <Stepper />
          <Route path={paths.pizzaMenu} component={FoodMenu} exact />
          <Route path={paths.dough} component={DoughTypes} exact />
          <Route path={paths.size} component={Size} exact />
          <Route path={paths.recommended} component={Recommended} exact />
        </Container>
        <Route render={() => <h1>404</h1>} />
      </Switch>
    </BrowserRouter>
  );
}
