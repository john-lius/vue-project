import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/index/home'
import about from '@/components/index/about'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.use(Router)
Vue.use(iView)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: home
//     }
//   ]
// })

const routes = [
  {
    path: '/',
    name: 'login',
    component: r => require.ensure([], () => r(require('../views/login/login.vue')), 'logIn')
  },
  {
    path:"/home",
    name: 'home',
    component: home,
    children: [{
      path: "/about",
      name: 'about',
      component: about
    }]
  }
]

var router = new Router({
  routes
})
export default router
