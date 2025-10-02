<template>
  <div class="list-element" @click="$emit('click', id)">
    <!-- profile name -->
    <span class="name">
      {{ name }}
    </span>

    <!-- arrow -->
    <ChevronRightIcon />
  </div>
</template>

<script setup lang="ts">
import { ChevronRightIcon } from '@heroicons/vue/24/solid'
import '@/styles/main.css'

defineProps<{
  id: number
  name: string
}>()
</script>

<style scoped></style>
