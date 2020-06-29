import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home"
import App from "./App";

import "./index.css";
import './fonts/RobotoMono-Regular.ttf'
import './fonts/MavenPro-VariableFont_wght.ttf'
import './fonts/Poppins-Regular.ttf'

ReactDOM.render(
  <Router>
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <App />
        </Route>
        <Route path="/dashboard">
          <App />
        </Route>
      </Switch>
    </div>
  </Router>,
  document.getElementById("root")
);
