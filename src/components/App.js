import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import porkers from "../porkers_data";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav porkers={porkers} />
      </div>
    );
  }
}

export default App;
