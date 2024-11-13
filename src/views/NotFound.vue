<script setup>
const props = defineProps({
    resource: {
        type: String,
        required: true,
        default:'pagina'
    }
});

</script>

<template>
    <h1>404</h1>
    <p>La {{ props.resource }} que buscas no existe</p>
    <router-link to="/">Volver a la página principal</router-link>
</template>