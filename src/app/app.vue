<script setup lang="ts">
import { routes } from './router.js'
import { toggleTheme } from './theme.js'
</script>

<template>
  <nav>
    <button v-on:click="toggleTheme($event)">Theme</button>
    <template v-for="route in routes" v-bind:key="route.path">
      <router-link v-bind:to="route.path">
        <button v-if="route.meta?.showInNav" class="link-button">
          {{ route.name }}
        </button>
      </router-link>
    </template>
  </nav>
  <h1 v-if="$route.meta.showInNav" class="title">
    {{ $route.name }}
  </h1>
  <router-view />
</template>
