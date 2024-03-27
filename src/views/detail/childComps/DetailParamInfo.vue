<template>
   <div class='param-info' v-if="Object.keys(paramInfo).length !== 0">
    <p>参考信息</p>
    <table v-for="(table,index) in paramInfo.sizes"
    class="info-size" :key="index">
      <tr v-for="(tr,indey) in table" :key="indey">
        <td v-for="(td,indez) in tr" :key="indez">{{ td }}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(info,index) in paramInfo.infos">
        <td class="info-param-key">{{ info.key }}</td>
        <td class="param-value">{{ info.value }}</td>
      </tr>
    </table>
    <div class="info-img" v-if="paramInfo.image.length !== 0">
      <img :src="paramInfo.image" alt="">
    </div>
   </div>
</template>

<script>
  export default {
    name:'DetailParamInfo',
    props:{
      paramInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>
<style scoped>
.param-info{
  width: 100%;
  margin-top: 30px;
  padding: 25px 15px;
  border-top: 3px solid #f0f0f0;
  color:#5f5f5f
}
p{
  text-align: center;
  margin-bottom: 10px;
  font-size: 20px;
}
.info-size,.info-param{
  width: 100%;
}
.info-size tr ,
.info-param tr{
  width: 100%;
  display: flex;
  padding: 8px 0;
  border-bottom: 2px solid #f0f0f0;
}
.info-size tr td,
.info-param tr td{
  flex: 1;
}
.info-param tr .param-value{
  color: var(--color-tint);
}
</style>