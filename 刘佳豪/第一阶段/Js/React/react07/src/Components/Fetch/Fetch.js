import React, { Component } from "react";
import Network from "./network";

class Fetch extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>封装Fetch</h1>
      </div>
    );
  }
  componentDidMount() {
    Network.get("/get")
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
    Network.post("/post", { name: "张三", age: 20 })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export default Fetch;
