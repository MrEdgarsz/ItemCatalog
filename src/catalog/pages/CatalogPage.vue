<script lang="ts" setup>
import RaisedButton from '@/common/components/buttons/RaisedButton.vue';
import ItemCard from '../components/ItemCard.vue'
import router from '@/router';
import TextButton from '@/common/components/buttons/TextButton.vue';
import IconButton from '@/common/components/buttons/IconButton.vue';
import { ProductController } from '../controllers/ProductController';
import { useProductStore } from '../stores/ProductStore';
import { storeToRefs } from 'pinia';
import { FavouriteController } from '@/favourites/controllers/FavouriteController';

const productsController = new ProductController();
const favouritesController = new FavouriteController();
const productStore = useProductStore();
const storeRef = storeToRefs(productStore);



function navigateToAddPage() {
  router.push('/add-item');
}

function navigateToEditPage(id: number) {
  router.push({ name: 'editItem', params: { productId: id.toString() } })
}

async function getAllProducts() {
  await productsController.getAll();
}
async function deleteProduct(id: number) {
  await productsController.delete(id);
}
async function setFavourite(id: number) {
  await favouritesController.setFavourites(id);
}


getAllProducts();
</script>

<template>
  <div class="container bg-background py-8 mx-auto">
    <div class="text-center">
      <RaisedButton label="Dodaj nowy produkt" @click="navigateToAddPage" />
    </div>
    <div class="grid grid-cols-4 gap-6 pt-6 phone-landscape:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3">
      <div class="flex justify-center" v-for="product in storeRef.products.value" :key='product.id'>
        <ItemCard class="flex flex-col" :key="product.id" :name="product.name" :type="product.category"
          :description="product.description" :image-src="product.imageSrc">
          <div class="grid grid-cols-2 grid-rows-1">
            <div class="flex items-center justify-start">
              <IconButton class="mr-2 " icon="favorite" id="favorite-button" @click="setFavourite(product.id)" />
            </div>
            <div class="flex items-center justify-end">
              <TextButton class="mr-2" label="Usuń" variant="error" @click="deleteProduct(product.id)" />
              <RaisedButton label="Edytuj" @click="navigateToEditPage(product.id)" />
            </div>
          </div>
        </ItemCard>
      </div>
    </div>
  </div>
</template>