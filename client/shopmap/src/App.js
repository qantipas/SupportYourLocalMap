import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Map from "./views/map";
import LandingPage from "./views/landing-page";
import Uberuns from "./views/uberuns";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/map" component={Map} />
        <Route exact path="/uberuns" component={Uberuns} />

        <Route exact path="/" component={LandingPage} />
      </Router>
    );
  }
}

export default App;
