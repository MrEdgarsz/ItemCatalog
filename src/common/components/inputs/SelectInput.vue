<script lang="ts" setup>
import { MDCSelect } from '@material/select';
import { onMounted, ref } from 'vue';

// Data
const selectInput = ref<HTMLSelectElement | null>(null);
const mdcSelect = ref<MDCSelect | null>(null);

const props = defineProps({
    label: {
        type: String,
        required: true,
    },
    options: {
        type: Array,
        required: true,
    },
    initialValue: {
        type: String,
        required: false,
    },
})

const emit = defineEmits(['update:modelValue'])

onMounted(() => {
    mdcSelect.value = new MDCSelect(selectInput.value!);
    mdcSelect.value!.listen('MDCSelect:change', () => {
        emit('update:modelValue', mdcSelect.value!.value);
    });
});



</script>

<template>
    <div class="mdc-select mdc-select--filled select-width-class my-3" ref="selectInput">
        <div class="mdc-select__anchor" role="button" aria-haspopup="listbox" aria-expanded="false"
            aria-labelledby="select-label select-selected-text">
            <span class="mdc-select__ripple"></span>
            <span id="select-label" class="mdc-floating-label">{{ props.label }}</span>
            <span class="mdc-select__selected-text-container">
                <span id="select-selected-text" class="mdc-select__selected-text"></span>
            </span>
            <span class="mdc-select__dropdown-icon">
                <svg class="mdc-select__dropdown-icon-graphic" viewBox="7 10 10 5" focusable="false">
                    <polygon class="mdc-select__dropdown-icon-inactive" stroke="none" fill-rule="evenodd"
                        points="7 10 12 15 17 10">
                    </polygon>
                    <polygon class="mdc-select__dropdown-icon-active" stroke="none" fill-rule="evenodd"
                        points="7 15 12 10 17 15">
                    </polygon>
                </svg>
            </span>
            <span class="mdc-line-ripple"></span>
        </div>

        <div class="mdc-select__menu mdc-menu mdc-menu-surface mdc-menu-surface--fullwidth">
            <ul class="mdc-deprecated-list" role="listbox" aria-label="Food picker listbox">

                <li class="mdc-deprecated-list-item" :aria-selected="option == props.initialValue" :data-value="option"
                    role="option" v-for="(option, index) in props.options" :key="index"
                    :class="{ 'mdc-deprecated-list-item--selected': option == props.initialValue }">
                    <span class="mdc-deprecated-list-item__ripple"></span>
                    <span class="mdc-deprecated-list-item__text">
                        {{ option }}
                    </span>
                </li>
            </ul>
        </div>
    </div>

</template>