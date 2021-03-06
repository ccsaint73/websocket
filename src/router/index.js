import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: ()=>import('@/pages/home')
    },
    {
    	path: '/detail/:id',
    	component: ()=>import('@/pages/detail')
    },
    {
    	path: '/editor',
    	component: ()=>import('@/pages/editor')
    }
  ]
})
