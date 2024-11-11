<script setup lang="ts">
import EventCard from '../components/EventCard.vue';
import {getEvents} from '../services/EventServices.d';
import { onMounted, ref } from 'vue';
import { IEvent } from '../interfaces/IEvent';

const events = ref<IEvent[]>([]);

onMounted(() => {
  getEvents().then((response: any) => {
    events.value = response.data.events;
  });
})
</script>

<template>
  <div class="events">
    <h1>Eventos</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>