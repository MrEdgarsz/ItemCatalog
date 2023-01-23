import { createRouter, createWebHistory } from 'vue-router'
import CatalogPage from '../catalog/pages/CatalogPage.vue'
import FavouritesPage from '../catalog/pages/FavouritesPage.vue'
import AddOrEditItemPage from '@/catalog/pages/AddOrEditItemPage.vue'
import LoginPage from '@/auth/pages/LoginPage.vue'
import AuthorsPage from '@/authors/pages/AuthorsPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'catalog',
      component: CatalogPage
    },
    {
      path: '/favourites',
      name: 'favourites',
      component: FavouritesPage,
    },
    {
      path: '/edit-item/:productId',
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
    {
      path: '/authors',
      name: 'authors',
      component: AuthorsPage,
    },
  ]
})

export default router
