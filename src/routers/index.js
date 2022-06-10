import { createRouter, createWebHistory } from 'vue-router'

import WrapperComponent from '../WrapperComponent.vue'
import test1RoutedComponent from '../components/test1RoutedComponent.vue'
import test2RoutedComponent from '../components/test2RoutedComponent.vue'
import CatchComponent from '../components/CatchComponent.vue'
import StudentDetailsComponent from '../components/StudentDetailsComponent.vue'

const routes = [
  { path: '/', component: WrapperComponent },
  { path: '/test1', component: test1RoutedComponent },
  { path: '/test2', component: test2RoutedComponent },
  { path: '/studentdetails/:id', component: StudentDetailsComponent },
  { path: '/:catchAll(.*)', component: CatchComponent },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
