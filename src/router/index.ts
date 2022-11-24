import { createRouter, createWebHistory } from 'vue-router'
import CatalogPage from '../catalog/pages/CatalogPage.vue'
import EditItemPage from '@/catalog/pages/EditItemPage.vue'

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
      component: EditItemPage
    },
  ]
})

export default router
