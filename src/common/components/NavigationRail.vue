
<script lang="ts" setup>
import { HomeIcon, BookOpenIcon, ArrowLeftOnRectangleIcon } from '@heroicons/vue/20/solid'
import NavigationItem from './NavigationItem.vue';
</script>

<template>
  <div class=" bg-surface+1 w-32 ">
    <div class="sticky top-0 flex flex-col items-center content-center  ">
      <div class="p-5 pt-12">
        <!--- logo -->
        <img src="@/assets/logo.svg" alt="" class="h-10 w-10">
      </div>

      <NavigationItem title="Strona Główna" navigateTo="/">
        <template #icon>
          <HomeIcon />
        </template>
      </NavigationItem>

      <NavigationItem title="Katalog" navigateTo="/test">
        <template #icon>
          <BookOpenIcon />
        </template>
      </NavigationItem>
      <NavigationItem title="Logowanie" navigateTo="/login">
        <template #icon>
          <ArrowLeftOnRectangleIcon />
        </template>
      </NavigationItem>
      <!-- <NavigationItem title="Ulubione" navigateTo="/test" :selected="true">
      <template #icon>
        <BookmarkIcon />
      </template>
    </NavigationItem> -->

    </div>
  </div>
</template>

<style>
#navigationRail {
  width: 6rem;
  height: 100vh;
}
</style>