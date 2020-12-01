import React, { Component } from "react";
import "./Mine.css";
import { Link, Route, Redirect } from "react-router-dom";
import Info from "./Info";
import Order from "./Order";

export default class Mine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "刘佳豪",
      age: 999999,
      product: "苹果",
      price: "20元",
    };
  }
  render() {
    return (
      <div className="mine">
        <h2>个人中心组件</h2>
        <section>
          <div className="left">
            <Link
              to={{
                pathname: "/mine/info",
                state: { name: this.state.name, age: this.state.age },
              }}
            >
              个人信息
            </Link>
            <br />
            <Link
              to={{
                pathname: "/mine/order",
                state: { product: this.state.product, price: this.state.price },
              }}
            >
              我的订单
            </Link>
          </div>
          <div className="right">
            <Route
              path={"/mine"}
              exact
              render={() => (
                <Redirect
                  to={{
                    pathname: "/mine/info",
                    state: { name: this.state.name, age: this.state.age },
                  }}
                />
              )}
            />
            <Route path={"/mine/info"} component={Info} />
            <Route path={"/mine/order"} component={Order} />
          </div>
        </section>
      </div>
    );
  }
}
