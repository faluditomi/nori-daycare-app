<template>
  <div class="list-element" @click="$emit('click', id)">
    <!-- profile name -->
    <span class="name">
      {{ name }}
    </span>

    <!-- arrow -->
    <ArrowLongRightIcon />
  </div>
</template>

<script setup lang="ts">
import { ArrowLongRightIcon } from '@heroicons/vue/24/solid'
import '@/styles/main.css'

defineProps<{
  id: number
  name: string
}>()
</script>

<style scoped></style>
