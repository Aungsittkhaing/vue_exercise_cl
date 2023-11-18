import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AllList from "../views/myShopList/AllList.vue";
import ContactView from "../views/ContactView.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about/',
    name: 'about',
    alias: '/about-us',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/alllist',
    name: 'alllist',
    component: AllList
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/404',
    name: '404Page',
    component: import('../views/404_page.vue')
  },
  {
    path: "/:pathMatch(.*)*",
    component: import('../views/404_page.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
