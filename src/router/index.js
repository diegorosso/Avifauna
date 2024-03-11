import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FamilyView from '../views/FamilyView.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/familia/:familyName',
      name: 'family',
      component: FamilyView,
      props: true,
    },
  ]
})

export default router
