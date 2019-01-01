import React, { Component } from 'react'
import "./chartcontent.less"
import {WingBlank,WhiteSpace,Card,Button,InputItem} from "antd-mobile"
export default class chartcontent extends Component {
  constructor(p){
    super(p)
    this.state={
      content:'',
      id:0,
      list:[]
    }
  }
  render() {
    // console.log(this.state.list)
    return (
      <div className="chartcontent">
        {/* 内容 */}
        <ul className="content">
        {
          // this.state.list.map((item)=>{
          //   return  <li style={{color:red}}>{item}</li>
          // })
        }
         
        </ul>
       
        <InputItem
            value={this.state.content}
            onChange={(val)=>{
              this.setState({
                content:val
              })
            }}
            >
        </InputItem>

        <Button type="primary" className="btn" onClick={this.btn.bind(this)}>发送</Button>
      </div>
    )
  }
  btn(){
// if(this.state.content!==""){
//   this.setState({
//     list:this.state.content
//   })
// }
    // 
    // console.log(this.state.list)
  }

}
