<script lang="ts" setup>
import FileInput from '@/common/components/inputs/FileInput.vue';
import SelectInput from '@/common/components/inputs/SelectInput.vue';
import TextArea from '@/common/components/inputs/TextArea.vue';
import TextInput from '@/common/components/inputs/TextInput.vue';
import RaisedButton from '@/common/components/buttons/RaisedButton.vue';
import ItemCard from '@/catalog/components/ItemCard.vue'
import { ref } from 'vue';

const productName = ref('Przykładowa książka');
const productCategory = ref('Książka');
const description = ref('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.');
const previewSrc = ref('');


function previewFile(file: File) {
    if (file != null) {
        previewSrc.value = URL.createObjectURL(file);
    }

}

</script>
<template>
    <div class="mt-5">
        <div class="grid desktop:grid-cols-4 desktop:gap-1 w-full">
            <div class="text-on-surface text-display-small font-bold desktop:col-span-2 desktop:col-start-2  mb-10">
                Edycja
                produktu</div>
        </div>
        <div class="grid desktop:grid-cols-3 desktop:gap-1 w-full">
            <div class="flex desktop:col-start-2 justify-center">
                <ItemCard :key="1" :name="productName" :imageSrc="previewSrc" :type="productCategory"
                    :description="description" />
            </div>
        </div>
        <div class="grid desktop:grid-cols-4 desktop:gap-1 w-full mt-5">
            <form class="flex flex-col m-5 desktop:col-span-2 desktop:col-start-2" role="edit" action="" method="post">
                <TextInput v-model="productName" label="Nazwa produktu" />
                <FileInput v-model="previewSrc" @input="previewFile" label="Zdjęcie produktu" />
                <SelectInput v-model="productCategory" :options="['Książka', 'Gra Planszowa']"
                    label="Kategoria produktu" />
                <TextArea v-model="description" label="Opis produktu" :max-length="250" />
                <div class="text-right">
                    <RaisedButton label="Zapisz" />
                </div>
            </form>
        </div>

    </div>








</template>