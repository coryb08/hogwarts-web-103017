import piggy from "../porco.png";
import React from "react";

// const jpgs = require.context("../src/hog-imgs", true, /\.jpg$/);

const Nav = props => {
  // function renderPics(props) {
  //   props.forEach(porker => {
  //     if (props.name
  //   });
  // }
  // let thing = "../hog-imgs/cherub.jpg"

  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
    </div>
  );
};

export default Nav;
// {jpgs.map(jpg => console.log)}
// <div className="hogTile">
//   {props.porkers.map((pork, i) => (
//     <div className="pork">
//       <p key={i}>{pork.name}</p>
//       <img alt="piggysmalls" />
//     </div>
//   ))}
// </div>
