<template>
  <div class='slide'>
    <slot></slot>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
  export default {
    name:'Slide',
//import引入的组件需要注入到对象中才能使用
  }
</script>


<style scoped>
/* //@import url(); 引入公共css类 */
  .slide {
    width: 100%;
    flex-shrink: 0;
  }
  .slide img {
    width: 100%;
  }

</style>