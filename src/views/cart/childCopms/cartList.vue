<template>
   <div class='cart-list'>
    <scroll class="content" ref="scroll">
      <!-- <li v-for="item in cartList">{{ item }}</li> -->
      <cart-list-item v-for="(item,index) in cartList" 
                      :key="index" 
                      :itemInfo="item"/>
    </scroll>
   </div>
</template>

<script>
  import Scroll from '@/components/common/scroll/scroll.vue'
  import { mapGetters } from 'vuex';
  import cartListItem from './cartListItem.vue'

  export default {
    name:'cartList',
    computed:{
      ...mapGetters(['cartList'])
    },
    components:{
      Scroll,
      cartListItem
    },
    activated(){
      this.$refs.scroll.refresh()
    }
  }
</script>
<style scoped>
.cart-list{
  height: calc(100% - 44px - 49px - 40px);
}
.content{
  height: 100%;
  overflow: hidden;
}
</style>