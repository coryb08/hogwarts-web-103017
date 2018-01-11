import React from "react";
import Pig from "./Pig";
import porkers from "../porkers_data";

export default class AllPigs extends React.Component {

  render() {
    console.log(porkers)
    return (
      <div>
       {porkers.map((pork, i) =>
         <Pig key={i} pork={pork}/>
       )}
      </div>
    )
  }


}
