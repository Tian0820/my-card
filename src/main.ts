import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VModal from 'vue-js-modal'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(VModal, { dialog: true })

// 存储服务
var AV = require('leancloud-storage');
var { Query, User } = AV;
// 实时消息服务
var { Realtime, TextMessage } = require('leancloud-realtime');

axios.defaults.baseURL = '/api'
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export {App, router, store}