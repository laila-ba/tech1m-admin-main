import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Admin/Dashboard.vue'
import Companies from '../views/Admin/Companies.vue'
import Talents from '../views/Admin/Talents.vue'




const routes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    
    component: Dashboard
  },
  {
    path: '/companies',
    name: 'companies',
    
    component: Companies
  },
  {
    path: '/talents',
    name: 'talents',
    
    component: Talents
  },
 

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
