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


function previewFile(event: Event) {
    const eventFiles = (event.target as HTMLInputElement).files;
    if (eventFiles != null) {
        previewSrc.value = URL.createObjectURL(eventFiles[0]);
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
            <div class="border border-surface+2 rounded-lg shadow-md bg-surface+1 desktop:col-start-2">
                <a href="#">
                    <img class="rounded-t-lg max-w-full mx-auto h-auto" src="@/assets/images/product-preview.png"
                        alt="Dummy board game" />
                </a>
                <div class="">
                    <a href="#">
                        <h5 v-if="productName"
                            class="text-headline-small leading-headline-small tracking-headline-small  font-bold text-white text-wrap">
                            {{ productName }}</h5>
                        <h5 v-else
                            class="text-headline-small leading-headline-small tracking-headline-small  font-bold text-white text-wrap">
                            Nazwa
                            produktu
                        </h5>
                        <p v-if="productCategory"
                            class="mb-2 text-label-large leading-label-large tracking-label-large text-gray-500">{{
                                    productCategory
                            }}</p>
                        <p v-else class="mb-2 text-label-large leading-label-large tracking-label-large text-gray-500">
                            Kategoria produktu</p>

                    </a>
                    <p v-if="description"
                        class="mb-3 text-title-medium leading-title-medium tracking-title-medium text-gray-400 whitespace-pre-line break-words">
                        {{
                                description
                        }}</p>
                    <p v-else
                        class="mb-3 text-title-medium leading-title-medium tracking-title-medium text-gray-400 whitespace-pre-line break-words">
                        Opis produktu</p>

                </div>

            </div>
        </div>
        <div class="grid desktop:grid-cols-4 desktop:gap-1 w-full mt-5">
            <form class="flex flex-col m-5 desktop:col-span-2 desktop:col-start-2" role="edit" action="" method="post">
                <TextInput label="Nazwa produktu" />
                <FileInput label="Zdjęcie produktu" />
                <SelectInput :options="['Książka', 'Gra Planszowa']" label="Kategoria Produktu" />
                <TextArea label="Opis Produktu" :max-length="500" />
                <div class="text-right">
                    <RaisedButton label="Zapisz" />
                </div>
            </form>
        </div>

    </div>








</template>