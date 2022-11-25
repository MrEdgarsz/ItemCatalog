<script lang="ts" setup>
defineProps(['title', 'type'])
</script>

<template>
    <div class="max-w-sm rounded-lg shadow-md bg-surface+1 hover:bg-surface-variant">
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
                <button type="button" class="text-black text-sm text-center font-medium rounded-full bg-primary px-5 py-2.5 mr-2 mb-2 hover:bg-primary-container hover:text-white focus:outline-none focus:ring-4 focus:ring-on-primary">Edytuj</button>
                <button type="button" class="text-sm text-error text-center border border-error font-medium rounded-full px-5 py-2.5  mr-2 mb-2 hover:bg-error-container hover:border-error-container focus:ring-4 focus:outline-none focus:ring-on-error focus:bg-error-container focus:border-error-container">Usuń</button>
            </div>
        </div>
    </div>
</template>