import React, { Component } from 'react'
// 引入请求
import {listinfo} from "../../api/api"
import Flist from "../../components/fclist"
// 引入样式
// import "./main.less"
import "./main.less"
export default class list extends Component {
    constructor(p){
        super(p)
        this.state={
            datalist:[],
            // page:"",
            // rows:""
        }
            
        }
  render() {
    return (
      <div className="lists">
      <p>猜你喜欢</p>
            {
            this.state.datalist.map((item)=>{
                    
                return   <Flist {...item} key={item._id}></Flist>
                    })
            }
      </div>
    )
}
async componentDidMount(){
        let res=await listinfo(1,10)
        this.setState({
        datalist:res.data
    })
}
}
