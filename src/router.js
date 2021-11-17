import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Select from "./views/Select";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/',
      name: 'Select',
      component: Select
    }
  ]
})
