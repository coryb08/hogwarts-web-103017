import piggy from "../porco.png";
import React from "react";


const Nav = props => {
  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
      <div className="hogTile">
        {props.porkers.map(pork => (
          <div className="pork">
            <p key={pork.name}>{pork.name}</p>
            <img src={require(`../hog-imgs/${pork.name.toLowerCase()}.jpg`)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nav;
