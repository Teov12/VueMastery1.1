<script setup>
const props = defineProps({
  event: {
    required: true,
  }
});
</script>
<template>
        <p>{{ event.time }} on {{ event.date }} at {{ event.location }}</p>
        <p>{{ event.description }}</p>
</template>



