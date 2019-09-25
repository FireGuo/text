import Vue from 'vue'
import Router from 'vue-router'

const I18nDemo = resolve=> require([('@/page/i18nDemo.vue')],resolve);
const HomePage = resolve=> require([('@/page/home/home.vue')],resolve);
const MokeDemo = resolve=> require([('@/page/mockDemo.vue')],resolve);



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/I18nDemo',
      name: 'I18nDemo',
      component: I18nDemo
    },
    {
      path: '/MokeDemo',
      name: 'MokeDemo',
      component: MokeDemo
    }
  ]
})
