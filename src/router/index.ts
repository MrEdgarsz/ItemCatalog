import { createRouter, createWebHistory } from 'vue-router'
import CatalogPage from '../catalog/pages/CatalogPage.vue'
import AddOrEditItemPage from '@/catalog/pages/AddOrEditItemPage.vue'
import LoginPage from '@/auth/pages/LoginPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'catalog',
      component: CatalogPage
    },
    {
      path: '/edit-item',
      name: 'editItem',
      component: AddOrEditItemPage,
    },
    {
      path: '/add-item',
      name: 'addItem',
      component: AddOrEditItemPage,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
    },
  ]
})

export default router
