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
    <button class="mdc-button text-button" ref="buttonHtml" :class="buttonClasses">
        <span class="mdc-button__ripple"></span>
        <span class="mdc-button__focus-ring"></span>
        <span class="material-icons mdc-button__icon" aria-hidden="true" v-if="(props.icon !== undefined)">{{ props.icon
        }}</span>
        <span class="mdc-button__label">{{ props.label }}</span>
    </button>
</template>

<style lang="scss">
@use "@material/button";

.text-button.primary {
    @include button.filled-accessible(#004D62);
    @include button.container-fill-color(#004d6200);
    @include button.ink-color(#004D62);
}

.text-button.secondary {
    @include button.filled-accessible(#354A53);
    @include button.container-fill-color(#004d6200);
    @include button.ink-color(#354A53);
}

.text-button.tertiary {
    @include button.filled-accessible(#434465);
    @include button.container-fill-color(#004d6200);
    @include button.ink-color(#434465);
}

.text-button.error {
    @include button.filled-accessible(#d1402f);
    @include button.container-fill-color(#004d6200);
    @include button.ink-color(#d1402f);
}
</style>