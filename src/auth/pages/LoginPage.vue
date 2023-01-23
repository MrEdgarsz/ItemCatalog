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
const error = ref('');

async function login() {
    error.value = '';
    const response = await authController.login(email.value, password.value);
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
                <span class="text-display-medium text-on-surface">Logowanie</span>
            </div>
            <form class="flex flex-col p-6 bg-surface+1 col-start-3 row-start-2 rounded-lg" @submit.prevent="">
                <TextInput :initialValue="email" label="Adres e-mail" v-model="email" />
                <TextInput :initialValue="password" label="Hasło" inputType="password" v-model="password" />
                <span class="text-label-small text-error">{{ error }}</span>
                <RaisedButton label="Zaloguj się" @click="login()" />
            </form>
        </div>
    </div>
</template>