import Vue from 'vue'
import Home from './home'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#home',
  components: { Home },
  data() {
    return {
      att: '342432'
    }
  }
})
