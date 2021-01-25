import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Country from "./Country/Country";
import Main from "./Main/Main";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main}></Route>
        <Route path="/country/:name" exact component={Country}></Route>
      </Switch>
    </Router>
  );
}
