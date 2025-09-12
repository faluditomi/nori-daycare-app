<template>
  <div class="flex items-center p-3 bg-white rounded-xl shadow">
    <div class="w-6 h-6 rounded-full mr-3" :style="{ backgroundColor: props.profile.colour }"></div>
    <div>
      <div class="font-semibold">{{ props.profile.name }}</div>
      <div class="text-sm text-gray-500">{{ props.profile.note }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Profile {
  id: number
  name: string
  note: string
  colour: string
}

const props = defineProps<{
  profile: Profile
}>()
</script>
