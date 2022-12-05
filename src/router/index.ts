import { createRouter, createWebHistory } from 'vue-router'
import CatalogPage from '../catalog/pages/CatalogPage.vue'
import EditItemPage from '@/catalog/pages/EditItemPage.vue'
import AddOrEditItemPageVue from '@/catalog/pages/AddOrEditItemPage.vue'

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
