<template>
  <div class='subcategory' v-if="subcategoryList.length !== 0">
    <scroll class="scroll-height">
      <div class="content-item" v-for="(item, index) in subcategoryList[0]" :key="index">
        <a :href="item.link"><img :src="item.image" alt=""> </a>
        <div>{{ item.title }}</div>
      </div>
    </scroll>
  </div>
</template>

<script>
import scroll from '@/components/common/scroll/scroll.vue';
export default {
  name: 'Subcategory',
  components: { scroll },
  props: {
    subcategoryList: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>
<style scoped>
.scroll-height {
  height: 100%;
  overflow: hidden;
}

.subcategory {
  width: 80%;
}

.content-item {
  margin-top: 5px;
  text-align: center;
  float: left;
  padding: 12px;
}

.content-item img {
  width: 60px;
  margin-bottom: 3px;
}</style>