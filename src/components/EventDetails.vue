<script setup>
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
import { getEventById } from '../services/EventServices.d';

const event = ref(null);

const props = defineProps({
  id: {
    required: true,
    type: Number
  }
});

const route = useRoute();

onMounted(async () => {
    await  getEventById(props.id).then((response) => {
        console.log(response)
        event.value = response.data
    }).catch((error) => {
        console.log(error)
    })
})
</script>
<template>
    <div class="event-details" v-if="event">
        <h1>{{ event.title }}</h1>
        <p>{{ event.time }} on {{ event.date }} at {{ event.location }}</p>
        <p>{{ event.description }}</p>
    </div>
</template>
