<script lang="ts" setup>
import { ref } from 'vue';


const productName = ref('Odkurzacz piorący');
const description = ref('Super funkcje i inne tam czyszczenie!');
const previewSrc = ref('');

function previewFile(event: Event) {
    const eventFiles = (event.target as HTMLInputElement).files;
    if (eventFiles != null) {
        previewSrc.value = URL.createObjectURL(eventFiles[0]);
    }

}
</script>
<template>
    <div class="flex mx-auto">
        <div class="border-2 rounded-lg border-neutral-400 m-5 bg-neutral-800 text-white p-5">
            <form role="edit" action="" method="post" class="grid justify-items-start">
                <p class="pb-2">Nazwa</p>
                <input class="rounded-lg mb-2 text-black w-72 bg-stone-300 p-1" required="true" v-model="productName"
                    placeholder="Nazwa produktu" />
                <p class="pb-2">Wybierz zdjęcie</p>
                <input type="file" @input="previewFile" accept="image/*"
                    class="w-72 p-1 rounded-lg border-2 border-neutral-400 hover:bg-neutral-400" />
                <p class="pb-2">Krótki opis produktu</p>
                <textarea class="rounded-lg mb-2 p-1 text-black w-72 bg-stone-300 resize-none" required="true" rows="3"
                    maxlength="255" v-model="description" placeholder="Opis"></textarea>
                <button type="submit"
                    class="p-1 rounded-lg border-2 border-neutral-400 hover:bg-neutral-400">Zapisz</button>
            </form>
        </div>
        <div class="border-2 rounded-lg border-neutral-400 m-5 bg-neutral-800 text-white p-5">
            <p v-if="productName" class="pb-5 text-wrap w-72">{{ productName }}</p>
            <p v-else class="pb-5 text-warp w-72">Nazwa produktu</p>
            <img v-if="previewSrc" class="w-72" :src="previewSrc">
            <p v-else class="pb-5 text-warp w-72">Zdjęcie produktu</p>
            <p v-if="description" class="text-wrap pt-5 w-72 whitespace-pre-line break-words">{{ description }}</p>
            <p v-else class="text-wrap pt-5 w-72 whitespace-pre-line break-words">Opis produktu</p>
        </div>

    </div>





</template>