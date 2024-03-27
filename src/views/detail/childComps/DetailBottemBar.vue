<template>
   <div class='bottom-bar'>
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>

   </div>
</template>

<script>
  export default {
    name:'DetailBottomBar',
    methods:{
      addToCart(){
        this.$emit('addCart')
      }
    }
  }
</script>
<style scoped>
.bottom-bar{
  position: relative;
  background-color: white;
  height: 49px;
  display: flex;
  border-bottom: 1px solid #cfcfcf;
}
.bar-item{
  flex:1;
  display: flex;
  text-align: center;
}
.bar-item>div{
  flex: 1;
}
.bar-right{
  line-height: 49px;
  font-size: 17px;
  border-top: 1px solid #919191;
}
.cart{
  background-color: rgb(250, 234, 11);
}
.buy{
  background-color: var(--color-high-text);
  color: white;
}
.icon{
  display: block;
  width: 22px;
  height: 22px;
  margin: 4px auto 0;
  background: url("../../../assets/img/detail/detail_bottom.png") 0 0/100%;
}
.service{
  background-position: 0 -54px;
}
.shop{
  background-position: 0 -98px;
}
</style>