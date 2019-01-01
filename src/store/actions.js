// 添加一条数据到历史记录里
// export function historyList(list){
//     return{
//         type:"ADD-LIST",
//         list
//     }
// }
/* 添加一条数据到房产数组内 */
export function historyList(houseitem){
    return {
        type: 'ADD-LIST',
        houseitem
    }
}