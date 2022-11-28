<script lang="ts" setup>
import { nextTick, onMounted, ref } from 'vue';
import { MDCTextField } from '@material/textfield';

// Data
const fileName = ref<String | null>('');
const fileInput = ref<HTMLInputElement | null>(null);
const textInput = ref<HTMLInputElement | null>(null);
const mdcTextField = ref<Element | null>(null);
const textField = ref<MDCTextField | null>(null);
const pickingFile = ref(false);

const props = defineProps({
    label: {
        type: String,
        required: false,
    },
})

const emit = defineEmits(['update:modelValue'])

// Methods
function onFileChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const files = inputElement.files;
    fileName.value = files ? files[0].name : null;
    textField.value?.focus();
    emit('update:modelValue', files ? files[0] : null);
}

function onFocus(): void {
    if (!pickingFile.value) {
        pickingFile.value = true;
        fileInput.value?.click();
        nextTick(() => {
            textField.value?.getDefaultFoundation().deactivateFocus();
            textField.value?.layout();
            textInput.value?.blur();
            pickingFile.value = false;
        });
    }
}

onMounted(() => {
    textField.value = new MDCTextField(mdcTextField.value!);
    textField.value?.getDefaultFoundation().deactivateFocus();
});




</script>

<template>

    <input type="file" class="hidden" ref="fileInput" @change="onFileChange" />
    <label class="mdc-text-field mdc-text-field--filled mdc-text-field--label-floating my-3" ref="mdcTextField">
        <span class="mdc-text-field__ripple"></span>
        <span class="mdc-floating-label mdc-floating-label--float-above" id="my-label-id">
            {{ props.label }}
        </span>
        <input class="mdc-text-field__input" ref="textInput" type="text" aria-labelledby="my-label-id" @click="onFocus"
            :value="fileName" readonly>
        <span class="mdc-line-ripple"></span>
    </label>

</template>