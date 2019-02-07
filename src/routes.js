import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from './components/Dashboard'
import Signup from "./components/Signup";

export default (
  <Switch>
    <Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/" component={Login} />
  </Switch>
);
