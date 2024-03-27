<template>
   <div class='goods-info' v-if="Object.keys(detailInfo).length !== 0">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{ detailInfo.desc }}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{ detailInfo.detailImage[0].key }}</div>
    <div class="info-list">
      <img v-for="(item,index) in detailInfo.detailImage[0].list" :key="index" :src="item" @load="imgLoad" alt="">
    </div>
   </div>
</template>

<script>

   export default {
    name:'DetaiGoodslInfo',
    props:{
      detailInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    data(){
      return {
        counter:0,
        imagesLength:0
      }
    },
    methods:{
      imgLoad(){
        if(++this.counter === this.imagesLength){
          this.$emit('imageLoad')
        }
      }
    },
    watch:{
      detailInfo(){
        //获取图片个数
        this.imagesLength = this.detailInfo.detailImage[0].list.length
      }
    }

   }
</script>
<style scoped>
.info-list img{
  width:100%;
}
.info-desc,
.info-key {
  margin: 15px;
  color: #333;
}
.info-desc{
  position: relative;
}
.desc{
  padding: 15px 0;
}
.start,.end{
  position: relative;
  width: 100px;
  height: 1px;
  background-color:#a3a3a5 ;
}
.start {
  float: left;
}
.end{
  float: right;
}
.start::before,
.end::after{
  position: absolute;
  bottom: 0;
  content: "";
  width: 5px;
  height: 5px;
  background-color: black;
}
.end::after{
  right: 0;
}
</style>