import piggy from "../porco.png";
import React from "react";

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hog: ""
    }
  }

  handleClick = (e) => {
    this.setState({
      hog: e.target.id
    })
    console.log(e.target.id)
  }

  render() {
    let hogInfo = this.props.porkers.map(pork => {
      return (
        <div
          onClick={this.handleClick}
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

      if (this.state.hog) {
        let pork = this.props.porkers.find(pork => pork.name === this.state.hog)
        hogInfo = <div
          onClick={this.handleClick}
          id={pork.name}
          key={pork.name}
          >
          <img
            src={require(`../hog-imgs/${pork.name.toLowerCase()}.jpg`)}
            />
          <br/>
          <label>Hog Name:</label>
          <h2>{pork.name}</h2>
          <br />
          <label>Specialty:</label>
          <p>{pork.specialty}</p>
          <label>Greased:</label>
          <p>{pork.greased}</p>
          <p>{pork['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
          <p>{pork['highest medal achieved']}</p>
        </div>
      }
    return (
      <div className="navWrapper">
        <span className="headerText">Hogwarts</span>
        <div className="TwirlyPig">
          <img src={piggy} className="App-logo" alt="piggy" />
        </div>
        <span className="normalText">A React App for County Fair Hog Fans</span>
        <div className="hogTile">

          {hogInfo}

      </div>
    </div>
    );
  }
}

// const Nav = props => {
//
//   const handleClick = (e) => {
//     let pork = props.porkers.find(pork => pork.name === e.target.id)
//     console.log("the pork id", pork)
//     clicked: true
//
//     // (<div><p>{pork.name}</p> <img src={require(`../hog-imgs/${pork.name.toLowerCase()}.jpg`)}/></div>)
//
//     // clicked: true
//   }
//
  // let hogInfo = props.porkers.map(pork => {
  //   return (
  //     <div
  //       onClick={handleClick}
  //       clicked={this.clicked}
  //       id={pork.name}
  //       key={pork.name}
  //       >
  //       <img
  //         src={require(`../hog-imgs/${pork.name.toLowerCase()}.jpg`)}
  //         />
  //       <p>{pork.name}</p>
  //       <br />
  //     </div>
  //   );
  //     }
  //   )
//
//     if (this.clicked === true) {
//       hogInfo = "hi"
//     }
//
//
//
//   return (
//     <div className="navWrapper">
//       <span className="headerText">Hogwarts</span>
//       <div className="TwirlyPig">
//         <img src={piggy} className="App-logo" alt="piggy" />
//       </div>
//       <span className="normalText">A React App for County Fair Hog Fans</span>
//       <div className="hogTile">
//
//         {hogInfo}
//
//     </div>
//   </div>
// );
// };
//
// Nav.defaultProps = {
//   clicked: false
// }

export default Nav;
