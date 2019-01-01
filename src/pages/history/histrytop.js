import React, { Component } from 'react'
import {Flex,WhiteSpace,List,InputItem,WingBlank,Button} from "antd-mobile"
export default class histrytop extends Component {
    constructor(p){
        super(p)
        this.state={
            search:"",
            city:""
        }
      }
  render() {
    return (
        <div className="search">
            <div>
                {this.state.city}▼
            </div>
                <InputItem
                  placeholder="请输入搜索内容"
                  value={this.state.search}
                  clear
                  onChange={(val)=>{
                      this.setState({
                          search:val
                        })
                    }}
                  >
                <img src={require("../../assts/imgs/搜索.png")} style={{ width: "1.5rem" }} />
              </InputItem>
            <div>
                <img src={require("../../assts/imgs/定位.png")} style={{ width: "2rem" }} />
            </div>
        </div>
    )
  }
}
