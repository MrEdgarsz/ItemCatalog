<script lang="ts" setup>
import { ref } from 'vue'
import ItemCard from '../components/ItemCard.vue'

const items = ref([
  { id: 1, title: 'Przykładowa książka',        type: 'Książka'       },
  { id: 2, title: 'Przykładowa gra planszowa',  type: 'Gra planszowa' },
  { id: 3, title: 'Przykładowa gra planszowa',  type: 'Gra planszowa' },
  { id: 4, title: 'Przykładowa gra planszowa',  type: 'Gra planszowa' },
  { id: 5, title: 'Przykładowa książka',        type: 'Książka'       },
  { id: 6, title: 'Przykładowa książka',        type: 'Książka'       },
  { id: 7, title: 'Przykładowa gra planszowa',  type: 'Gra planszowa' },
  { id: 8, title: 'Przykładowa książka',        type: 'Książka'       },
  { id: 9, title: 'Przykładowa książka',        type: 'Książka'       },
  { id: 10, title: 'Przykładowa gra planszowa', type: 'Gra planszowa' },
  { id: 11, title: 'Przykładowa gra planszowa', type: 'Gra planszowa' },
  { id: 12, title: 'Przykładowa książka',       type: 'Książka'       }
])
</script>

<template>
  <div class="container bg-background py-8 mx-auto">
    <div class="text-center">
      <button type="button" class="py-3 px-5 text-base font-medium text-center text-white bg-primary rounded-lg focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Dodaj nowy produkt</button>
    </div>
    <div class="grid grid-cols-1 gap-6 pt-6 md:grid-cols-3 lg:grid-cols-4">
      <div class="flex justify-center" v-for="item in items">
        <ItemCard :key="item.id" :title="item.title" :type="item.type"></ItemCard>
      </div>
    </div>
  </div>
</template>

<style>
</style>