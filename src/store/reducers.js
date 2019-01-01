import { combineReducers } from 'redux'
// 状态计算着 合并状态
// 定义默认数据
// function name(state = '张三', action){
//     switch(action.type){
//         case 'CHANGE_NAME': return action.name
//         default: return state
//     }

// }

function historys(state =[], action){

    switch(action.type){
       case "ADD-LIST" :return Array.from(new Set([action.houseitem,...state]))
        default: return state
    }
}

/* 合并reducer，并暴露合并后产生的大reudcer */
export default combineReducers({
    historys
    // key(状态名)： value（对应的reducer)
})