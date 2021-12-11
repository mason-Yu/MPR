import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ServiceHall from '@/view/ServiceHall'
import User from '@/view/User'
import Management from '@/view/Management'
import Personnel from '@/view/Personnel'
import Alarm from '@/view/Alarm'
import SingleTest from '@/view/SingleTest'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/view/ServiceHall',
      name: 'ServiceHall',
      component: ServiceHall
    }, 
    {
      path: '/view/Management',
      name: 'Management',
      component: Management
    },
    {
      path: '/view/User',
      name: 'User',
      component: User
    }, 
    {
      path: '/view/Personnel',
      name: 'Personnel',
      component: Personnel
    }, 
    {
      path: '/view/Alarm',
      name: 'Alarm',
      component: Alarm
    }, 
    {
      path: '/view/SingleTest',
      name: 'SingleTest',
      component: SingleTest
    }
  ]
})
