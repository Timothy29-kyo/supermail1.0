<template>
   <div id='detail'>
    <detail-nav-bar class="detailNavBar" @titleClick="titleClick" ref="nav"/>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <detail-swiper :top-imgs="topImgs"/>
      <detail-base-info :goods = "goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
      <detail-param-info ref="params" :param-info="paramInfo"/>
      <detail-comment-info ref="comment" :comment-info="commentInfo"/>
      <goods-list ref="recommend" :goods="recommendList"/>
    </scroll>
    <back-top @click.native="backClick" v-show="isShow" />

    <detail-bottom-bar @addCart="addToCart"/>
    
   </div>
</template>

<script>

  import DetailNavBar from './childComps/DetailNavBar.vue'
  import DetailSwiper from './childComps/DetailSwiper.vue'
  import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
  import DetailShopInfo from './childComps/DetailShopInfo.vue'
  import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
  import DetailParamInfo from './childComps/DetailParamInfo.vue'
  import DetailCommentInfo from './childComps/DetailCommentInfo.vue'
  import DetailBottomBar from './childComps/DetailBottemBar.vue'
  import GoodsList from '@/components/content/goods/GoodsList.vue'
  import Scroll from '@/components/common/scroll/scroll.vue'
  
  import { getDetail, getRecommend,Goods, Shop, GoodsParam } from '@/network/detail.js'
  import { itemListenerMixin, backTopMixin } from '@/common/mixin'
  import { debounce } from '../../common/utils'

  import { mapActions } from 'vuex'

  export default {
    name:'Detail',
    components:{
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      Scroll,
      DetailParamInfo,
      DetailCommentInfo,
      GoodsList,
      DetailBottomBar

    },
    data(){
      return{
        iid:null,
        topImgs:[],
        goods:{},
        shop:{},
        detailInfo:{},
        paramInfo:{},
        commentInfo:{},
        recommendList:[],
        themeTopYs:[],
        getThemeTopY:null,
        currentIndex:0
    }
  },
  mixins:[itemListenerMixin, backTopMixin],
  created(){
    //保存传入的iid
    this.iid = this.$route.params.iid

    //根据iid请求详情数据
    getDetail(this.iid).then(res=>{
      //获取顶部的图片轮播数据
      console.log(res)
      const data = res.result
      this.topImgs = data.itemInfo.topImages

      //获取商品信息
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)

      //获取商家信息
      this.shop = new Shop(data.shopInfo)

      //保存商品的详情数据
      this.detailInfo = data.detailInfo

      //获取商品规格信息
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

      //获取用户评价
      if(data.rate.cRate !== 0){
        this.commentInfo = data.rate.list[0];
      }

      //值不对的原因：this.$refs.params.$el没有被渲染
      // this.themeTopYs = []
      // this.themeTopYs.push(0)
      // this.themeTopYs.push(this.$refs.params.$el.offsetTop)
      // this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      // this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
      // console.log(this.themeTopYs);
      this.$nextTick(()=>{
        //根据最新的数据，对应的DOM已经被渲染
        //但是图片没有加载完（目前获取到的offsetTop不包含其中的图片）
        //offsetTop值不对的时候。都是因为图片问题

        // this.themeTopYs = []
        // this.themeTopYs.push(0)
        // this.themeTopYs.push(this.$refs.params.$el.offsetTop)
        // this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        // this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        // console.log(this.themeTopYs);
      })
      
    }),
    getRecommend().then(res=>{
      console.log(res);
      this.recommendList = res.data.list
    }),

    //给getThemeTopY赋值（对给this.themeTopY赋值的操作进行防抖）
    this.getThemeTopY = debounce(()=>{
      this.themeTopYs = []
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.params.$el.offsetTop)
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
      this.themeTopYs.push(Number.MAX_VALUE)
      console.log(this.themeTopYs);
    },100)
  
  },
  methods:{
    ...mapActions({
      add:'addCart'
    }),
    imageLoad(){
      this.newRefresh()

      this.getThemeTopY()
     
    },
    titleClick(index){
      this.$refs.scroll.scrollTo(0,-this.themeTopYs[index]+20,200)
    },

    contentScroll(position){
      // console.log(position);
      const positionY = -position.y
      let length = this.themeTopYs.length
      for(let i = 0; i<length - 1; i++){
        if(this.currentIndex !== i && 
          (i < length - 1 && 
          positionY >= this.themeTopYs[i] && 
          positionY < this.themeTopYs[i+1])){
          this.currentIndex = i
          // console.log(this.currentIndex);
          this.$refs.nav.currentIndex = this.currentIndex
        }
      }
      this.isBackTop(position)
    },
    addToCart(){
      const product = {}
      product.img  = this.topImgs[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.iid = this.iid

      // this.$store.commit('addCart',product)
      //actions可以返回promise
      // this.$store.dispatch('addCart',product).then(res => console.log(res))
      //mapActions 映射
      this.add(product).then(res => {
        this.$toast.show(res,3000)
        // console.log(this.$toast);
      })
    }

  },
  destroyed() {
    this.$bus.$off('itemImgLoad', this.itemImgListener)
  }  
}
</script>
<style scoped>
#detail{
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.content{
  height: calc(100% - 44px - 49px);
}
.detailNavBar{
  position: relative;
  z-index: 9;
  background-color: #fff;
}

</style>