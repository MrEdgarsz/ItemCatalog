<script lang="ts" setup>
import { RouterLink, } from "vue-router";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  navigateTo: {
    type: String,
    required: true,
  },
});

function createIconClasses(isActive: boolean): string {
  if (isActive) {
    return "text-on-secondary-container";
  }
  else {
    return "text-on-surface-variant";
  }
}

</script>

<template>
  <div class="p-5 px-8 container">
    <RouterLink :to="navigateTo" v-bind="$props" custom v-slot="{ isActive, href, navigate }">
      <a v-bind="$attrs" :href="href" @click="navigate">
        <div class="flex flex-col container justify-center items-center group">
          <div class="flex justify-center items-center container rounded-xl group-hover:bg-on-secondary-container/[.08]"
            :class="{ 'bg-secondary-container/[.20]': isActive }">
            <div :class="createIconClasses(isActive)" class="h-6 w-6 p-0.5">
              <slot name="icon" />
            </div>
          </div>
          <span class=" text-xs pt-1 text-center" :class="isActive ? 'text-on-surface' : 'text-on-surface-variant'">{{
              props.title
          }}</span>
        </div>
      </a>
    </RouterLink>
  </div>
</template>

<style>

</style>
