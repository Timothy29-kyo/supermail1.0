<template>
   <div class='shop-info' v-if="Object.keys(shop).length !== 0">
    <div class="shop-top">
      <img :src="shop.logo" alt="" v-if="shop.logo">
      <span class="title">{{ shop.name }}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">
            {{ shop.sells | sellCountFilter }}
          </div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">
            {{ shop.goodsCount }}
          </div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr :key="index" v-for="(item,index) in shop.score">
            <td>{{ item.name }}</td>
            <td class="score" :class="{'score-better':item.isBetter}" >
              {{ item.score }}
            </td>
            <td class="better" :class="{'better-more':item.isBetter}">
              <span>{{ item.isBetter?"高":"低" }}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
   </div>
</template>

<script>
  export default {
    name:'DetailShopInfo',
    props:{
      shop:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    filters:{
      sellCountFilter(value){
        if(value < 10000) return value
        return (value/10000).toFixed(1) + "万"
      }
    }
  }
</script>
<style scoped>
.shop-info{
  margin: 15px 10px;
}
.shop-top{
  margin-bottom: 35px;
}
.shop-top img{
  width: 50px;
  vertical-align: middle;
}
.shop-top .title{
  margin-left: 10px;
  font-size: 18px;
}
.shop-middle{
  display: flex;
}
 .info-sells,
 .info-goods{
  display: inline-block;
  padding-left: 20px;
}
 .info-goods{
  padding-right: 35px;
}
.shop-middle-item {
  flex: 1;
}
 .info-sells .sells-count ,
 .info-goods .goods-count{
  font-size: 22px;
}
.info-sells .sells-text ,
 .info-goods .goods-text{
  font-size: 16px;
 }
 .info-sells .sells-text,
 .info-goods .goods-count{
  text-align: center;
}
 .info-goods{
  border-right: 1px solid rgba(108, 108, 108, .3);
}
.shop-middle-right{
  font-size: 16px;
  /* line-height: 16px; */
}
table{
  margin-left: 50px;
  margin-top: -25px;
}
table td{
  padding: 5px 0;
}
.score{
  padding: 0 10px;
  color:#5ea732;
}
.score-better{
  color: #f13e3a
}
.better span{
  color: white;
  background-color: #5ea732;
  border-radius: 3px;
}
.better-more span{
  background-color: #f13e3a;
}
.shop-bottom{
  margin-top: 30px;
  text-align: center;

}
.shop-bottom{
  height: 60px;
  border-bottom: 3px solid #f0f0f0;
}
.shop-bottom .enter-shop{
  font-size: 14px;
  display: inline-block;
  color:cadetblue;
  height: 30px;
  width: 130px;
  line-height: 30px;
  background-color: #f2f5f8;
}

</style>