<script lang="ts" setup>
import { MDCTextField } from '@material/textfield';
import { ref, onMounted } from 'vue';

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
        required: true,
    },
    maxLength: {
        type: Number,
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
    <label
        class="mdc-text-field mdc-text-field--filled mdc-text-field--textarea mdc-text-field--with-internal-counter my-3"
        ref="textField">
        <span class="mdc-floating-label" id="my-label-id">{{ props.label }}</span>
        <span class="mdc-text-field__ripple"></span>
        <span class="mdc-text-field__resizer">
            <textarea class="mdc-text-field__input" aria-labelledby="my-label-id" rows="5" cols="40"
                :maxlength="props.maxLength"></textarea>
            <span class="mdc-text-field-character-counter" v-if="props.maxLength">0 / 500</span>
        </span>
        <span class="mdc-line-ripple"></span>
    </label>
</template>