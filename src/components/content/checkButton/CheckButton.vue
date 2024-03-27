<template>
  <div class='check-buttom' :class="{ check:isChecked}">
    <img src="../../../assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>

  export default {
    name:'CheckButoon',
    props:{
      isChecked:{
        type:Boolean,
        default:false
      }
    }
  }
</script>
<style scoped>
  .check-buttom{
    border-radius: 50%;
    border: 2px solid #aaa;
    width: 120%;
    height: 17%;
    
  }
  .check-buttom img {
    width: 100%;
  }
  .check{
    background-color: var(--color-high-text);
    border-color: red;
  }
</style>