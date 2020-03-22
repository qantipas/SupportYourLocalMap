import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppBar from "./components/header";
import Map from "./views/map";
import LandingPage from "./views/landing-page";

class App extends Component {
  render() {
    return (
      <>
        <AppBar></AppBar>
        <Router>
          <Route exact path="/map" component={Map} />

          <Route exact path="/" component={LandingPage} />
        </Router>
      </>
    );
  }
}

export default App;
