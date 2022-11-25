<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavigationRail from './common/components/NavigationRail.vue';
</script>

<template>
  <div class="flex flex-row bg-surface text-neutral-50">
    <NavigationRail />
    <RouterView />
  </div>
</template>
