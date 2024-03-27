<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control :titles="['流行', '新款', '精选']"
                      @tabClick="tabClick"
                      ref="tabControl1"
                      class="tab-control" v-show="isTabFixed"/>
    <scroll class="content" ref="scroll" 
            :probe-type="3" @scroll="contentscroll" 
            :pull-up-load="true" @pullingUp="loadmore">
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
      <home-recommend-view :recommends="recommends" />
      <feature-view/>
      <tab-control :titles="['流行', '新款', '精选']"
                  @tabClick="tabClick"
                  ref="tabControl2"/>
      <goods-list :goods="showGoods"/>
    </scroll>
    <back-top @click.native="backClick" v-show="isShow" />
      <!-- 监听组件的原生事件，必须给对应的事件加上.native修饰符 -->
  </div>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar.vue'
  import HomeSwiper from './ChildComps/HomeSwiper.vue'
  import HomeRecommendView from './ChildComps/HomeRecommendView.vue'
  import FeatureView from './ChildComps/FeatureView.vue'
  import TabControl from '@/components/content/tabControl/TabControl.vue'
  import GoodsList from '@/components/content/goods/GoodsList.vue'
  import Scroll from '@/components/common/scroll/scroll.vue'


  import { getHomeMultidata, getHomeGoods } from '@/network/home.js'
  import { itemListenerMixin, backTopMixin } from '@/common/mixin'

  export default {
    name: 'Home',
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommendView,
      FeatureView,
      TabControl,
      GoodsList,
      Scroll,
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
        },
        currentType:'pop',
        tabOffsetTop:0,
        isTabFixed:false,
        scrollY:0,
      }
    },
    mixins:[itemListenerMixin, backTopMixin],
    computed:{
      showGoods(){
      return this.goods[this.currentType].list
      }
    },
    created() {
      this.getHomeMultidata(),

      this.getHomeGoods('pop'),
      this.getHomeGoods('new'),
      this.getHomeGoods('sell')
    },
    destroyed(){
      console.log('aaa');
    },
    activated(){
      this.$refs.scroll.refresh()
      this.$refs.scroll.scrollTo(0,this.scrollY,0)
    },
    deactivated(){
      //获取Y值
      this.scrollY = this.$refs.scroll.getScrollY()

      //取消全局监听
      this.$bus.$off('itemImgLoad',this.itemImgListener)
    },
    methods:{
      
      //事件监听相关方法
      tabClick(index){
        switch(index){
          case 0:
            this.currentType='pop'
            break
          case 1:
            this.currentType='new'
            break
          case 2:
            this.currentType='sell'
            break
        }
        this.$refs.tabControl2.currentIndex = index
        this.$refs.tabControl1.currentIndex = index
      },
      //网络请求相关的方法
      getHomeMultidata(){
        getHomeMultidata().then(res => {
          // console.log(res);
          //res是一个变量，指向一个data大对象，箭头函数执行完被回收，res被垃圾回收
          // this.result = res
          //在箭头函数执行完之前，res赋值给result，result也指向这个大对象
          this.banners = res.data.banner.list;
          // this.dkeyword_list = res.data.dkeyword.list;
          // this.keywords_list = res.data.keywords.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeGoods(type){
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          // console.log(res);
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1

          this.$refs.scroll.finishPullUp()
        })
      },
      //自定义事件方法(监听)
      contentscroll(position){
        //判断backtop是否显示
        this.isBackTop(position)
        //决定tabcontrol是否吸顶（position：fixed）
        this.isTabFixed = (-position.y) > this.tabOffsetTop
      },
      loadmore(){
        // console.log('loadmore');
        this.getHomeGoods(this.currentType)

        this.$refs.scroll.scroll.refresh()
        //加载图片
      },
      swiperImageLoad(){
         this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
        // console.log(this.$refs.tabControl.$el.offsetTop);
      }
    }
  }
</script>

<style scoped>
#home{
  height: 100vh;
  position: relative;
}
  .home-nav {
    color: white;
    background-color: var(--color-tint);
  }
  .content{
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
  .tab-control {
    position: relative;
    top: -3px;
    z-index: 9;
  }

</style>
