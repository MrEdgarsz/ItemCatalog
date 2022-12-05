<script lang="ts" setup>
import { ref } from 'vue'
import RaisedButton from '@/common/components/buttons/RaisedButton.vue';
import ItemCard from '../components/ItemCard.vue'
import router from '@/router';
import TextButton from '@/common/components/buttons/TextButton.vue';
import IconButton from '@/common/components/buttons/IconButton.vue';

const items = ref([
  { id: 1, name: 'Przykładowa książka', type: 'Książka', description: "" },
  { id: 2, name: 'Przykładowa gra planszowa', type: 'Gra planszowa', description: "" },
  { id: 3, name: 'Przykładowa gra planszowa', type: 'Gra planszowa', description: "" },
  { id: 4, name: 'Przykładowa gra planszowa', type: 'Gra planszowa', description: "" },
  { id: 5, name: 'Przykładowa książka', type: 'Książka', description: "" },
  { id: 6, name: 'Przykładowa książka', type: 'Książka', description: "" },
  { id: 7, name: 'Przykładowa gra planszowa', type: 'Gra planszowa', description: "" },
  { id: 8, name: 'Przykładowa książka', type: 'Książka', description: "" },
  { id: 9, name: 'Przykładowa książka', type: 'Książka', description: "" },
  { id: 10, name: 'Przykładowa gra planszowa', type: 'Gra planszowa', description: "" },
  { id: 11, name: 'Przykładowa gra planszowa', type: 'Gra planszowa', description: "" },
  { id: 12, name: 'Przykładowa książka', type: 'Książka', description: "" }
])

function navigateToAddPage() {
  router.push('/add-item');
}

function navigateToEditPage() {
  router.push('/edit-item');
}

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
          <div class="flex flex-row-reverse items-center">
            <RaisedButton label="Edytuj" @click="navigateToEditPage" />
            <TextButton class="mr-2" label="Usuń" variant="error" />
            <IconButton class="mr-2" icon="favorite" />
          </div>
        </ItemCard>
      </div>
    </div>
  </div>
</template>