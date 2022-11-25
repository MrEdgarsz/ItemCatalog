<script lang="ts" setup>
defineProps(['title', 'type'])
</script>

<template>
    <div class="max-w-sm border border-surface+1 rounded-lg shadow-md bg-surface+1 border-gray-700 hover:bg-surface-variant">
        <a href="#">
            <img class="rounded-t-lg max-w-full h-auto" src="../../assets/img/dummy-board-game.png" alt="Dummy board game"/>
        </a>
        <div class="p-5">
            <a href="#">
                <h5 class="text-2xl font-bold tracking-tight text-white">{{ title }}</h5>
                <p class="mb-2 text-lg text-gray-500">{{ type }}</p>
            </a>
            <p class="mb-3 font-normal text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div class="text-right">
                <button type="button" class="text-white text-sm hover:bg-blue-800 focus:outline-none focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Edytuj</button>
                <button type="button" class="text-sm text-red-700 hover:text-white border focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 border-red-500 text-red-500 hover:text-white hover:bg-red-600 focus:ring-red-900">Usuń</button>
            </div>
        </div>
    </div>
</template>