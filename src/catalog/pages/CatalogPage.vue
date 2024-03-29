<script lang="ts" setup>
import RaisedButton from '@/common/components/buttons/RaisedButton.vue';
import ItemCard from '../components/ItemCard.vue'
import ItemFilter from '../components/ItemFilter.vue'
import router from '@/router';
import TextButton from '@/common/components/buttons/TextButton.vue';
import IconButton from '@/common/components/buttons/IconButton.vue';
import SelectInput from '@/common/components/inputs/SelectInput.vue';
import TextInput from '@/common/components/inputs/TextInput.vue';

import { ProductController } from '../controllers/ProductController';
import { useProductStore } from '../stores/ProductStore';
import { storeToRefs } from 'pinia';
import { useAuthStore } from '@/auth/stores/AuthStore';
import { FavouriteController } from '@/favourites/controllers/FavouriteController';
import { ref } from 'vue';
import type { ProductFilterDto } from '../models/dtos/ProductFilterDto';

const productName = ref('');
const productCategory = ref('');
const productSortOption = ref('');
const productSortBy = ref('');
const productOrder = ref('');
const categorySelect = ref(null as null | typeof SelectInput);
const sortOptionSelect = ref(null as null | typeof SelectInput);
const productsController = new ProductController();
const favouritesController = new FavouriteController();
const productStore = useProductStore();
const storeRef = storeToRefs(productStore);
const authState = storeToRefs(useAuthStore());

function navigateToAddPage() {
  router.push('/add-item');
}

function navigateToEditPage(id: number) {
  router.push({ name: 'editItem', params: { productId: id.toString() } })
}

async function getAllProducts() {
  await productsController.getAll();
}
async function getProductsWithFilters() {
  if (productSortOption.value == 'Nazwa: Alfabetycznie') {
    productSortBy.value = 'name'; productOrder.value = 'ASC';
  }
  if (productSortOption.value == 'Data: Od najnowszych') {
    productSortBy.value = 'created_at'; productOrder.value = 'DESC';
  }
  if (productSortOption.value == 'Data: Od najstarszych') {
    productSortBy.value = 'created_at'; productOrder.value = 'ASC';
  }

  const dto: ProductFilterDto = { name: productName.value, category: productCategory.value, sort: productSortBy.value || undefined, order: productOrder.value || undefined };
  await productsController.getAll(dto);
}
async function resetProductFiltering() {
  productName.value = '';
  productCategory.value = '';
  productSortOption.value = '';
  categorySelect.value!.reset()
  sortOptionSelect.value!.reset()
  await getAllProducts();
}
async function deleteProduct(id: number) {
  await productsController.delete(id);
}
async function setFavourite(id: number) {
  await favouritesController.setFavourites(id);
}
async function getAllFavourites() {
  if (authState.isAuthenticated.value) {
    await favouritesController.getAll();
  }
}


getAllFavourites();
getAllProducts();
</script>

<template>
  <div class="container bg-background py-8 mx-auto">
    <div class="text-center" v-if="authState.isAuthenticated.value">
      <RaisedButton label="Dodaj nowy produkt" @click="navigateToAddPage" />
    </div>
    <div class="text-center">
      <ItemFilter>
        <div class="grid grid-cols-3 gap-6 tablet:grid-cols-1">
          <TextInput v-model="productName" label="Nazwa produktu" />
          <SelectInput ref="categorySelect" v-model="productCategory" :options="['Książka', 'Gra Planszowa']"
                      label="Kategoria produktu" />
          <SelectInput ref="sortOptionSelect" v-model="productSortOption" :options="['Nazwa: Alfabetycznie', 'Data: Od najnowszych', 'Data: Od najstarszych']"
                  label="Sortowanie" />
        </div>
        <TextButton class="mr-2" label="Resetuj" variant="error" @click="resetProductFiltering()" />
        <RaisedButton label="Szukaj" @click="getProductsWithFilters()" />
      </ItemFilter>
    </div>
    <div class="grid grid-cols-4 gap-6 pt-6 phone-landscape:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3">
      <div class="flex justify-center" v-for="product in storeRef.products.value" :key='product.id'>
        <ItemCard class="flex flex-col" :key="product.id" :name="product.name" :type="product.category"
          :description="product.description" :image-src="product.imageSrc">
          <div class="grid grid-cols-2 grid-rows-1" v-if="authState.isAuthenticated.value">
            <div class="flex items-center justify-start">
              <IconButton class="mr-2 favourite-button" :class="product.isFavourite ? 'active' : ''" icon="favorite"
                @click="setFavourite(product.id)" />
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

<style lang="scss">
@use "@material/button";

.favourite-button {
  @include button.ink-color(#E1E3E4);
}

.favourite-button.active {
  @include button.ink-color(#b5076f8a);
}
</style>