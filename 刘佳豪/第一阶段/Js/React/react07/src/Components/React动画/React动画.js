import React, { Component } from "react";
import "./Animation.css";
/*
    React提供了动画插件，react-transition-group
*/
import { CSSTransition } from "react-transition-group";
class Animation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFade: true,
      isFade2: true,
    };
  }
  render() {
    return (
      <div>
        <h2>动画组件</h2>
        {/* 通过CSSTransition组件，将需要做动画的组件包裹起来，我们也要通过一个变量控制组建的进入和离开效果
        CSSTransition组建的一些配置属性
            1.in         接收的控制变量
            2.timeout    动画的时间,毫秒
            3.classNames 自定义的类名
            4.onEntered  进入动画完成时的回调
            5.onExited   离开动画完成时的回调
        */}
        <CSSTransition
          in={this.state.isFade}
          timeout={2000}
          classNames={"fade"}
          onEntered={(el) => {
            console.log("进入动画完毕", el);
          }}
          onExited={(el) => {
            console.log("离开动画完毕", el);
          }}
        >
          <h2>Hello,react!!</h2>
        </CSSTransition>
        <button onClick={() => this.handleH2()}>点击</button>
        <hr />
        <button onClick={() => this.handleH1()}>
          {this.state.isFade2 ? "上来" : "下去"}
        </button>
        <CSSTransition
          in={this.state.isFade2}
          timeout={2000}
          classNames={"fades"}
          onEntered={(el) => {
            console.log("进入动画完毕", el);
          }}
          onExited={(el) => {
            console.log("离开动画完毕", el);
          }}
        >
          <li></li>
        </CSSTransition>
      </div>
    );
  }
  handleH2() {
    this.setState({
      isFade: !this.state.isFade,
    });
  }
  handleH1() {
    console.log(this.state.isFade2);
    this.setState({
      isFade2: !this.state.isFade2,
    });
  }
}

export default Animation;
