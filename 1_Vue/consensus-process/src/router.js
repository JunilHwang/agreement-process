import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const views = './views'
const dashboard = `${views}/dashboard`

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/about'
    },
    {
      path: '/about',
      component: () => import(`${views}/about.vue`)
    },
    {
      path: '/release',
      component: () => import(`${views}/release.vue`)
    },
    {
      path: '/dashboard',
      component: () => import(`${dashboard}/index.vue`)
    }
  ]
})
