<template>


  <div class='toast'>
    <div v-show="isShow" class="message">{{ message }}</div>
  </div>
</template>

<script>







  export default {
    name:'Toast',
    // props:{
    //   message:{
    //     type:String,
    //     default:''
    //   },
    //   show:{
    //     type:Boolean,
    //     default:false
    //   }
    // },
    data(){
      return {
        message:'',
        isShow:false
      }
    },
    methods:{
      show(message='默认文字',duration=3000){
        console.log(message,duration);
        this.message = message,
        this.isShow = true

        setTimeout(() => {
          this.isShow = false
          this.message = ''
        }, duration);
      }
    }
  }
</script>
<style scoped>
  /* .toast{
    width: 0;
    height: 0;
    z-index: 999;
    position: fixed;
    top: 50%;
    left: 50%; 
    transform: translate(-50%,-50%);
    background-color: rgba(0,0,0,.7);
    color: aliceblue;
  } */
  .message{
    z-index: 999;
    position: fixed;
    top: 50%;
    left: 50%; 
    transform: translate(-50%,-50%);
    background-color: rgba(0,0,0,.7);
    color: aliceblue;
    padding: 8px 10px ;
  }
</style>