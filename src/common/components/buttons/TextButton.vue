<script lang="ts" setup>

import { MDCRipple } from '@material/ripple';
import { computed, onMounted, ref, type PropType } from 'vue';

const buttonHtml = ref<HTMLElement | null>();
const mdcButton = ref<MDCRipple | null>();

const emit = defineEmits(['click']);

type TVariant = 'primary' | 'secondary' | 'tertiary' | 'error';

const props = defineProps({
    label: {
        type: String,
        required: true
    },
    variant: {
        type: String as PropType<TVariant>,
        required: false,
        default: 'primary',
    },
    icon: {
        type: String,
        required: false,
    }
});

const buttonClasses = computed(() => {
    return {
        'mdc-button--icon-leading': props.icon !== undefined,
        [props.variant]: true,
    };
});

onMounted(() => {
    mdcButton.value = new MDCRipple(buttonHtml.value!);
    mdcButton.value.listen('click', () => {
        emit('click');
    });
});

</script>


<template>
    <button class="mdc-button" ref="buttonHtml" :class="buttonClasses">
        <span class="mdc-button__ripple"></span>
        <span class="mdc-button__focus-ring"></span>
        <span class="material-icons mdc-button__icon" aria-hidden="true" v-if="(props.icon !== undefined)">{{ props.icon
        }}</span>
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