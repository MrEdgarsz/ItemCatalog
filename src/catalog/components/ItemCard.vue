<script lang="ts" setup>
import RaisedButton from '@/common/components/buttons/RaisedButton.vue';
defineProps(['name', 'imageSrc', 'type', 'description'])
</script>

<template>
    <div class=" max-w-sm rounded-lg shadow-md bg-surface+1 ">
        <a class="flex justify-center" href="#">
            <img v-if="imageSrc" class=" rounded-t-lg h-96 max-w-full" :src='imageSrc' alt="Product preview" />
            <img v-else class=" rounded-t-lg h-96 max-w-full" src="../../assets/images/product-preview.png"
                alt="Product preview" />
        </a>
        <div class="p-5 h-full flex flex-col justify-between">
            <div>

                <a href="#">
                    <h5 class="text-2xl font-bold tracking-tight text-white">{{ name }}</h5>
                    <p class="mb-2 text-lg text-gray-500">{{ type }}</p>
                </a>
                <p class="mb-3 font-normal text-gray-400" v-if="description">{{ description }}</p>
                <p class="mb-3 font-normal text-gray-400" v-else>Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <slot></slot>
        </div>
    </div>
</template>