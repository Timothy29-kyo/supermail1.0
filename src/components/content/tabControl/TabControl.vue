<template>
<div class='tab-control'>
  <div v-for="(item,index) in titles" 
        class="tab-item"
        :class="{active:index === currentIndex}"
        @click="itemClick(index)">
    <span>{{ item }}</span>
  </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name:'tab-control',
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
      currentIndex:0
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex = index
      this.$emit('tabClick',index)
    }
  }
}
</script>
<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 15px;
  background-color: #fff;
}
.tab-item{
  flex:1;
  height: 40px;
  line-height: 40px;
}
.tab-item span{
  padding: 5px;
}
.active{
  color: var(--color-high-text);
}
.active span {
  border-bottom: 2px solid var(--color-high-text);
}
</style>