import React, { Component } from 'react'
import {HashRouter,Route,Switch,Link} from "react-router-dom"
import {Flex,WhiteSpace,List,InputItem,WingBlank,Button} from "antd-mobile"
// 引入公共样式
import "../../assts/style/common.less"
// 引入自己的样式
import "./reg.less"
// 引入ajax
import {reg} from "../../api/api"
export default class login extends Component {
  //  this.regclick=this.regclick.bind(this)
  constructor(props){
    super(props)
    this.state={
      acc:'',
      pwd:"",
      // pwdtow:""
    }
  }
  render() {
    return (
      <div className="regstyle">
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
                </InputItem>
                {/* <InputItem
                  placeholder="请再次输入密码"
                  type="password"
                  value={this.state.pwdtow}
                  onChange={(val)=>{
                    this.setState({
                      pwdtow:val
                    })
                  }}
                >
                </InputItem> */}
          </List>
        </WingBlank>
        {/* 登录按钮 */}
        <WhiteSpace size="xl" />
        <WhiteSpace size="xl" />
        <WingBlank size="lg">
           <Button className="btn" onClick={this.regclick.bind(this)}>同意注册</Button>
        </WingBlank>

        {/* 手机快速注册 */}
        <WhiteSpace size="xl" />
        <WingBlank size="lg">
        <Flex justify="between">
              <Link to="/login">已有账号</Link>
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
  // 注册点击事件
 async regclick(){
    const res=await reg(this.state.acc,this.state.pwd)
    // console.log(res)
    this.props.history.push("/login")
  }
}

