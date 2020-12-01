import React, { Component } from "react";
import { MenuOutlined, SearchOutlined } from "@ant-design/icons";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import Recommend from "../Home/Recommend";
import Singers from "../Home/Singers";
import Rank from "../Home/Rank";
import "./Header.css";

export default class Header extends Component {
  constructor(props) {
    super(props);
    console.log();
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          {/* 顶部导航栏 */}
          <div className="sc-bdVaJa ftPzZG">
            <span className="iconfont menu">
              <MenuOutlined />
            </span>
            <span className="title">云音悦</span>
            <span className="iconfont search">
              <SearchOutlined />
            </span>
          </div>
          {/* 三个跳转路由 */}
          <div className="sc-bwzfXH ekkJku">
            <NavLink to={"/recommend"} activeClassName="selected">
              <div className="sc-htpNat cwZJmE">
                <span>推荐</span>
              </div>
            </NavLink>
            <NavLink to={"/singers"} activeClassName="selected">
              <div className="sc-htpNat cwZJmE">
                <span>歌手</span>
              </div>
            </NavLink>
            <NavLink to={"/rank"} activeClassName="selected">
              <div className="sc-htpNat cwZJmE">
                <span>排行榜</span>
              </div>
            </NavLink>
          </div>
          {/* 跳转的路由 */}
          <div>
            <Route path="/recommend" component={Recommend}></Route>
            <Route path="/singers" component={Singers}></Route>
            <Route path="/rank" component={Rank}></Route>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
