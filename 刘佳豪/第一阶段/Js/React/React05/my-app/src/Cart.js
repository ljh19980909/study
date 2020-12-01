import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Cart extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div>
        <div className="container-fluid">
          <h2>我的购物车</h2>
          <div className="alert alert-warning" role="alert">
            <Link to={"/product"}>点击返回商品列表</Link>
          </div>
          {/* 购物车列表 */}
          <table className="table table-striped">
            <thead>
              <tr>
                <th>商品名称</th>
                <th>单价</th>
                <th>数量</th>
                <th>小计</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              {this.props.a.map((v, i) => {
                return (
                  <tr key={i}>
                    <td>{v.name}</td>
                    <td>{v.price}</td>
                    <td>{v.count}</td>
                    <td>{v.price * v.count}</td>
                    <td>
                      <button className="btn btn-danger">删除</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
