import React, { Component } from "react";

export default class Order extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.location.state);
  }
  render() {
    return (
      <div>
        <h2>{this.props.location.state.product}</h2>
        <h2>{this.props.location.state.price}</h2>
      </div>
    );
  }
}
