import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { math } from './utils/math.js'
import toast from '@/components/common/toast'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false
//安装toast插件
Vue.use(toast)
//使用懒加载插件
Vue.use(VueLazyload, {
  loading: require('@/assets/img/common/placeholder.png')
})

//$bus事件总线
Vue.prototype.$bus = new Vue()


//解决移动端300ms延迟
FastClick.attach(document.body)

new Vue({
  router,
  store,
  math,

  render: h => h(App)
}).$mount('#app')



