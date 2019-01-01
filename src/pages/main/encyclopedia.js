import React, { Component } from 'react'
import "./main.less"
export default class encyclopedia extends Component {
    constructor(p){
        super(p)
        this.state={
            iconlist:[
                {id:1,imgurl:"贷款.png",text:"我要贷款"},
                {id:2,imgurl:"计算器.png",text:"房贷计算"},
                {id:3,imgurl:"知识.png",text:"知识"},
                {id:4,imgurl:"扫一扫.png",text:"扫一扫"}
            ]
        }
    }
  render() {
    return (
      <div className="encyclopedias">
          <span>房产全百科</span>
          <span>专业买房攻略</span>
          <div className="icons">
                {
                    this.state.iconlist.map((item)=>{
                        return <div key={item.id}>
                                    <img src={require(`../../assts/imgs/${item.imgurl}`)}/>
                                    <p>{item.text}</p>
                                </div>

                    })
                }
          </div>
      </div>
    )
  }
}
