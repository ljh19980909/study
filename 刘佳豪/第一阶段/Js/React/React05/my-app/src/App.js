import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import { BrowserRouter, Link, Route, Redirect } from "react-router-dom";
// import Child1 from "./Child1";
// import Child2 from "./Child2";
import Header from "./Header";
import ShopCart from "./ShopCart";
import Cart from "./Cart";
// import { Provider } from "./context"; // 引入Provider
// import Son from "./Son";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { a: "", fruit: "apple", count: 0 };
    console.log(this.state.a);
  }
  // getContext = () => {
  //   const { fruit, count } = this.state;
  //   return {
  //     fruit,
  //     countUtil: {
  //       addCount: (num) => {
  //         this.setState({
  //           count: count + num,
  //         });
  //       },
  //       delCount: (num) => {
  //         this.setState({
  //           count: count - num,
  //         });
  //       },
  //     },
  //   };
  // };
  render() {
    return (
      <div className="App">
        {/* <Child1
            c1func={(v) => {
              this.setState({ a: v });
              console.log(v, "请看这边");
            }}
          />
          <p>这是Child1传来的值:{this.state.a}</p>
          <Child2 a={this.state.a}></Child2> */}
        {/* <Header /> */}
        <BrowserRouter>
          <Header />
          <Link to={"/product"}></Link>
          <Route
            path={"/"}
            exact
            render={() => <Redirect to={"/product"} />}
          ></Route>
          <Route
            path={"/product"}
            render={() => {
              return (
                <ShopCart
                  product={(v) => {
                    this.setState({ a: v });
                  }}
                />
              );
            }}
          ></Route>
          <Route
            path={"/cart"}
            render={() => {
              return <Cart a={this.state.a} />;
            }}
          ></Route>
        </BrowserRouter>
      </div>
      //   <Provider value={this.getContext()}>
      //     父组件 fruit = {this.state.fruit},
      //     count = {this.state.count}
      //     <hr />
      //     <Son />
      //   </Provider>
    );
  }
}

export default App;
