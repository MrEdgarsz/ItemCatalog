<script lang="ts" setup>
import { MDCRipple } from '@material/ripple';
import { onMounted, ref } from 'vue';
const buttonHtml = ref<HTMLElement | null>();
const mdcButton = ref<MDCRipple | null>();

const emit = defineEmits(['click']);

onMounted(() => {
    mdcButton.value = new MDCRipple(buttonHtml.value!);
    mdcButton.value.unbounded = true;
    mdcButton.value.listen('click', () => {
        emit('click');
    });
});

const props = defineProps({
    icon: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: false,
    }
});


</script>


<template>
    <button class="mdc-icon-button material-icons custom-button" ref="buttonHtml" :id="props.id">
        <div class="mdc-icon-button__ripple"></div>
        <span class="mdc-icon-button__focus-ring"></span>
        {{ props.icon }}
    </button>
</template>
