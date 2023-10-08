<script setup lang="ts">
import { ref } from 'vue'
import TWallpaper from '@twallpaper/vue'
import type { TWallpaperOptions } from '@twallpaper/vue'
import '@twallpaper/vue/css'

const twallpaper = ref<InstanceType<typeof TWallpaper>>()
const options = ref<TWallpaperOptions>({
  animate: false,
  colors: [
    '#dbddbb',
    '#6ba587',
    '#d5d88d',
    '#88b884'
  ],
  fps: 60,
  tails: 60,
  pattern: {
    mask: false,
    image: 'https://twallpaper.js.org/patterns/paris.svg'
  }
})
</script>

<template>
  <t-wallpaper ref="twallpaper" :options="options" />
  <slot></slot>
</template>
