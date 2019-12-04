import React from "react";
import { Switch, Route } from "react-router-dom";
import { Users } from "./pages";
import PrivateRoute from "./common/PrivateRoute";
import Login from "./pages/Login";
import Logout from "./pages/Logout";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/" component={Users} />
      <PrivateRoute exact paht="/logout" component={Logout} />
    </Switch>
  );
}
