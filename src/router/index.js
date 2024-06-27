import { createRouter, createWebHistory } from 'vue-router'

// layouts
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'

// vies
import HomeView from '../views/HomeView.vue'
import LandingPageView from '../views/LandingPageView.vue'
import ReportView from '../views/ReportView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing-page',
      components: {default: LandingPageView, Header} 
    },
    {
      path: '/login',
      name: 'login',
      components: {default: LoginView} 
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      components: {default: HomeView, Sidebar} 
    },
    {
      path: '/reports',
      name: 'reports',
      components: {default: ReportView, Sidebar} 
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
