<template>
  <div class="cart">
    <!-- 顶部 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{ length }})</div>
    </nav-bar>

    <!-- 商品展示 -->
    <cart-list/>
    

    <!-- 底部汇总 -->
    <cart-button-bar></cart-button-bar>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue';
import { mapGetters } from 'vuex';

import cartList from './childCopms/cartList.vue'
import CartButtonBar from './childCopms/CartButtonBar.vue'
export default {
  name: 'Cart',
  components:{
    NavBar,
    cartList,
    CartButtonBar
  },
  computed:{
    // ...mapGetters(['cartList','cartLength'])
    ...mapGetters({
      length:'cartLength'
    })
  }
}
</script>

<style scoped>
.cart {
  height: 100vh;
}
.nav-bar{
  background-color: var(--color-high-text);
  color:white;
  font-weight: 600;
}
</style>
