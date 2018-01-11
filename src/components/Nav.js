import piggy from "../porco.png";
import React from "react";

// const jpgs = require.context("../src/hog-imgs", true, /\.jpg$/);

const Nav = props => {
  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
      <div className="hogTile">
        <div className="pork">
          <p key={props.pork.name}>{props.pork.name}</p>
          <img src={props.img} />
        </div>
      </div>
    </div>
  );
};

export default Nav;
// {jpgs.map(jpg => console.log)}

// <img src={require("../hog-imgs/mudblood.jpg")} />
