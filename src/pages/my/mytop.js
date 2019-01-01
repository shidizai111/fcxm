import React, { Component } from 'react'
// 引入样式
import "./my.less"
// 引入路由
import {HashRouter,Route,Switch,Link} from "react-router-dom"
export default class mytop extends Component {
    constructor(p){
        super(p)
        this.state={
            acc:"",
            iconlist:[
                {id:1,imgurl:"钱包.png",text:"钱包",text1:"0"},
                {id:2,imgurl:"优惠.png",text:"优惠",text1:"0"},
                {id:3,imgurl:"积分.png",text:"积分",text1:"0"}
            ]
        }
    }
  render() {
    // console.log(this.state.acc)
    return (
      <div className="mytop">
        <div className="top">
            <img src={require("../../assts/imgs/男头像.png")}/>
            <div>
                <div>
                    {
                   this.state.acc==undefined?
                    <p>
                        <Link to="/login" style={{fontSize:"2rem",color:"#fff"}}>登录/</Link>
                        <Link to="/reg" style={{fontSize:"2rem",color:"#fff"}}>注册</Link>
                    </p>
                       :
                   <p style={{fontSize:"2rem",color:"#fff"}}>
                      {this.state.acc }
                   </p> 
                    }
                </div>
                <p>可以和经纪人发起聊天</p>
            </div>
            <img src={require("../../assts/imgs/设置.png")} className="icon"/>
        </div>
        <div className="footer">
        {
            this.state.iconlist.map((item)=>{
                return   <div key={item.id}>
                            <p>{item.text1}</p>
                            <p>
                                <img src={require(`../../assts/imgs/${item.imgurl}`)}/>
                                <span>{item.text}</span>
                            </p>
                        </div>
            })
        }
        </div>
      </div>
    )
  }

  componentDidMount(){
      this.setState({
          acc:localStorage.acc
      })
  }
}
