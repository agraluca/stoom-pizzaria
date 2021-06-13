import { BrowserRouter, Switch, Route } from "react-router-dom";

import Stepper from "components/Stepper";

import Home from "pages/Home";
import FoodMenu from "pages/FoodMenu";
import DoughTypes from "pages/DoughTypes";
import Size from "pages/Size";
import Recommended from "pages/Recommended";
import Success from "pages/Success";

import * as paths from "./paths";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={paths.home} component={Home} exact />

        <>
          <Stepper />
          <Route path={paths.pizzaMenu} component={FoodMenu} exact />
          <Route path={paths.dough} component={DoughTypes} exact />
          <Route path={paths.size} component={Size} exact />
          <Route path={paths.recommended} component={Recommended} exact />
          <Route path={paths.success} component={Success} exact />
        </>
        <Route render={() => <h1>404</h1>} />
      </Switch>
    </BrowserRouter>
  );
}
