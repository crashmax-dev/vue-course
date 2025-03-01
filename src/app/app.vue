<script setup lang="ts">
import { routes } from './router.js'
import { toggleTheme } from './theme.js'
</script>

<template>
  <nav>
    <template v-for="route in routes" :key="route.path">
      <router-link
        v-if="route.meta?.showInNav"
        :to="route.path"
        >
        <button>
          {{ route.name }}
        </button>
      </router-link>
    </template>
    <button class="theme-button" @click="toggleTheme($event)">Theme</button>
  </nav>
  <h1 v-if="$route.meta.showInNav" class="title">
    {{ $route.name }}
  </h1>
  <router-view />
</template>

<style scoped>
.theme-button {
  margin-left: auto;
}

.router-link-active > button {
  color: var(--background-color);
  background-color: var(--text-color);
}
</style>
