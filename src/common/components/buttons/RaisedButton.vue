<script lang="ts" setup>
import { MDCRipple } from '@material/ripple';

import { ref, onMounted, type PropType } from 'vue';

type TVariant = 'primary' | 'secondary' | 'tertiary' | 'error';

const button = ref<Element | null>(null);
const mdcButton = ref<MDCRipple | null>(null);

const emit = defineEmits(['click'])

const props = defineProps({
    label: {
        type: String,
        required: true,
    },
    variant: {
        type: String as PropType<TVariant>,
        required: false,
        default: 'primary',
    },
})

onMounted(() => {
    mdcButton.value = new MDCRipple(button.value!);
    mdcButton.value?.listen('click', () => {
        emit('click');
    })
})

</script>

<template>

    <button class="mdc-button mdc-button--raised custom-button my-3" :class="props.variant" ref="button"
        id="custom-button">
        <span class="mdc-button__ripple"></span>
        <span class="mdc-button__focus-ring"></span>
        <span class="mdc-button__label">{{ props.label }}</span>
    </button>

</template>

<style lang="scss">
@use "@material/button";

.custom-button.primary {
    @include button.filled-accessible(#004D62);
}

.custom-button.secondary {
    @include button.filled-accessible(#354A53);
}

.custom-button.tertiary {
    @include button.filled-accessible(#434465);
}

.custom-button.error {
    @include button.filled-accessible(#93000A);
}
</style>