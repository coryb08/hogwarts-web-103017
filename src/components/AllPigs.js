import React from "react";
import Pig from "./Pig";
import porkers from "../porkers_data";

export default class AllPigs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filterby: ""
    }
  }

  handleClick = (e) => {
    this.setState({
      filterby: e.target.value
    })
  }

  render() {
    const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
    let piggies = porkers.map((pork, i) =>
      <Pig key={i} pork={pork}/>
    )

    if (this.state.filterby === 'name') {
      let sortedPigs = porkers.sort(function(a,b){
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      })
      piggies = sortedPigs.map((pork, i) =>
        <Pig key={i} pork={pork}/>)
    } else if (this.state.filterby === weight) {
      let sortedPigs = porkers.sort(function (a, b) {
        return a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
      })

       piggies = sortedPigs.map((pork, i) =>
        <Pig key={i} pork={pork}/>
      )
    } else if (this.state.filterby === 'greased') {
      let greasy = porkers.filter(pork => pork.greased === true)
      console.log(greasy);
       piggies = greasy.map((pork, i) =>
        <Pig key={i} pork={pork}/>
      )
    }

    return (
      <div>
        <div><center>
          <button value="name" onClick={this.handleClick}>Name</button>
          <button value={weight}  onClick={this.handleClick}>Weight</button>
          <button value="greased"  onClick={this.handleClick}>Greased</button>
        </center></div>

      {piggies}

      </div>
    )
  }


}
