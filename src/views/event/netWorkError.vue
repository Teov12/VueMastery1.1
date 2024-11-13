<template>
    <h1>Error de conexión</h1>
    <p>No se pudo conectar con el servidor</p>
    <button @click="retry">Reintentar</button>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const retry = () => {
    router.go(-1);
}
</script>

<style scoped>
button {
    background-color: gainsboro;
    color: black;
    padding: 10px;
    border-radius: 5px;
    border-color:black;
}
</style>

<style scoped>
h1 {
    color: red;
}
</style>

<style scoped>
h1 {
    color: red;
}
</style>