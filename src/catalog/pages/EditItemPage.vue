<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { MDCTextField } from '@material/textfield';


const productName = ref('Przykładowa książka');
const productCategory = ref('Książka');
const description = ref('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.');
const previewSrc = ref('img/kitty.png');
onMounted(() => {
    const textField = new MDCTextField(document.querySelector('.mdc-text-field')!);
    // const textFieldOutlined = new MDCTextField(document.querySelector('.mdc-text-field--outlined')!);
})

function previewFile(event: Event) {
    const eventFiles = (event.target as HTMLInputElement).files;
    if (eventFiles != null) {
        previewSrc.value = URL.createObjectURL(eventFiles[0]);
    }

}
</script>
<template>
    <div class="flex mx-auto my-auto ">
        <div class="max-w-sm mr-5 border border-surface+2 rounded-lg shadow-md bg-surface+1 border-gray-700 ">
            <form class="grid justify-content-center m-5" role="edit" action="" method="post">
                <input type="file" @input="previewFile" accept="image/*"
                    class="w-72 mb-3 p-1 rounded-lg border-2 border-neutral-400 hover:bg-neutral-400" />
                <!-- <input class="rounded-lg mb-2 text-black w-72 bg-stone-300 p-1" required="true" v-model="productName"
                    placeholder="Nazwa produktu" /> -->

                <!-- @@@ -->
                <!-- <label class="mdc-text-field mdc-text-field--outlined">

                    <span class="mdc-notched-outline block">
                        <span class="mdc-notched-outline__leading "></span>
                        <span class="mdc-notched-outline__notch ">
                            <span class="mdc-floating-label " id="my-label-id">Nazwa produktu</span>
                        </span>
                        <span class="mdc-notched-outline__trailing "></span>
                    </span>
                    <input type="text"
                        class="mdc-text-field__input mb-5 bg-surface text- placeholder:text-on-surface-variant placeholder:text-body-large placeholder:leading-body-large placeholder:tracking-body-large placeholder:text-on-surface-variant placeholder:pl-1 hover:text-on-surface hover:placeholder:text-on-surface focus:text-primary"
                        aria-labelledby="my-label-id" required="true" v-model="productName"
                        placeholder="Nazwa produktu">
                </label> -->
                <!-- @@@ -->



                <!-- @@@ -->
                <label class="mdc-text-field mdc-text-field--outlined mb-3">
                    <span class="mdc-notched-outline ">
                        <span class="mdc-notched-outline__leading"></span>
                        <span class="mdc-notched-outline__notch">
                            <span class="mdc-floating-label" id="my-label-id">Nazwa produktu</span>
                        </span>
                        <span class="mdc-notched-outline__trailing"></span>
                    </span>
                    <input type="text" class="mdc-text-field__input" required="true" v-model="productName"
                        aria-labelledby="my-label-id">
                </label>
                <!-- @@@ -->










                <select class="mb-3 p-1 text-gray-400 rounded-lg bg-stone-300" required="true"
                    v-model="productCategory">
                    <option>Książka</option>
                    <option>Gra planszowa</option>
                </select>
                <textarea class="rounded-lg mb-3 p-1 text-black w-72 bg-stone-300 resize-none" required="true" rows="3"
                    maxlength="255" v-model="description" placeholder="Opis"></textarea>
                <div class="text-right">
                    <input type="submit" value="Zapisz"
                        class="text-white text-sm hover:bg-blue-800 focus:outline-none focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
                    <button type="button"
                        class="text-sm text-red-700 hover:text-white border focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 border-red-500 text-red-500 hover:text-white hover:bg-red-600 focus:ring-red-900">Usuń</button>

                </div>
            </form>
        </div>
        <!-- <div class="border-2 rounded-lg border-neutral-400 m-5 bg-neutral-800 text-white p-5">
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
        </div> -->
        <div class=" max-w-sm border border-surface+2 rounded-lg shadow-md bg-surface+1 border-gray-700 ">
            <a href="#">
                <img class="rounded-t-lg max-w-full h-auto" :src="previewSrc" alt="Dummy board game" />
            </a>
            <div class="p-5">
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
                <div class="text-right">
                    <button type="button"
                        class="text-white text-sm hover:bg-blue-800 focus:outline-none focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Edytuj</button>
                    <button type="button"
                        class="text-sm text-red-700 hover:text-white border focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 border-red-500 text-red-500 hover:text-white hover:bg-red-600 focus:ring-red-900">Usuń</button>
                </div>
            </div>
        </div>
        <!-- <div class="border-2 rounded-lg border-neutral-400 m-5 bg-neutral-800 text-white p-5">
            <p v-if="productName" class="pb-5 text-wrap w-72">{{ productName }}</p>
            <p v-else class="pb-5 text-warp w-72">Nazwa produktu</p>
            <img v-if="previewSrc" class="w-72" :src="previewSrc">
            <p v-else class="pb-5 text-warp w-72">Zdjęcie produktu</p>
            <p v-if="description" class="text-wrap pt-5 w-72 whitespace-pre-line break-words">{{ description }}</p>
            <p v-else class="text-wrap pt-5 w-72 whitespace-pre-line break-words">Opis produktu</p>
        </div> -->

    </div>





</template>