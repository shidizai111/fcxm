import React, { Component } from 'react'
// 引入less
import "./main.less"
export default class mainsearch extends Component {
  constructor(p){
    super(p)
    this.state={
      city:""
    }
  }
  render() {
    return (
      <div className="search">
        <div>
           {this.state.city}▼
        </div>
        <div className="scontent">
          <img src={require("../../assts/imgs/搜索.png")} style={{width:"1.5rem"}}/>
          <label>请输入搜索内容</label>
        </div>
        <div>
          <img src={require("../../assts/imgs/定位.png")} style={{width:"2rem"}}/>
        </div>
      </div>
    )
  }
  // 页面渲染完成生命周期函数
  componentDidMount(){
    // 腾讯地图定位
    // var geolocation = new window.qq.maps.Geolocation("O2VBZ-3J23D-ROG4Y-PPCJ2-P5SAJ-X7B3M", "myapp");
    // geolocation.getLocation(showPosition, showErr, options)
    // // 配置超时
    // var options = { timeout: 8000 };
    // var this_=this
    // function showPosition(position) {
    //   // console.log(position)
    //     this_.setState({
    //       city:position.city
    //     })
    // }
    // function showErr() {
    //   "定位失败！";
    // };
    // 高德地图定位
    var this_=this
    // window.AMap.plugin('AMap.CitySearch', function () {
    //   var citySearch = new window.AMap.CitySearch()
    //   citySearch.getLocalCity(function (status, result) {
    //     // console.log(result)
    //     if (status === 'complete' && result.info === 'OK') {
    //       // 查询成功，result即为当前所在城市信息
    //       this_.setState({
    //         city:result.city
    //       })

    //     }
    //   })
    // })
  }
}
