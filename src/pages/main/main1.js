import React, { Component } from 'react'
// 引入搜索
import Search from "./search"
// 引入轮播图
import Slideshow from "./slideshow"
// 引入房产信息图标
import Mainicon from "./mainicon"
// 引入房产百科
import Encyclopedia from "./encyclopedia"
// 引入房产信息
import List from "./list.js"
export default class main1 extends Component {
  render() {
    return (
      <div>
        <Search></Search>
        <Slideshow></Slideshow>
        <Mainicon></Mainicon>
        <Encyclopedia></Encyclopedia>
        <List></List>
      </div>
    )
  }
}
