<script setup>
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
import { getEventById } from '../../services/EventServices.d';

const event = ref(null);

const props = defineProps({
    id: {
        required: true,
        type: Number
    }
});

const route = useRoute();

onMounted(async () => {
    await getEventById(props.id).then((response) => {
        console.log(response)
        event.value = response.data
        console.log(event.value);
    }).catch((error) => {
        console.log(error)
    })
})
</script>
<template>
    <div class="event-details" v-if="event">
        <h1>{{ event.title }}</h1>
        <nav id="nav">
            <RouterLink :to="{ name: 'eventDetails' }">Details</RouterLink>
            |
            <RouterLink :to="{ name: 'eventRegister' }">Register</RouterLink>
            |
            <RouterLink :to="{ name: 'eventEdit'}">Edit</RouterLink>
        </nav>
        <RouterView :event="event" />
    </div>
</template>
