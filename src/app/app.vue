<script setup lang="ts">
import { routes } from './router.js'
import { toggleTheme } from './theme.js'
</script>

<template>
  <div class="links">
    <button v-for="route in routes" :key="route.path" class="link-button">
      <router-link v-bind:to="route.path">{{ route.name }}</router-link>
    </button>
    <button v-on:click="toggleTheme($event)">Theme</button>
  </div>
  <h1>{{ $route.name }}</h1>
  <router-view />
</template>

<style>
.links {
  display: flex;
  gap: 1rem;
}
</style>
