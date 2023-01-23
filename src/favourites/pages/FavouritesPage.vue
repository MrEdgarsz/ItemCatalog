<script lang="ts" setup>
import ItemCard from '../../catalog/components/ItemCard.vue'
import IconButton from '@/common/components/buttons/IconButton.vue';
import { FavouriteController } from '../controllers/FavouriteController';
import { useFavouriteStore } from '../stores/FavouriteStore';
import { storeToRefs } from 'pinia';

const favouritesController = new FavouriteController();
const favouriteStore = useFavouriteStore();
const storeRef = storeToRefs(favouriteStore);

async function getAllFavourites() {
  await favouritesController.getAll();
}
async function setFavourite(id: number) {
  await favouritesController.setFavourites(id);
}

getAllFavourites();
</script>

<template>
  <div class="container bg-background py-8 mx-auto">
    <div class="grid grid-cols-4 gap-6 pt-6 phone-landscape:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3">
      <div class="flex justify-center" v-for="favourite in storeRef.favourites.value" :key="favourite.id">
        <ItemCard class="flex flex-col" :key="favourite.id" :name="favourite.name" :type="favourite.category"
          :description="favourite.description" :image-src="favourite.imageSrc">
          <div class="grid grid-cols-2 grid-rows-1">

            <div class="flex items-center justify-start">
              <IconButton class="mr-2 " icon="favorite" id="favorite-button" @click="setFavourite(favourite.id)" />
            </div>
          </div>
        </ItemCard>
      </div>
    </div>
  </div>
</template>