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
      component: AddOrEditItemPageVue,
    },
    {
      path: '/add-item',
      name: 'addItem',
      component: AddOrEditItemPageVue
    },
  ]
})

export default router
