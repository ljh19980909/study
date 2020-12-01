import React, { Component } from "react";

export default class Info extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.location.state);
  }
  render() {
    return (
      <div>
        <h2>{this.props.location.state.name}</h2>
        <h2>{this.props.location.state.age}</h2>
      </div>
    );
  }
}
