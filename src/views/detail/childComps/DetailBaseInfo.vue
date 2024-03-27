<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class='info-title'>{{ goods.title }}</div>
    <div class='info-price'>
      <span class="n-price">{{ goods.newPrice }}</span>
      <span class="o-price">{{ goods.oldPrice }}</span>
      <span v-if="goods.discount" class="discount">{{ goods.discount }}</span>
    </div>
    <div class='info-other'>
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length-1].name }}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{ goods.services[index-1].name }}</span>
      </span>
    </div>
   </div>
</template>

<script>
   export default {
    name:'DetailBaseInfo',
    props:{
      goods:{
        type:Object,
        default(){
          return {}
        }
      }
    }
   }
</script>
<style scoped>
.base-info{
  padding: 10px 6px;
}
.info-title{
  line-height: 21px;
  font-size: 20px;
}
.info-price{
  margin: 10px 0;
}
.n-price{
  font-size: 22px;
  color: var(--color-high-text);
}
.o-price{
 font-size: 12px;
 text-decoration: line-through;
 color: rgb(136, 136, 136);
 padding: 0 4px;
}
.discount{
  display: inline-block;
  padding: 2px;
  color: white;
  background-color: var(--color-high-text);
  border-radius: 6px;
}
.info-other{
  color: rgb(136, 136, 136);
}
.info-other,
.info-service {
  display: flex;
}
.info-other span,
.info-service span {
  flex: 1;
}
.info-other span:nth-child(2){
  text-align: center;
}
.info-other span:last-child{
  text-align: right;
}
.info-service{
  margin-top: 5px;
  width: 100%;
  height: 70px;
  line-height: 55px;
  color: rgb(21, 21, 21);
  padding: 7px 0;
  border-bottom: 1px solid rgba(111, 111, 111, 0.1);
  border-top: 1px solid rgba(111, 111, 111, .1);
  box-shadow: 0 0 8px rgb(247, 247, 247);
}
.info-service img{
  width: 13px;
}

</style>