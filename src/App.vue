<script setup lang="ts">
import { inject } from 'vue';

const GStore = inject('GStore') as any;


</script>

<template>
  <div id="layout">
    <div id="flash" v-if="GStore.flashMessage !== ''">
      {{ GStore.flashMessage }}
    </div>
      <div class="wrapper">
        <nav>
          <RouterLink :to="{ name: 'eventList' }">Events</RouterLink> |
          <RouterLink :to="{name: 'about'}">About</RouterLink>
        </nav>
      </div>
    <RouterView />
  </div>
</template>

<style>

@keyframes yellowFade {
  from {
    background-color: yellow;
  }
  to {
    background-color: transparent;
  }
}

#flash {
  animation-name: yellowFade;
  animation-duration: 3s;
}

#layout {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

h2 {
  font-size: 40px;
}
</style>