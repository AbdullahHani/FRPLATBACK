import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/Users/Auth.vue')
  },
  {
    path:'/',
    name:'Login',
    component: () => import("@/views/login")
  },

  {
    path: '/seller',
    name: 'Complete Profile',
    redirect: '/seller/complete',

    component: () => import("@/Layouts/DashboardLayout"),
    children : [
      {
      path: 'complete',
      name:'page',
      component: ()=> import('@/views/Users/CompleteProfile.vue')
      }
    ]
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    redirect: '/portfolio',
    component: () => import("@/Layouts/DashboardLayout"),
    children : [
      {
      path: '/',
      name:'page',
      component: ()=> import('@/views/Portfolios/Create.vue')
      }
    ]
  },
  {
    path: '/help&support',
    name: 'Help and Support',
    redirect: '/help&support',
    component: () => import("@/Layouts/DashboardLayout"),
    children : [
      {
      path: '',
      name:'Help and Support',
      component: ()=> import('@/views/HelpandSupport/Create.vue')
      }
    ]
  },
  {
    path: '/wallet',
    name: 'Cash Withdraw',
    redirect: '/wallet',
    component: () => import("@/Layouts/DashboardLayout"),
    children : [
      {
      path: 'withdraw',
      name:'Cash Withdraw',
      component: ()=> import('@/views/Wallet/Withdraw.vue')
      }
    ]
  },
  {
    path:'/profile',
    name: 'Profile Setting',
    redirect: '/profile',
    component:()=> import("@/Layouts/DashboardLayout"),
    children : [
      {
        path: 'profilesetting',
        name: 'Profile Setting',
        component:()=> import('@/views/Profile/Account.vue')
      },
      {
        path:'security',
        name:'Security',
        component: () => import('@/views/Profile/Security.vue')
      }
      {
        path:'billing',
        name:'Billing',
        component: () => import('@/views/Profile/Billing.vue')
      }
    ] 
  }, {
    path: '/',
    component: () => import('@/views/Users/Auth.vue')
  },
  {
    path: '/getstarted',
    name: 'Get Started',
    component: () => import('@/views/Users/GetStarted.vue')
  },
  {
    path: '/profile/complete',
    name: 'Get Started',
    component: () => import('@/views/Users/CompleteProfile.vue')
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('@/views/Detail.vue')
  },
  {
    path: '/gigs',
    name: 'Dashboard Layout',
    redirect: '/gigs',
    component: () => import('@/Layouts/DashboardLayout/index.vue'),
    children: [
      {
        path: '',
        name: 'Gigs',
        component: () => import('@/views/Gigs/Gigs.vue')
      },
      {
        path: 'create',
        name: 'Complete Profile',
        component: () => import('@/views/Gigs/CreateGig.vue')
      },
    ]
  },
  {
    path: '/messages',
    name: 'Dashboard Layout',
    redirect: '/messages',
    component: () => import('@/Layouts/DashboardLayout/index.vue'),
    children: [
      {
        path: '',
        name: 'Messages',
        component: () => import('@/views/Messages/index.vue')
      },
    ]
  },
  {
    path: '/graphicDesign',
    name: 'Dashboard Layout',
    redirect: '/graphicDesign',
    component: () => import('@/Layouts/DashboardLayout/index.vue'),
    children: [
      {
        path: '',
        name: 'GraphicDesign',
        component: () => import('@/views/Dashboard.vue')
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
