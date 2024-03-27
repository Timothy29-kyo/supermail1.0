<!--  -->
<template>
  <div class="goods-item" @click="itemClick">
    <img v-lazy="goodsItem.show ? goodsItem.show.img : (goodsItem.image || goodsItem.img)" alt="" @load="imgLoad">
    <div class="goods-info">
      <P>{{ goodsItem.title }}</P>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name:'GoodsListItem',
  props:{
    goodsItem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    imgLoad(){
      this.$bus.$emit('itemImgLoad')
    },
    itemClick(){
      this.$router.push('/detail/'+this.goodsItem.iid)
      
    }

  }

}
</script>
<style scoped>
.goods-item{
  position: relative; 
  margin-bottom: 40px;
  width: 48%;
  padding: 2px;
}
.goods-item img {
  width: 100%;
  border-radius: 5px;
  display: block;
}
.goods-info{
  font-size: 12px;
  position: absolute;
  bottom: -40px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.goods-info .collect {
  position: relative;
}
.goods-info .collect::before{
  content: '';
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("../../../assets/img/common/collect.svg") 0 0/14px 14px;
}

</style>