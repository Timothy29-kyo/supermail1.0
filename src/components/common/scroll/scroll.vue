<template>
  <div class='wrapper'>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BetterScroll from 'better-scroll'
  export default {
    name:'Scroll',
    data() {
      return {
        scroll:null
      }
    },
    props:{
      probeType:{
        type:Number,
        default:0
      },
      pullUpLoad:{
        type:Boolean,
        default:false
      }
    },
    mounted(){
      this.scroll = new BetterScroll('.wrapper',{
        probeType:this.probeType,
        pullUpLoad:this.pullUpLoad,
        click:true,
        observeDOM:true,
        disableTouch: false
        // div标签必须click为true才能点击；button不设置也可
      })
      if(this.probeType ===2 || this.probeType === 3){
        this.scroll.on('scroll', position => {
        // console.log(position);
        this.$emit('scroll', position)
        // console.log(this.scroll);
      })
      }
      
      if(this.pullUpLoad){
        this.scroll.on('pullingUp', () => {
          // console.log('pullinginging');
          this.$emit('pullingUp')
        })
      }
    } ,
    methods: {
      scrollTo(x, y, time = 300) {
        this.scroll && this.scroll.scrollTo(x, y, time)
      },
      finishPullUp(){
        this.scroll&&this.scroll.finishPullUp()
      },
      refresh(){
        this.scroll && this.scroll.refresh()
        // console.log('============');
      },
      getScrollY(){
        return this.scroll ? this.scroll.y : 0
      }
      
    }
  }
</script>

<style scoped>
/* scoped表示 作用域 */

</style>