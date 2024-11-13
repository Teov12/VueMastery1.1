<script setup>
import { useRouter } from 'vue-router';
import { inject } from 'vue';

const props = defineProps({
  event: {
    required: true,
  }
});

const route = useRouter();
const GStore = inject('GStore');
const submit = () => {
  GStore.flashMessage = '¡Gracias por registrarte en el evento ' + props.event.title + '!';
  setTimeout(() => {
    GStore.flashMessage = '';
  }, 3000);
  route.push({ name: 'eventDetails' });
}

</script>


<template>
  <p>Aqui puedes registrarte para el evento</p>
  <button @click="submit" class="boton">Registrate</button>
</template>

<style scoped>
.boton {
  background-color: gainsboro;
  color: black;
  padding: 10px;
  border-radius: 5px;
  border-color: black;
}
</style>
