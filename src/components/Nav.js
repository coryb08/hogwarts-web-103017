import piggy from "../porco.png";
import React from "react";

// function handleClick(e) {
//   console.log(e.target.id);
// }

const Nav = props => {
  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
      <div className="hogTile">

        {props.porkers.map(pork => {
          return (
            <div
              onClick={props.handleClick}
              clicked={props.clicked}
              id={pork.name}
              key={pork.name}
              >
              <img
                src={require(`../hog-imgs/${pork.name.toLowerCase()}.jpg`)}
                />
              <p>{pork.name}</p>
              <br />
            </div>
          );
        }
      )
      
    }
    </div>
  </div>
);
};

export default Nav;
