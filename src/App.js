import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Home />
    </React.Fragment>
  );
}

export default App;
