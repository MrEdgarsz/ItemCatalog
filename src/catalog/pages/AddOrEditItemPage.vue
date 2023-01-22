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
const imagefile = ref();
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
        const imageSrc = URL.createObjectURL(file)
        imagefile.value = file
        previewSrc.value = imageSrc;
    }
}

async function saveProduct() {
    console.log('At saveProduct () isEdit: ', isEdit);
    if (productName.value.length != 0 && productCategory.value.length != 0 && previewSrc.value.length != 0 && description.value.length != 0) {
        const dto: ProductInputDto = { name: productName.value, category: productCategory.value, image: imagefile.value, description: description.value };
        if (isEdit) {
            const productId = parseInt(router.currentRoute.value.params['productId'].toString());
            await productsController.patch(productId, dto);
        } else {
            await productsController.add(dto);
        }
        router.push('/');
    } else {
        alert("Wszystkie pola formularza muszą zostać wypełnione!");
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
            <form class="flex flex-col m-5 desktop:col-span-2 desktop:col-start-2" role="edit" @submit.prevent="">
                <TextInput v-model="productName" label="Nazwa produktu" :initial-value="productName" />
                <FileInput v-model="previewSrc" @input="previewFile" label="Zdjęcie produktu" />
                <SelectInput v-model="productCategory" :options="['Książka', 'Gra Planszowa']"
                    :initial-value="productCategory" label="Kategoria produktu" />
                <TextArea v-model="description" label="Opis produktu" :initial-value="description" :max-length="250" />
                <div class="text-right">
                    <RaisedButton label="Zapisz" @click="saveProduct()" />
                </div>
            </form>
        </div>
    </div>
</template>