
<template>
  <div id="homeswiper">
    <swiper>
      <swiper-item v-for="item in banners" >
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imageLoad">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
  import { Swiper,SwiperItem } from '@/components/common/swiper';
  export default {
    name:"HomeSwiper",
  //import引入的组件需要注入到对象中才能使用
    data(){
      return {
        isLoad:false
      }
    },
    components: {
      SwiperItem,
      Swiper
    },
    methods: {
      imageLoad() {
        if(!this.isLoad){
          // console.log('done');
          this.$emit('swiperImageLoad')
          this.isLoad = true
        }
      }
  },
    props:{
      banners:{
        type:Array,
        default(){
          return []
      }
    }
  }
   
  
    }
</script>
<style scoped>


</style>