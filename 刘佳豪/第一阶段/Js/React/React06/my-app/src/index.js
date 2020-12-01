import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
/*
    我们使用react-router/react-router-dom插件实现react的路由效果
    React里的路由知识点：
        路由：根据url地址栏最后的数据定位
        1.插座：BrowserRouter组件，这是React里路由接口的实现，所有与路由有关的组件必须被BrowserRouter组件包裹，而且BrowserRouter组件里面只能包裹一个组件
        2.Router组件 路由的展示组件，类似于Vue里的router-view
            2.1 path属性
            2.2 component属性,展示的组件
            2.3 render属性,要重新选染成的组件
        3.Link组件   切换路由的组件，类似于Vue里的router-link
            3.1 to属性,重定向成的路由的值
        4.Redirect组件，用于路由重定向

        路由传参
            1.query传参
                特点:
                    1.1 不需要配置路由
                    1.2 to属性写成一个对象,路径pathname,传值query
                    1.3 传递的数据可以是复杂数据类型(数组,对象)
                    1.4 刷新页面,值销毁
            2.params传值
                    2.1 需要配置路由
                    2.2 需要传递的参数直接拼接在路由的后面,中间用/分割
                    2.3 不能传递复杂数据类型,除非将其json序列化
                    2.4 刷新页面,值还保留
            3.state传值
                    state的语法与query基本一致,传值的时候把query字段修改成state即可
                    state传递的值,在某些浏览器下刷新会丢失

*/
