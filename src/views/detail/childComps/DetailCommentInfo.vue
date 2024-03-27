<template>
   <div class='comment-info' v-if="Object.keys(commentInfo).length !== 0">
    <div class="info-top">
      <span>用户评价</span>
      <span>更多</span>
    </div>
    <div class="info-user">
      <img :src="commentInfo.user.avatar" alt="">
      <span>{{commentInfo.user.uname}}</span>
    </div>
    <div class="info-detail">
      <p>{{ commentInfo.content }}</p>
      <span>{{ commentInfo.created | showDate }}</span>
      <span>{{ commentInfo.style }}</span>
    </div>
   </div>
</template>

<script>
import { formatDate } from '@/common/utils';
  export default {
    name:'DetailCommentInfo',
    props:{
      commentInfo:{
        type:Object
      }
    },
    filters:{
      showDate:function(value){
        let date = new Date(value*1000)
        return formatDate(date,"yyyy-MM-dd hh:mm")
      }
    }
  }
</script>
<style scoped>
.comment-info{
  width: 100%;
  padding: 20px 15px;
  border-top: 4px solid #f0f0f0;
  border-bottom: 4px solid #f0f0f0;

}
.info-top{
  width: 100%;
  height: 50px;
  font-size: 20px;
  border-bottom: 2px solid #f0f0f0;
}
.info-top span:first-child{
  float: left;
}
.info-top span:last-child{
  float: right;
}
.info-user{
  margin-top: 15px;
}
.info-user img{
  width: 35px;
  vertical-align: middle;
  margin-right: 10px;
}
.info-detail{
  margin: 10px 0;
}
.info-detail p{
  margin-bottom: 10px;
}
.info-detail span {
  color: #727272;
   padding-right: 10px;
}
</style>