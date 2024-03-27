import { debounce } from '@/common/utils.js'
import BackTop from '@/components/content/backTop/BackTop.vue'
import { BACK_POSITION } from './const'
export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null,
      newRefresh: null
    }
  },
  mounted() {
    this.newRefresh = debounce(this.$refs.scroll.refresh, 500)
    this.itemImgListener = () => {
      this.newRefresh()
    }
    this.$bus.$on('itemImgLoad', this.itemImgListener)
    // console.log('hhh');
  }
}

export const backTopMixin = {
  data() {
    return {
      isShow: false,
    }
  },
  components: {
    BackTop
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500)
      // x,y,time(ms)
    },
    isBackTop(position) {
      //判断backtop是否显示
      this.isShow = (-position.y) > BACK_POSITION
    },
  }
}