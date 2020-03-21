import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Map from "./views/map";
class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/map" component={Map} />

        <Route exact path="/" component={Map} />
      </Router>
    );
  }
}

export default App;
