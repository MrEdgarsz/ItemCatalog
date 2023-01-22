<script lang="ts" setup>
import FileInput from '@/common/components/inputs/FileInput.vue';
import SelectInput from '@/common/components/inputs/SelectInput.vue';
import TextArea from '@/common/components/inputs/TextArea.vue';
import TextInput from '@/common/components/inputs/TextInput.vue';
import RaisedButton from '@/common/components/buttons/RaisedButton.vue';
import ItemCard from '@/catalog/components/ItemCard.vue'
import { ref } from 'vue';
import router from '@/router';
import { useProductStore } from '../stores/ProductStore';
import { ProductController } from '../controllers/ProductController';
import type { ProductInputDto } from '../models/dtos/ProductInputDto';


const productName = ref('');
const productCategory = ref('');
const description = ref('');
const previewSrc = ref('');
const productStore = useProductStore();
const productsController = new ProductController();
let isEdit: boolean = false;


if (router.currentRoute.value.fullPath != '/add-item') {
    isEdit = true;

    const productId = parseInt(router.currentRoute.value.params['productId'].toString());

    const response = productStore.getProductById(productId);

    if (response) {
        productName.value = response.name;
        productCategory.value = response.category;
        description.value = response.description;
        previewSrc.value = response.imageSrc;
    }
}

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
                <span v-if="(router.currentRoute.value.name === 'addItem')">
                    Dodaj produkt
                </span>
                <span v-else>
                    Edytuj produkt
                </span>

            </div>
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