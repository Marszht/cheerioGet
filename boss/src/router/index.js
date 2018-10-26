import Vue from 'vue'
import Router from 'vue-router'
import Message from 'components/message/message'
import My from 'components/my/my'
import Position from 'components/position/position'
import Company from 'components/company/company'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/position'
    },
    {
      path: '/position',
      component: Position
    },
    {
      path: '/company',
      component: Company
    },
    {
      path: '/message',
      component: Message
    },
    {
      path: '/my',
      component: My
    }
  ]
})
