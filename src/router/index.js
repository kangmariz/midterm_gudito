import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Todo from '@/components/Todo.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/todo',
    name: 'todo',
    component: Todo
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
