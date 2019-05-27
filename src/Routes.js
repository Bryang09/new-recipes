import React from "react";

import { Switch, Route } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Diets from "./Components/Diets/Diets";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route
        exact
        path="/meals/:page/:type/:param1?/:param2?/:param3?"
        component={Diets}
      />
    </Switch>
  );
};

export default Routes;
