import React, { Component } from "react";
import { Link, Route, Redirect } from "react-router-dom";
import Reduxtwo from "./ReduxTwo";
import Reduxone from "./ReduxOne";
import "./Redux.css";

class Redux extends Component {
  render() {
    return (
      <div className="redux">
        <div className="left">
          <Link to={"/redux/reduxone"}>Reduxone</Link>
          <br />
          <Link to={"/redux/reduxtwo"}>Reduxtwo</Link>
        </div>
        <div className="right">
          <Route
            path={"/redux"}
            exact
            render={() => <Redirect to={"/redux/reduxone"} />}
          />
          <Route path={"/redux/reduxone"} component={Reduxone}></Route>
          <Route path={"/redux/reduxtwo"} component={Reduxtwo}></Route>
        </div>
      </div>
    );
  }
}

export default Redux;

/*
    Redux的核心概念:
        1.Action 
            本质上是一个javascript对象,作用是把数据传递给store,用户在调用dispatch方法的时候传入action对象,每个action对象都必须有一个type字段,表示将要执行的动作,type字段一般被定义成字符串常量
        2.Reducers
            本质上是一个函数,且是一个纯函数(函数的结果只受其参数的影响,除此之外不再受外界其他的变量的影响的函数)
            reducers指定了应用如何响应actions并将处理后的数据返回给store
            注意:actions只是描述了即将发生的事情,并不去更新数据,真正修改数据的是reducers,每次reducers修改数据之后都会返回一个新的数据.
        3.Store
            Store是一个对象,就是把action和reducers联系到一起,Store有以下几个职责:
                1.提供getState()方法 获取数据
                2.提供dispatch(action)方法更新数据
                3.提供subscribe(listener)方法注册监听器,监听redux的数据是否发生变化
                4.提供subscribe(listener)方法的返回值 移出监听器
*/
