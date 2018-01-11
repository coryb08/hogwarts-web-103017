import React, { Component } from "react";
import "../App.css";
import AllPigs from "./AllPigs";
import Nav from "./Nav";
import porkers from "../porkers_data";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Nav/>
        <AllPigs/>
      </div>
    );
  }
}

export default App;
