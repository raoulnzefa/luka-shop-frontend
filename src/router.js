import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cart',
      name: 'cart-summary',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/CartSummary.vue')
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('./views/Checkout.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/contact',
      name: 'contact-page',
      component: () => import('./views/ContactPage.vue')
    },
    {
      path: '/wishlist',
      name: 'wishlist-listing',
      component: () => import('./views/Wishlist.vue')
    }
  ]
})
