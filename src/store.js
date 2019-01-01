import {createStore} from "redux"

let store=createStore(function(state=0,action){
        switch(action.type){
            case "AA" :return state+action.num
            default : return state
        }
})

function changName(num){
    return {
        type:"AA",
        num
    }
}

// 发送通知
store.dispatch(changName(1))
store.dispatch(changName(1))
store.dispatch(changName(1))
store.dispatch(changName(-1))
console.log(store.getState())
export default store