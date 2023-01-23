import { createRouter, createWebHistory } from 'vue-router'
import CatalogPage from '../catalog/pages/CatalogPage.vue'
import AddOrEditItemPage from '@/catalog/pages/AddOrEditItemPage.vue'
import LoginPage from '@/auth/pages/LoginPage.vue'
import RegisterPage from '@/auth/pages/RegisterPage.vue'
import AuthorsPage from '@/authors/pages/AuthorsPage.vue'
import FavouritesPage from '@/favourites/pages/FavouritesPage.vue'

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
      path: '/register',
      name: 'register',
      component: RegisterPage,
    },
    {
      path: '/authors',
      name: 'authors',
      component: AuthorsPage,
    },
  ]
})

export default router
