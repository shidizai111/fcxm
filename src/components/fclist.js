import React, { Component } from 'react'
import "./fclist.less"
// 引入connect
import {connect} from "react-redux"
import {historyList} from "../store/actions"
class list extends Component {
  render() {
    // console.log(this.props.list)
    let {img,name,area,address,point,type,price}=this.props
    return (
      <div className="listinfo"  onClick={this.clickimg.bind(this)}>
        <div>
          <img src={img===""?require("../assts/imgs/暂无图片.jpg"):img}/>
        </div>
        <div>
          <p>{name}</p>
          <p>{area} {address}</p>
          <p>{point} {type}</p>
        </div>
        <div>
          {price}/平
        </div>
      </div>
    )
  }
  clickimg(){
    // console.log(this.props)
    // 修改状态
    this.props.dispatch(historyList(this.props))
  }
}

//  注入数据到组件
export default connect()(list)