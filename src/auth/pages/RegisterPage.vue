<script lang="ts" setup>
import RaisedButton from '@/common/components/buttons/RaisedButton.vue';
import TextInput from '@/common/components/inputs/TextInput.vue';
import router from '@/router';
import { isLeft } from 'fp-ts/lib/Either';
import { ref } from 'vue';
import { AuthController } from '../controllers/AuthController';

const authController = new AuthController();

const email = ref('');
const password = ref('');
const passwordConfirmation = ref('');
const error = ref('');

async function register() {
    error.value = '';
    const response = await authController.register(email.value, password.value, passwordConfirmation.value);
    if (isLeft(response)) {
        error.value = response.left;
    } else {
        router.replace({ name: 'catalog' });
    }
}

</script>

<template>
    <div class="flex flex-col mt-5 w-full h-screen">
        <div class="m-auto">
            <div class="row-start-1 col-start-3 text-center rounded-lg mb-3">
                <span class="text-display-medium text-on-surface">Rejestracja</span>
            </div>
            <form class="flex flex-col p-6 bg-surface+1 col-start-3 row-start-2 rounded-lg" @submit.prevent="">
                <TextInput v-model="email" :initialValue="email" label="Adres e-mail" />
                <TextInput v-model="password" :initialValue="password" label="Hasło" inputType="password" />
                <TextInput v-model="passwordConfirmation" :initialValue="passwordConfirmation" label="Potwierdź hasło"
                    inputType="password" />
                <span class="text-label-small text-error">{{ error }}</span>
                <RaisedButton label="Zarejestruj się" @click="register()" />
            </form>
        </div>
    </div>
</template>