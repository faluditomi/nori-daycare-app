<template>
  <div
    class="flex justify-between items-center p-4 mb-3 bg-white border rounded-xl shadow-sm hover:shadow-md transition"
  >
    <div class="flex flex-col">
      <span class="text-lg font-semibold text-gray-800">{{ name }}</span>
    </div>
    <router-link :to="`/profiles/${id}`" class="text-blue-600 hover:text-blue-800 text-sm">
      View →
    </router-link>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  id: number
  name: string
}>()
</script>
