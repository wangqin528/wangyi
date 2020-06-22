import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import router from './router/index'
import store from './store/index'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'lib-flexible/flexible'
// import style
import 'swiper/css/swiper.css'
import App from './App.vue'
import tabbar from '../src/components/tabbar'
import loading from '@/images/loading.gif'
import LyTab from 'ly-tab'

Vue.use(LyTab)
/* import './mock/mockServer' // 加载mock接口的主模块
import * as API from './api'  // 引入包含所有接口请求函数方法的对象 */
Vue.use(VueLazyload,{
  loading,
})
Vue.use(VueAwesomeSwiper)
// Vue.prototype.$API = API 
Vue.component('tabbar', tabbar)
Vue.config.productionTip = false

// Vue.component('header', header)
// Vue.component('tabbar', tabbar)
new Vue({
  // beforeCreate () {
  //   Vue.prototype.$bus = this  // 将当前vm作为事件总线保存到Vue原型对象 ==> 所有组件都可见
  // },
  render: h => h(App),
  router, // 配置路由器(内部的路由才生效访问)
  store, // 配置vuex的核心管理对象store  ===> 组件中可以通过$store得
}).$mount('#app')
