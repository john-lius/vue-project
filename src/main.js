// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import router from './router/index.js'
import http from './js/http.js'
import toast from './components/toast/plugin'
import formatDate from 'js/dateFormat'
import './iconfont/iconfont.css'
import './styles/base.css'
import './styles/flex.css'

Vue.config.productionTip = false;
Vue.prototype.$login = http.login;
Vue.prototype.$post = http.post;
Vue.prototype.$get = http.get;
Vue.prototype.$format = formatDate;
Vue.use(VueResource);
Vue.use(toast);

/* eslint-disable  no-new */
// 引入路由

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
