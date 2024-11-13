<script setup>
import { useRoute, useRouter } from 'vue-router';
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
const router = useRouter();

onMounted(async () => {
    await getEventById(props.id).then((response) => {
        console.log(response)
        event.value = response.data
        console.log(event.value);
    }).catch((error) => {
        console.log(error)
        if (error.response && error.response.status === 404) {
            router.push({
                name: '404Resource',
                params: {
                    resource: 'evento'
                }
            })
        }else {
            router.push({ name: 'netWorkError' })
        }
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
            <RouterLink :to="{ name: 'eventEdit' }">Edit</RouterLink>
        </nav>
        <RouterView :event="event" />
    </div>
</template>
