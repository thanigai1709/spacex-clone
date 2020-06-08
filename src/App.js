import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Rockets from "./components/Rockets";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rockets" component={Rockets} />
      </Switch>
    </Router>
  );
}

export default App;
