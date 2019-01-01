import React, { Component } from 'react'
import {Link} from "react-router-dom"
import {Flex,WhiteSpace,List,InputItem,WingBlank,Button} from "antd-mobile"
// 引入公共样式
import "../../assts/style/common.less"
// 引入自己的样式
import "./login.less"
// 登录页面发送请求
import {logins} from "../../api/api"
export default class login extends Component {
  constructor(p){
    super(p)
    this.state={
      acc:'',
      pwd:""
    }
  }
  render() {
    return (
      <div className="loginstyle">
        <WhiteSpace size="xl" />
        <WhiteSpace size="xl" />
        <WhiteSpace size="xl" />
        <WhiteSpace size="xl" />
        {/* 图标 */}
        <Flex justify="center">
          <img className='logo' src={require('../../assts/imgs/house.png')} />
        </Flex>
        {/* 登录 */}
        <WhiteSpace size="xl" />
        <WhiteSpace size="xl" />
        <WingBlank size="lg">
          <List>
              <InputItem
                  placeholder="请输入用户名"
                  value={this.state.acc}
                  onChange={(val)=>{
                    this.setState({
                      acc:val
                    })
                  }}
                  >
              <img src={require("../../assts/imgs/用户.png")}/>
              </InputItem>
                <InputItem
                  placeholder="请输入密码"
                  type="password"
                  value={this.state.pwd}
                  onChange={(val)=>{
                    this.setState({
                      pwd:val
                    })
                  }}
                >
                <img src={require("../../assts/imgs/密码.png")}/>
                </InputItem>
          </List>
        </WingBlank>
        {/* 登录按钮 */}
        <WhiteSpace size="xl" />
        <WhiteSpace size="xl" />
        <WingBlank size="lg">
           <Button className="btn" onClick={this.loginclick.bind(this)}>登录</Button>
        </WingBlank>

        {/* 手机快速注册 */}
        <WhiteSpace size="xl" />
        <WingBlank size="lg">
        <Flex justify="between">
              <Link to="/reg">手机快速注册</Link>
              <Link to="/">忘记密码</Link>
        </Flex>
      </WingBlank>
        <WhiteSpace size="xl" />
        <WhiteSpace size="xl" />
        <WhiteSpace size="xl" />
        <WhiteSpace size="xl" />
        <WhiteSpace size="xl" />
        <WhiteSpace size="xl" />
      <Flex justify="center">
        <p>登录/注册代表用户同意《领航房产用户住房协议》</p>
      </Flex>
      </div>
    )
  }
  // 登录页面发送请求
  async loginclick(){
    const res=await logins(this.state.acc,this.state.pwd)
    // console.log(res)
    if(res.data=="pass"){
      this.props.history.push("/")
      localStorage.acc=this.state.acc
    }else{
      alert("登录失败")
    }
  }
}
