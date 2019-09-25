// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'

import VueI18n from 'vue-i18n'
import 'element-ui/lib/theme-chalk/index.css';
import api from './api/index'
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'zh', // 语言标识
  messages: {
    'zh': require('./assets/lang/zh'),
    'en': require('./assets/lang/en')
  }
})

Vue.use(api)
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  components: { App },
  template: '<App/>'
})
