export default {
  cartList(state) {
    return state.cartList
  },
  cartLength(state) {
    return state.cartList.length
  },
  isLoading: state => state.isLoading
}