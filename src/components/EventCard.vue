<script setup lang="ts">

defineProps({
  event: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <router-link class="event-link" :to="{ name: 'eventDetails', params: { id: event.id } }">
    <div class="event-card">
      <h2>{{ event.title }}</h2>
      <span>@{{ event.time }} el {{ event.date }}</span>
      <p>{{ event.description }}</p>
      <p>Organizado por {{ event.organizer }}</p>
    </div>
  </router-link>
</template>

<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.event-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
