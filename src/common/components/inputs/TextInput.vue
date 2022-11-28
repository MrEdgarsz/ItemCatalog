<script lang="ts" setup>
import { MDCTextField } from '@material/textfield';
import { onMounted, ref } from 'vue';

const textField = ref<Element | null>(null);
const mdcTextField = ref<MDCTextField | null>(null);

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
    initialValue: {
        type: String,
        required: false,
    },
    label: {
        type: String,
        required: false,
    },

})

onMounted(() => {

    mdcTextField.value = new MDCTextField(textField.value!);
    mdcTextField.value?.layout();
    mdcTextField.value?.getDefaultFoundation().deactivateFocus();
    mdcTextField.value.listen('change', () => {
        emit('update:modelValue', mdcTextField.value?.value);
    })
})

</script>



<template>
    <label class="mdc-text-field mdc-text-field--filled mdc-text-field--label-floating my-3" ref="textField">
        <span class="mdc-text-field__ripple"></span>
        <span class="mdc-floating-label mdc-floating-label--float-above" id="my-label-id">
            {{ props.label }}
        </span>
        <input class="mdc-text-field__input" type="text" aria-labelledby="my-label-id">
        <span class="mdc-line-ripple"></span>
    </label>
</template>