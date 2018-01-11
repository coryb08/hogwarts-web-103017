import React from 'react';

export default class Pig extends React.Component {

  constructor() {
    super();
    this.state = {clicked: false};
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    const pigs_info = (
      <div>
      <p>Weight: {this.props.pork.weight}</p>
      <p>Specialty: {this.props.pork.specialty}</p>
      <p>Greased? {this.props.pork.greased ? 'greased' : 'ungreased'}</p>
      <p>How many Refrigerators amount to the weight of this pig?</p>
      <p>{this.props.pork['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']} refrigeraters</p>
      </div>
    )

    return (
      <div
        onClick={this.handleClick}
        id={this.props.pork.name}
        key={this.props.pork.name}
        >
        <img
          src={require(`../hog-imgs/${this.props.pork.name.toLowerCase()}.jpg`)}
          />
        <p>{this.props.pork.name}</p>
          {this.state.clicked ? pigs_info : ''}
        <br />
      </div>
    )
  }
}
