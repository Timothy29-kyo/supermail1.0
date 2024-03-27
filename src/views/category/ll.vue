<template>
  <div class='slide-bar' v-if="slideBarTitle.length !== 0">
    <scroll class="slide-bar-height">
      <div class="content">
        <span v-for="(item, index) in slideBarTitle" :key="index" class="slide-bar-item"
          :class="currentIndex === index ? 'active' : ''" @click="slideBarBtnCLick(item, index)">
          {{ item.title }}
        </span>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from '@/components/common/scroll/scroll.vue'
export default {
  name: 'SlideBar',
  components: {
    Scroll
  },
  props: {
    slideBarTitle: {
      type: Array,
      default() {
        return []
      }
    }
  },
  created() {
    // console.log(this.slideBarTitle);
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    slideBarBtnCLick(item, index) {
      const obj = {
        maitKey: item.maitKey,
        index
      };
      this.currentIndex = index

      this.$emit('slideBarBtnCLick', obj)
    }
  }
}
</script>
<style scoped>
.slide-bar {
  height: 100vh;
  color: #666666;
}

.slide-bar-height {
  height: calc(100% - 44px - 49px);
  overflow: hidden;
  width: 100px;
}

.slide-bar-item {
  display: inline-block;
  text-align: center;
  width: 100px;
  height: 45px;
  line-height: 45px;
  font-size: 14px;

  background-color: rgb(235, 235, 235);
}

.active {
  background-color: #fff;
  color: var(--color-high-text);
  font-weight: 700;
  border-left: 2px solid var(--color-high-text);
}
</style>