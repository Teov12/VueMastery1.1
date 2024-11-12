<script setup lang="ts">
import EventCard from '../components/EventCard.vue';
import { getEventsByPage } from '../services/EventServices.d';
import { computed, onMounted, ref, watchEffect } from 'vue';
import { IEvent } from '../interfaces/IEvent';

const events = ref<IEvent[]>([]);

const props = defineProps(['page'])

const page = computed(() => props.page)

const totalEvents = ref(0);

const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvents.value / 2);
  return page.value < totalPages;
})

onMounted(() => {
  watchEffect(() => {
    events.value = [];
    getEventsByPage(2, page.value).then((response: any) => {
      events.value = response.data;
      totalEvents.value = response.headers['x-total-count'];
    });
  })
});
</script>

<template>
  <div class="events">
    <h1>Eventos</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
  <div class="pagination">
    <RouterLink id="page-prev" v-if="page != 1" :to="{ name: 'eventList', query: { page: page - 1 } }" rel="prev">&#60; Anterior</RouterLink>
    <RouterLink id="page-next" v-if="hasNextPage" :to="{ name: 'eventList', query: { page: page + 1 } }" rel="next">Siguiente &#62;</RouterLink>
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pagination {
  display: flex;
  align-items: center;
  justify-content: center;  
  gap: 20px;
  width: 290px;
  margin-top: 20px;
  margin-left: 800px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>