import React, { Component } from 'react'
// 引入路由
import {HashRouter,Route,Switch} from "react-router-dom"
// 引入登录页
import Login from "./pages/login/login"
// 引入注册页
import Reg from "./pages/reg/reg"
// 引入首页
// import Main from "./pages/main/main"
import Nav from "./pages/nav/nav"
import Chartcontent from "./pages/chartcontent/chartcontent"
import Chart from "./pages/chart/chart"
// 引入错误页面
import Error404 from "./pages/error404/error404"
// 引入store
import store from "./store/store.js"
// 引入数据容器组件
import {Provider} from "react-redux"

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <Switch>
            <Route path="/" component={Nav} exact> </Route>
            <Route path="/login" component={Login}> </Route>
            <Route path="/reg" component={Reg}> </Route>
            <Route path="/chart" component={Chartcontent}> </Route>
            <Route path="/charts" component={Chart}> </Route>
            <Route component={Error404}></Route>
          </Switch>
        </HashRouter>
      </Provider>
    )
  }
}
