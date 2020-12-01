import React, { Component } from "react";

export default class Child1 extends Component {
  constructor(props) {
    super(props);
    this.state = { c1Msg: "我是你妈妈" };
    this.btn = this.btn.bind(this);
  }
  render() {
    return (
      <fieldset>
        <legend>
          <h2>这是Child1组件</h2>
        </legend>
        <button onClick={this.btn}>点击向Child1组件传值</button>
      </fieldset>
    );
  }
  btn() {
    this.props.c1func(this.state.c1Msg);
  }
}
