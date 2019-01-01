import React, { Component } from 'react'
// 引入公共图标
import Icon from "../../components/icon"
// 引入样式
import "./main.less"
export default class mainicon extends Component {
    constructor(p){
        super(p)
        this.state={
            iconlist:[
                {id:"1",imgs:"新房.png",text:"新房"},
                {id:"2",imgs:"二手房.png",text:"二手房"},
                {id:"3",imgs:"房子4.png",text:"租房"},
                {id:"4",imgs:"写字楼.png",text:"商铺写字楼"},
                {id:"5",imgs:"卖房.png",text:"卖房"},
                {id:"6",imgs:"海外房产.png",text:"海外房产"},
                {id:"7",imgs:"小区.png",text:"小区房价"},
                {id:"8",imgs:"message.png",text:"问答"},
            ]
        }
    }
  render() {
    return (
      <div className="mianicon">
      {
          this.state.iconlist.map((item)=>
            <Icon imgsurl={item.imgs} text={item.text} key={item.id}></Icon>
          )
      }
      </div>
    )
  }
}
