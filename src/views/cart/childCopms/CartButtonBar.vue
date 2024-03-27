<template>
  <div class='bottom-bar'>
    <div class="check-content">
      <check-button :is-checked="isSelectAll" 
                    class="check-button"
                    @click.native="checkClick"/>
      <span>全选</span>
    </div>

    <div class="total">
     合计：{{ totalPrice }}
    </div>

    <div class="calculate" @click="calClick">
      去计算 ({{ checkedLength }})
    </div>
  </div>
</template>

<script>

  import CheckButton from '@/components/content/checkButton/CheckButton.vue' 

  import {mapGetters} from 'vuex'
  export default {
    name:'CartButtonBar',
    components:{
      CheckButton
    },
    computed:{
      ...mapGetters(['cartList']),
      totalPrice(){
        return '￥' + this.cartList.filter(item => {
          return item.checked
        }).reduce((prevalue,item) =>{
          return prevalue + item.price *item.count
        },0).toFixed(2)
      },
      checkedLength(){
        return this.cartList.filter(item => item.checked).length
      },
      isSelectAll(){
        if(this.cartList.length === 0) return false

        //1.使用filter
        // return !(this.cartList.filter(item => !item.checked).length)
        //2.使用find
        return !(this.cartList.find(item => !item.checked))
        //3.普通遍历
        // for (let item of this.cartList){
        //   if(!item.checked){
        //     return false
        //   }
        // }
        // return true
      }
    },
    methods:{
      checkClick(){ 
        if (this.isSelectAll) {
          this.cartList.forEach(item => item.checked = false);
        } else {this.cartList.forEach(item => item.checked = true)
        }  
      },
      calClick(){
        if(!this.isSelectAll){
          this.$toast.show('请选择购买的商品')
        }
      }
    }

  }
</script>
<style scoped>
.bottom-bar{
  position: relative;
  bottom: 0;
  width: 100%;
  height: 40px;
  background-color: #eee;
  display: flex;
  line-height: 40px;
  font-size: 14px;
}
.check-content{
  display: flex;
  /* padding-top: 10px; */
}
.check-button {
  width: 20px;
  height: 20px;
  line-height: 20px;
  margin: 9px 5px 0 5px;
}
.total{
  margin-left: 20px;
}
.calculate{
  width: 100px;
  height: 100%;
  background-color: var(--color-high-text);
  position: absolute;
  right: 0;
  bottom: 0;
  text-align: center;
}
</style>