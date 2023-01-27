
<script lang="ts" setup>
import { BookOpenIcon, ArrowLeftOnRectangleIcon, UsersIcon, PencilSquareIcon, HeartIcon } from '@heroicons/vue/20/solid'
import NavigationItem from './NavigationItem.vue';
import { useAuthStore } from '@/auth/stores/AuthStore';
import { storeToRefs } from 'pinia';

const authState = storeToRefs(useAuthStore());
</script>

<template>
  <div class="bg-surface+1 w-32">
    <div class="sticky top-0 flex flex-col items-center content-center  ">
      <div class="p-5 pt-12">
        <!--- logo -->
        <img src="@/assets/logo.svg" alt="" class="h-10 w-10">
      </div>
      <NavigationItem title="Logowanie" navigateTo="/login" v-if="!authState.isAuthenticated.value">
        <template #icon>
          <ArrowLeftOnRectangleIcon />
        </template>
      </NavigationItem>
      <NavigationItem title="Rejestracja" navigateTo="/register" v-if="!authState.isAuthenticated.value">
        <template #icon>
          <PencilSquareIcon />
        </template>
      </NavigationItem>
      <NavigationItem title="Katalog" navigateTo="/" :selected="true">
        <template #icon>
          <BookOpenIcon />
        </template>
      </NavigationItem>
      <NavigationItem title="Ulubione" navigateTo="/favourites" v-if="authState.isAuthenticated.value">
        <template #icon>
          <HeartIcon />
        </template>
      </NavigationItem>

      <NavigationItem title="Autorzy" navigateTo="/authors">
        <template #icon>
          <UsersIcon />
        </template>
      </NavigationItem>
      <NavigationItem title="Wyloguj" navigateTo="/logout" v-if="authState.isAuthenticated.value">
        <template #icon>
          <ArrowLeftOnRectangleIcon />
        </template>
      </NavigationItem>

    </div>
  </div>
</template>

<style>
#navigationRail {
  width: 6rem;
  height: 100vh;
}
</style>