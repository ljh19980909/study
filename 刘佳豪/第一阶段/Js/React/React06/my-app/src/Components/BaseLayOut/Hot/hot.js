import React, { Component } from "react";

export default class hot extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.match.params);
    // prams方式传递的值,通过this.props.match.params方式获取
  }
  render() {
    return (
      <div>
        这是hot组件
        <h2>{this.props.match.params.id}</h2>
        <p>名字是:{JSON.parse(this.props.match.params.info).name}</p>
        <p>年龄是:{JSON.parse(this.props.match.params.info).age}</p>
        <p>性别是:{JSON.parse(this.props.match.params.info).sex}</p>
      </div>
    );
  }
}
