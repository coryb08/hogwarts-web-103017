import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import porkers from "../porkers_data";

class App extends Component {
  constructor() {
    super();
    this.state = { clicked: false };
  }
  handleClick = () =>
    this.setState({
      clicked: true
    });
  render() {
    return (
      <div className="App">
        <Nav
          handleClick={this.handleClick}
          clicked={this.state.clicked}
          porkers={porkers}
        />
      </div>
    );
  }
}

export default App;
