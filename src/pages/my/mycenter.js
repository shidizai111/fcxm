import React, { Component } from 'react'
import {List} from "antd-mobile"
import "./my.less"
const Item = List.Item;    
export default class mycenter extends Component {
        state = {
        disabled: false,
        datalist:[
            {id:1,imgurl:"jifen.png",text:"我的积分"},
            {id:2,imgurl:"订阅.png",text:"我的订阅"},
            {id:3,imgurl:"联系人.png",text:"微聊联系人"},
            '',
            {id:4,imgurl:"计算器.png",text:"房贷计算器"},
            {id:5,imgurl:"index.png",text:"我的房子"},
            {id:6,imgurl:"记录.png",text:"看房记录"},
            '',
            {id:7,imgurl:"问答.png",text:"问答"},
            {id:8,imgurl:"shezhi.png",text:"设置"},
            {id:9,imgurl:"意见.png",text:"意见"}
        ]
        }
  render() {
    return (
      <div className="mycenter">
      {
          this.state.datalist.map((item)=>{
              if(item!==""){
            return      <List className="my-list" key={item.id}>
                            <Item arrow="horizontal" multipleLine onClick={() => { }}>
                                <img src={require(`../../assts/imgs/${item.imgurl}`)} style={{width:"1.5rem",height:"1.5rem"}}/>
                                <span>{item.text}</span>
                            </Item>
                        </List>
              }else{
                return  <div style={{width:"1rem",height:"1rem"}}></div>
              }
          })
      }
      </div>
    )
  }
}
