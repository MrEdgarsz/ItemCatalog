<script lang="ts" setup>
import RaisedButton from '@/common/components/buttons/RaisedButton.vue';
defineProps(['name', 'imageSrc', 'type', 'description'])
</script>

<template>
    <div class="max-w-sm rounded-lg shadow-md bg-surface+1 hover:bg-on-surface/[0.08] focus:bg-on-surface/[0.12]">
        <a href="#">
            <img class="rounded-t-lg max-w-full h-auto" src="../../assets/images/product-preview.png" alt="Product preview"/>
        </a>
        <div class="p-5">
            <a href="#">
                <h5 class="text-2xl font-bold tracking-tight text-white">{{ name }}</h5>
                <p class="mb-2 text-lg text-gray-500">{{ type }}</p>
            </a>
            <p class="mb-3 font-normal text-gray-400" v-if="description">{{ description }}</p>
            <p class="mb-3 font-normal text-gray-400" v-else>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div class="flex">
                <div class="flex-none text-left">
                    <RaisedButton label="L" variant="secondary"/>
                </div>
                <div class="flex-1 text-right">
                    <RaisedButton class="mr-2" label="Usuń" variant="error"/>
                    <RaisedButton label="Edytuj"/>
                </div>
            </div>
        </div>
    </div>
</template>