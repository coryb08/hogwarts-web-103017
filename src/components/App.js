import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import porkers from "../porkers_data";

class App extends Component {
  render() {
    return (
      <div className="App">
        {porkers.map(pork => {
          <Nav img={require(`../hog-imgs/mudblood.jpg`)} pork={pork} />;
        })}
      </div>
    );
  }
}

export default App;
