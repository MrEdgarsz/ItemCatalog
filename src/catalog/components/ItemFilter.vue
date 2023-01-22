<script lang="ts" setup>
import RaisedButton from '@/common/components/buttons/RaisedButton.vue';
import SelectInput from '@/common/components/inputs/SelectInput.vue';
import TextButton from '@/common/components/buttons/TextButton.vue';
import TextInput from '@/common/components/inputs/TextInput.vue';
</script>

<template>
    <div class="bg-surface+1 p-6 rounded-lg shadow-md">
        <div class="grid grid-cols-3 gap-6 tablet:grid-cols-1">
            <TextInput label="Nazwa produktu" />
            <SelectInput :options="['Książka', 'Gra Planszowa']"
                        label="Kategoria produktu" />
            <SelectInput :options="['Nazwa: Alfabetycznie', 'Data: Od najnowszych', 'Data: Od najstarszych']"
                    label="Sortowanie" />
        </div>
        <TextButton class="mr-2" label="Resetuj" variant="error" />
        <RaisedButton label="Szukaj" />
    </div>
</template>

<style lang="scss">
</style>