import React, { Component } from 'react'
import {Flex,WhiteSpace,List,InputItem,WingBlank,Button} from "antd-mobile"
// 引入connect
import "./history.less"
import {connect} from "react-redux"
 class history extends Component {
  constructor(p){
    super(p)
    this.state={
        search:"",
        city:""
    }
  }
  render() {
    return (
      <div>
            <div className="search">
                  <div>
                    {this.state.city}▼
                  </div>
                  <InputItem
                      placeholder="请输入搜索内容"
                      value={this.state.search}
                      clear
                      onChange={(val) => {
                        this.setState({
                          search: val
                        })
                      }}
                    >
                    <img src={require("../../assts/imgs/搜索.png")} style={{ width: "1.5rem" }} />
                  </InputItem>
                  <div>
                    <img src={require("../../assts/imgs/定位.png")} style={{ width: "2rem" }} />
                  </div>
            </div>
            <div>
                  { 
                    this.props.history.filter((item)=>{
                      return  item.name.search(this.state.search)!=-1
                    }).map((item)=>{
                      return  <div className="listinfo" key={item._id}>
                        <div>
                        <img src={item.img===""?require("../../assts/imgs/暂无图片.jpg"):item.img}/>
                        {/* <img src={item.img}></img> */}
                        </div>
                        <div>
                          <p>{item.name}</p>
                          <p>{item.area} {item.address}</p>
                          <p>{item.point} {item.type}</p>
                        </div>
                        <div>
                          {item.price}/平
                        </div>
                      </div>
                    })
                  }
          </div>
      </div>
    )
  }
}
function filter(state){
  return{
    history:state.historys
  }
}
// 注入数据
export default connect(filter)(history)