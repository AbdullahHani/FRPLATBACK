import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/Users/Auth.vue')
  },
  // Dashboard View
  {
    path: '/dashboard',
    name: 'Dashboard',
    redirect: '/dashboard',
    component: () => import('@/Layouts/DashboardLayout/index.vue'),
    children: [
      {
        path: '',
        name: 'Gigs List',
        component: () => import('@/views/Dashboard.vue')
      },
    ]
  },
  //Dashboard Layout
  {
    path: '/',
    name: 'Dashboard',
    component: () => import("@/Layouts/DashboardLayout"),
    children : [
      {
        path: '/getstarted',
        name: 'Get Started',
        component: () => import('@/views/Users/GetStarted.vue')
      },
      {
        path: '/detail',
        name: 'Texxens Overview',
        component: () => import('@/views/Detail.vue')
      }
    ]
  },
  // Seller's Routes for Profile Completion
  {
    path: '/seller',
    name: 'Seller',
    redirect: '/seller/complete',
    component: () => import("@/Layouts/DashboardLayout"),
    children : [
      {
      path: 'complete',
      name:'Complete Seller Profile',
      component: ()=> import('@/views/Users/CompleteProfile.vue')
      }
    ]
  },
  //Seller Portfolio
  {
    path: '/portfolio',
    name: 'Portfolio',
    redirect: '/portfolio',
    component: () => import("@/Layouts/DashboardLayout"),
    children : [
      {
        path: '',
        name:'View Portfolio',
        component: ()=> import('@/views/Portfolios/index.vue')
      },
      {
      path: ':id',
      name: 'Portfolio Detail',
      component: ()=> import('@/views/Portfolios/Detail.vue')
      },
      {
        path: 'create',
        name:'Create Portfolio',
        component: ()=> import('@/views/Portfolios/index.vue')
      },
    ]
  },
  // Seller Gigs
  {
    path: '/gigs',
    name: 'Gigs',
    redirect: '/gigs',
    component: () => import('@/Layouts/DashboardLayout/index.vue'),
    children: [
      {
        path: '',
        name: 'List of Gigs',
        component: () => import('@/views/Gigs/Gigs.vue')
      },
      {
        path: 'create',
        name: 'Create Gig',
        component: () => import('@/views/Gigs/CreateGig.vue')
      },
      {
        path: ':id',
        name: 'View Gig',
        component: () => import('@/views/Gigs/Detail.vue')
      }
    ]
  },
  // User Profile
  {
    path:'/profile',
    name: 'Profile',
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
        name:'Profile Security',
        component: () => import('@/views/Profile/Security.vue')
      },
      {
        path:'Notification',
        name:'Profile Notification',
        component: () => import('@/views/Profile/Notification.vue')
      },
      {
        path:'billing',
        name:'Profile Billing',
        component: () => import('@/views/Profile/Billing.vue')
      }
    ] 
  },
  //User Wallet
  {
    path: '/wallet',
    name: 'Wallet',
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
  //App Help and Support
  {
    path: '/help&support',
    name: 'Help and Support',
    redirect: '/help&support',
    component: () => import("@/Layouts/DashboardLayout"),
    children : [
      {
      path: '',
      name:'Request Support',
      component: ()=> import('@/views/HelpandSupport/Create.vue')
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
