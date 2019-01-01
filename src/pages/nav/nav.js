import React, { Component } from 'react'
import { TabBar } from "antd-mobile"
// import { url } from 'inspector';
// 引入首页
import  Main1 from "../main/main1";
import History from "../history/history";
import Chart from "../chart/chart";
import My from "../my/my";
export default class mainfooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 当前选中标签
      selectedTab: 'index',
      hidden: false,
      iconlist:[
        {id:1,title:"首页",key:"index1",icon:"index"},
        {id:2,title:"微聊",key:"chat",icon:"chart"},
        {id:3,title:"历史",key:"history",icon:"history"},
        {id:1,title:"我的",key:"my",icon:"my"},

      ]
      // fullScreen: false,
    };
  }
  // 渲染页面
  renderContent(pageText) {
    // console.log(pageText)
    switch(pageText){
      case "index1":return <Main1></Main1>
      case "chat":return <Chart></Chart>
      case "history":return <History></History>
      case "my":return <My></My>
    }
  }

  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          {/* 首页 */}
          {
            this.state.iconlist.map((item)=>{
              return (
                <TabBar.Item
                title={item.title}
                key={item.key}
                // 没被选中图标
                icon={
                  <img src={require(`../../assts/imgs/${item.icon}.png`)} style={{width:'1.5rem',height:"1.5rem"}}/>
                }
                // 被选中图标
                selectedIcon={
                  <img src={require(`../../assts/imgs/${item.icon}(1).png`)} style={{width:'1.5rem',height:"1.5rem"}}/>
                }
                // 被选中图标对应内容
                selected={this.state.selectedTab ===item.key}
                // badge={1}
                // tablebar
                // 点击事件
                onPress={() => {
                  this.setState({
                    selectedTab:item.key,
                  });
                }}
              
              >
                {this.renderContent(item.key)}
              </TabBar.Item>
              )
            })
          }
        </TabBar>
      </div>
    );
  }
}
