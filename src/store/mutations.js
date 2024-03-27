import { ADD_COUNTER, ADD_TO_CART, SET_LOADING } from "./mutation-types"

export default {
  //mutation位于的目的是修改state中的状态
  //mutation中的每个方法尽可能完成单一意见事
  [ADD_COUNTER](state, payload) {
    payload.count++
  },
  [ADD_TO_CART](state, payload) {
    payload.checked = true
    state.cartList.push(payload)
  },
  [SET_LOADING](state, bol) {
    state.isLoading = bol;
  }


}