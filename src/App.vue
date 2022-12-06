<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavigationRail from './common/components/NavigationRail.vue';
</script>

<template>
  <div class=" min-h-screen text-neutral-50 flex flex-row bg-background ">
    <NavigationRail class="" />
    <div class="mx-auto desktop:px-10 laptop:px-5 tablet:px-2 phone-landscape:px-5 desktop:w-desktop ">
      <RouterView class=" " />
    </div>
  </div>
</template>
