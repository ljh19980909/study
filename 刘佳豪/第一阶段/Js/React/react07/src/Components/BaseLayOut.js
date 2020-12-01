import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Reacts from "./React动画/React动画";
import Redux from "./Redux/Redux";
import Fetch from "./Fetch/Fetch";
import "./BaseLayOut.css";
class BaseLayOut extends Component {
  render() {
    return (
      <div className="base">
        <div className="top">
          <Link to={"/react"}>React动画</Link>
          <Link to={"/redux"}>Redux状态管理</Link>
          <Link to={"/fetch"}>封装Fetch</Link>
        </div>
        <div className="footer">
          <Route path={"/react"} component={Reacts}></Route>
          <Route path={"/redux"} component={Redux}></Route>
          <Route path={"/fetch"} component={Fetch}></Route>
        </div>
      </div>
    );
  }
}

export default BaseLayOut;
