<template>
  <div class="sidecontent-item" v-show="subCategoryItem.length !== 0">
    <div v-for="item in subCategoryItem">
      <a :href="item.link">
        <img v-lazy="item.image" alt="subcategory" @load="imgLoad" >
        <p>{{ item.title }}</p>
      </a>
    </div>
    
  </div>
 
</template>

<script>
export default {
  
  name: 'CategorySideContentItem',
  props: {
    subCategoryItem: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  watch:{
  },
  methods: {
    imgLoad() {
      this.$bus.$emit('itemImgLoad');
    }
  }

}
</script>

<style scoped>
.sidecontent-item {
  width: 50%;
  flex: 1;
  text-align: center;
}

.sidecontent-item img {
  width: 100px;
}
</style>
