import { ADD_COUNTER, ADD_TO_CART } from "./mutation-types"

export default {
  addCart({ state, commit }, payload) {
    return new Promise((resolve, reject) => {
      //payload 新添加的商品
      // let oldProduct = null
      // for(let item of state.cartList){
      //   if(item.iid === payload.iid){
      //     oldProduct = item
      //   }
      // }
      //查找之前是否有该商品，如果有，则赋值给oldProduct
      let oldProduct = state.cartList.find(item => item.iid === payload.iid)

      //判断是否有oldProduct
      if (oldProduct) {
        commit(ADD_COUNTER, oldProduct)
        resolve('当前商品数量+1')
      } else {
        payload.count = 1
        commit(ADD_TO_CART, payload)
        resolve('添加了新的商品')
      }
    })
  }
}