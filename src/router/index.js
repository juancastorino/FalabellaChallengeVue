import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import NumberList from '../views/NumberList.vue'
// import NumberList from '../views/Welcome.vue'

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/number_list',
    name: 'NumberList',
    component: NumberList
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
