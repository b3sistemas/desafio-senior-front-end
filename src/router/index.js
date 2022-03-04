import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ReadTask from '../components/ReadTask.vue'
import ReadTaskAuth from '../components/ReadTaskAuth.vue'
import CreateTask from '../components/CreateTask.vue'
import UpdateTask from '../components/UpdateTask.vue'
import DeleteTask from '../components/DeleteTask.vue'
import DoLogin from '../components/DoLogin.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  
  {
    path: '/read',
    name: 'Read',
    component: ReadTask
  },
  {
    path: '/read-auth',
    name: 'ReadAuth',
    component: ReadTaskAuth
  },
  {
    path: '/create',
    name: 'CreateTask',
    component: CreateTask
  }, 
  {
    path: '/update',
    name: 'UpdateTask',
    component: UpdateTask
  },
  {
    path: '/delete',
    name: 'DeleteTask',
    component: DeleteTask
  },
  {
    path: '/login',
    name: 'DoLogin',
    component: DoLogin
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
