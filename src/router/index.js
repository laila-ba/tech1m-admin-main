import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Admin/Dashboard.vue'
import Companies from '../views/Admin/Companies.vue'
import companiesView from '../views/Admin/companiesView.vue'
import Talents from '../views/Admin/Talents.vue'
import Jobs from '../views/Admin/Jobs.vue'
import talentView from '../views/Admin/talentView.vue'
import jobsView from '../views/Admin/jobsView.vue'
import skillTest from '../views/Admin/skillTest.vue'
import addTest from '../views/Admin/addTest.vue'
import Categories from '../views/Admin/Categories.vue'
import Tests from '../views/Admin/Tests.vue'
import formManagement from '../views/Admin/formManagement.vue'


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
    path: '/companiesView',
    name: 'companiesView',
    
    component: companiesView
  },
  {
    path: '/talents',
    name: 'talents',
    
    component: Talents
  },
  {
    path: '/jobs',
    name: 'jobs',
    
    component: Jobs
  },
  {
    path: '/jobsView',
    name: 'jobsView',
    
    component: jobsView
  },
  {
    path: '/talentView',
    name: 'talentView',
    
    component: talentView
  },
  {
    path: '/skill-test',
    name: 'skillTest',
    
    component: skillTest
  },
  {
    path: '/add-test',
    name: 'addTest',
    
    component: addTest
  },
  {
    path: '/categories',
    name: 'categories',
    
    component: Categories
  },
  {
    path: '/tests',
    name: 'tests',
    
    component: Tests
  },
  {
    path: '/formManagement',
    name: 'formManagement',
    
    component: formManagement
  },
 
 
 
 
 

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
