import React, { Component } from 'react'
// 引入图标样式
import "../assts/style/icon.less"
export default class icon extends Component {
  render() {
    return (
      <div className="iconimg">
        <img src={require(`../assts/imgs/${this.props.imgsurl}`)}/>
        <p>{this.props.text}</p>
      </div>
    )
  }
}
