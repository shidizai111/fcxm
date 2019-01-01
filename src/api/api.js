import axios from "axios"
const uslip="http://localhost:3000";
// const uslip="http://localhost:3000/";
const axs=axios.create({
    baseURL:uslip
})
// 注册页面发送请求
export function reg(username,pwd){
    if(uslip.indexOf("localhost")!=-1){
        return axs.post("/api/reg",{username,pwd})
    }else{

        return axs.post("/api/reg",{username,pwd})
    }
}
// 登录页面发送请求
export function logins(username,pwd){
    if(uslip.indexOf("localhost")!=-1){
        return axs.post("/api/login",{username,pwd})
    }else{

        return axs.post("/api/login",{username,pwd})
    }
}

// 房产信息请求
export function listinfo (page,rows){
    if(uslip.indexOf("localhost")!=-1){
        return axs.get("data.json",{page,rows})
    }else{
        return axs.get("/api/getHouseInfo",{page,rows})

    }
}