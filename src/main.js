import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import pub from './public/public'
import axios from 'axios'
import './public/init.css'

Vue.config.productionTip = false
//let token=localStorage['_token']
//console.log(localStorage['_token'])
// if(!token){
//   location.href='/hrPortal/views/login/login.html'
// }
//axios.defaults.headers.common['token'] = token;
Vue.prototype.pub = pub//公共插件
Vue.prototype.$ajax = axios//公共插件
pub.set_font()
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
