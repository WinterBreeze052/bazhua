import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PhotoView from '../views/PhotoView.vue'
import InsetView from '../views/InsetView.vue'
import ShareView from '../views/ShareView.vue'
import UserView from '../views/UserView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }, {
      path: '/photo',
      name: 'photo',
      component: PhotoView
    },
    {
      path: '/inset',
      name: 'inset',
      component: InsetView
    },
    {
      path: '/share',
      name: 'share',
      component: ShareView
    },
    {
      path: '/user',
      name: 'user',
      component: UserView
    }
  ]
})

export default router
