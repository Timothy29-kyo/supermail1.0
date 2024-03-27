<template>
  <div class="category">
    <nav-bar class="nav-bar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <slide-bar :slide-bar-title="slideBarTitle" @slideBarBtnCLick="slideBarBtnCLick" />
    <scroll class="scroll-height">
      <subcategory :subcategory-list="subcategoryList" />
    </scroll>
  </div>
</template>

<script>
  import SlideBar from './childComps/SlideBar.vue';
  import NavBar from '@/components/common/navbar/NavBar.vue';
  import Subcategory from './childComps/Subcategory.vue'
  import scroll from '@/components/common/scroll/scroll.vue';
  import { getCategory,getCategoryDetail,getSubcategory } from '@/network/category';
  export default {
    name: 'Category',
    data() {
      return {
        //分类内容数据
        subcategoryList: [],
        categoryDetailList: [],

        //分类侧边栏数据
        slideBarTitle: [],
        currentIndex: 0,
      }
    },
    components: {
      NavBar,
      SlideBar,
      Subcategory,
      scroll,
    },
    created(){
      this.getCategory()
    },
    methods:{
      
      slideBarBtnCLick({maitKey,index}){
        //防止反复请求
        if(this.currentIndex = index) return;
        this.currentIndex = index

        // //每次切换分类初始化tabControl的下标
        // this.$refs.tabControl.currentIndex = 0;

        //请求对应的推荐列表
        // console.log(this.slideBarTitle[this.currentIndex].miniWallkey);
        this.getCategoryDetail(this.slideBarTitle[this.currentIndex].miniWallkey)
        this.getSubcategory(maitKey)
      },
      getCategory() {
        getCategory().then(res => {
          this.slideBarTitle = res.data.category.list;
  
          this.$nextTick(() => {
            this.getSubcategory(this.slideBarTitle[0].maitKey);
            this.getCategoryDetail(this.slideBarTitle[0].miniWallkey)
          })
        })
      },
      getSubcategory(key){
        getSubcategory(key).then(res => {
          // console.log(res.data.list);
          this.subcategoryList = [res.data.list];
          console.log(this.subcategoryList);
        })
      },
      getCategoryDetail(key){
        getCategoryDetail(key).then(res => {
          this.categoryDetailList = [res]
          console.log(this.categoryDetailList);
        })
      }
    },
    activated() {
      this.$store.commit("setLoading", true);
    }

  }
</script>

<style scoped>
.category {
  height: calc(100% - 44px - 49px) !important;
}

.nav-bar {
  font-weight: 600;
  color: white;
  background-color: var(--color-high-text);
}

.scroll-height {
  position: fixed;
  top: 44px;
  right: 0;
  left: 100px;
  bottom: 50px;
  overflow: hidden;
}
</style>
