<template>
  <div class='recommend'>
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

  export default {
    name:"RecommendView",
    props:{
      recommends:{
        type:Array,
        default(){
          return []
        }
      }
    }
  
  }
</script>
<style scoped>
  .recommend{
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;
    padding: 10px 0 20px;
    border-bottom: 10px solid #e4e4e4;
    
  }
  .recommend .recommend-item{
    flex: 1;
  }
  .recommend-item img{
    width: 85px;
    height: 85px;
    margin-bottom: 5px;
  }

</style>