<script lang="ts" setup>
import RaisedButton from '@/common/components/buttons/RaisedButton.vue';
import TextInput from '@/common/components/inputs/TextInput.vue';
</script>

<template>
    <div class="flex flex-col mt-5 w-full h-screen">
        <div class="m-auto">
            <div class="row-start-1 col-start-3 text-center rounded-lg mb-3">
                <span class="text-display-medium text-on-surface">Rejestracja</span>
            </div>
            <div class="flex flex-col p-6 bg-surface+1 col-start-3 row-start-2 rounded-lg">
                <TextInput label="Adres e-mail" />
                <TextInput label="Hasło" inputType="password" />
                <TextInput label="Potwierdź hasło" inputType="passwordConfirmation" />
                <RaisedButton label="Zarejestruj się" />
            </div>
        </div>
    </div>
</template>