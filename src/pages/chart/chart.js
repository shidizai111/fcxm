import React, { Component } from 'react'
import {WingBlank,WhiteSpace,Card,Button} from "antd-mobile"
import "./chart.less"
export default class chart extends Component {
  render() {
    return (
      <div className="charts">
          <Card className="cards">
            <Card.Body className="Card">
              <img src={require("../../assts/imgs/男头像.png")}/>
              <div>
                <p>职业顾问：<span className="font">张小妹</span></p>
                <p>专业服务 诚信做人 诚心做事</p>
              </div>
              <Button type="primary" className="btn" onClick={this.btn.bind(this)}>我要聊天</Button>
            </Card.Body>
          </Card>
          {/* <WhiteSpace size="lg" /> */}
        {/* </WingBlank> */}
      </div>
    )
  }
  btn(){
    window.location.href = '#/chart'
  }
}
