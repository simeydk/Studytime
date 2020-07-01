import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// pages
import Home from "./components/pages/Home";
import Contingencies from "./components/pages/Contingencies";
import Communications from "./components/pages/Communications";
import Models from "./components/pages/Models";
import Flashcards from "./components/flashcards/Flashcards"
// import App from "./App";

// css
import "./index.css";

// Fonts
import "./fonts/MavenPro-VariableFont_wght.ttf";
import "./fonts/Poppins-Regular.ttf";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/communications-apps">
        <Communications />
      </Route>
      <Route path="/contingencies-apps">
        <Contingencies />
      </Route>
      <Route path="/models-apps">
        <Models />
      </Route>
      <Route path="/flashcards">
        <Flashcards />
      </Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);
