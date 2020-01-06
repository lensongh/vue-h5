import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import filters from './filters/index'
import wechat from '@/common/wechat/index'

import './icons'  //引入icons，svg适配


// 消除 click 移动浏览器300ms延迟
import attachFastClick from 'fastclick'
attachFastClick.attach(document.body)


Vue.use(wechat);
// 注入全局过滤器
Object.keys(filters).forEach(item => {
    Vue.filter(item, filters[item])
})

import 'vant/lib/index.css';
import { Dialog } from 'vant';
Vue.use(Dialog);
import Vant, {
    Lazyload
} from 'vant';
Vue.use(Vant);


// Vue.use(Lazyload, {

//     error: require('../src/static/img/default_failed.png'),
//     loading: require('../src/static/img/default_item.png'),

// });  懒加载图片设置


// document.onkeydown = function() {
//     var e = window.event || arguments[0];
//     if (e.keyCode == 123) {
      
//         return false;
//     }
// }

// document.oncontextmenu = function() {
  
//     return false;
// }       禁止f12和鼠标反键



router.afterEach((to,from)=>{
    window.pageYOffset = 0
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
   
  })
  router.beforeEach((to, from, next) => {
    document.body.scrollTop = 0
    // firefox
    document.documentElement.scrollTop = 0
    // safari
    window.pageYOffset = 0
    next()
  })
// 切换页面，滚动条回到头部






// const wx = Vue.wechat;
// wx.config({
//     appId: '',
//     nonceStr: '',
//     signature: '',
//     timestamp: '',
//     jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage']
// })
Vue.config.productionTip = false
Vue.config.devtools = true
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
