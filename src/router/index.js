import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from '@/components/Dashboard'
import Reporting from '@/components/Reporting'
import Reporting_OverView from '@/components/Reporting_OverView'
import Reporting_User from '@/components/Reporting_User'
import Reporting_Account from '@/components/Reporting_Account'
import LongPositions from '@/components/LongPositions'
import ShortsPositions from '@/components/ShortsPositions'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/dashboard',
      component: Dashboard,
      children : [{
        path : 'longposition',
        component : resolve => require(['@/components/LongPositions.vue'],resolve)
      },
      {
        path : 'shortsposition',
        component : resolve => require(['@/components/ShortsPositions.vue'],resolve)
      }]
    },
    {
      path: '/reporting',
      component: Reporting,
      children : [{
        path : 'overview',
        component : resolve => require(['@/components/Reporting_OverView.vue'],resolve)
      },
      {
        path : 'user',
        component : resolve => require(['@/components/Reporting_User.vue'],resolve)
      },
      {
        path : 'account',
        component : resolve => require(['@/components/Reporting_Account.vue'],resolve)
      }]
    }
  ]
})
