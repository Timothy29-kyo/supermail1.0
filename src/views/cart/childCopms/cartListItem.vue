<template>
  <div class='shop-item'>
    <div class="item-selector">
        <check-button :is-checked="itemInfo.checked" @click.native="checkClick"/>
    </div>
    <div class="item-img">
      <img :src="itemInfo.img" alt="商品图片">
    </div>
    <div class="item-info">
      <div class="item-title">{{ itemInfo.title }}</div>
      <div class="item-desc">{{ itemInfo.desc }}</div>
      <div class="info-bottom">
        <div class="item-price left">￥{{ itemInfo.price }}</div>
        <div class="item-count right">×{{ itemInfo.count }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import CheckButton from '@/components/content/checkButton/CheckButton.vue';
  export default {
    name:'cartListItem',
    components:{
      CheckButton
    },
    props:{
      itemInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      checkClick(){
        this.itemInfo.checked = !this.itemInfo.checked
      }
    }
  }
</script>
<style scoped>
.shop-item{
  padding: 10px;
  width: 100%;
  height: 144px;
  border-bottom: 2px solid #d4d4d4;
}
.shop-item>div{
  display: inline-block;
  height: 100%;
}
.item-img{
  width: 30%;
}
.item-img img{
  height: 124px;
  width: 95px;
  border-radius: 8px;
  vertical-align:auto;
}
.item-info{
  width: 65%;
  position: relative;
  top: -40px;
  padding: 0 10px;
}
.item-title,.item-desc {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
}
.item-title{
  font-size: 20px;
  color: rgb(71, 71, 71);
}
.item-desc{
  color: rgb(112, 112, 112);
  margin:16px 0;
  font-size: 14px;
}
.info-bottom{
  padding-top: 10px;
}
.info-bottom {
  font-size: 18px;
}
.left{
  color: rgb(255, 102, 0);

}
.item-selector{
  width: 5%;
  position: relative;
  left: -5px;
  top: -56px;
 }
</style>