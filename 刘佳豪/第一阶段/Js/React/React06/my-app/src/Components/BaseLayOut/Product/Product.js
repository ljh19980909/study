import React, { Component } from "react";

export default class Product extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.location.query);
  }
  // query方式传递过来的值,通过this.props.location.query获取
  render() {
    return (
      <div>
        商品
        <p>
          用户名是:{this.props.location.query.name},年龄是:
          {this.props.location.query.age}
        </p>
        <ul>
          <li>friend的名字是:{this.props.location.query.friend.name}</li>
          <li>friend的性别是:{this.props.location.query.friend.sex}</li>
          <li>friend的年龄是:{this.props.location.query.friend.age}</li>
        </ul>
      </div>
    );
  }
}
