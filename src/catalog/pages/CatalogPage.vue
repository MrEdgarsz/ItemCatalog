<script lang="ts" setup>
import RaisedButton from '@/common/components/buttons/RaisedButton.vue';
import ItemCard from '../components/ItemCard.vue'
import router from '@/router';
import TextButton from '@/common/components/buttons/TextButton.vue';
import IconButton from '@/common/components/buttons/IconButton.vue';
import { ProductController } from '../controllers/ProductController';
import { useProductStore } from '../stores/ProductStore';
import { storeToRefs } from 'pinia';

const productsController = new ProductController();
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


getAllProducts();
</script>

<template>
  <div class="container bg-background py-8 mx-auto">
    <div class="text-center">
      <RaisedButton label="Dodaj nowy produkt" @click="navigateToAddPage" />
    </div>
    <div class="grid grid-cols-4 gap-6 pt-6 phone-landscape:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3">
      <div class="flex justify-center" v-for="item in items">
        <ItemCard class="flex flex-col" :key="item.id" :name="item.name" :type="item.type"
          :description="item.description">
          <div class="grid grid-cols-2 grid-rows-1">

            <div class="flex items-center justify-start">
              <IconButton class="mr-2 " icon="favorite" id="favorite-button" />
            </div>
            <div class="flex items-center justify-end">
              <TextButton class="mr-2" label="Usuń" variant="error" />
              <RaisedButton label="Edytuj" @click="navigateToEditPage" />
            </div>
          </div>
        </ItemCard>
      </div>
    </div>
  </div>
</template>