<template>
  <div
    class="profile-card flex items-center justify-between px-5 py-4 w-full rounded-2xl shadow-sm transition active:scale-95"
    @click="$emit('click', id)"
  >
    <!-- Left side: profile name -->
    <span class="text-lg font-semibold truncate">
      {{ name }}
    </span>

    <!-- Right side: arrow -->
    <ChevronRightIcon class="w-6 h-6 text-[var(--colour-text-muted)]" />
  </div>
</template>

<script setup lang="ts">
import { ChevronRightIcon } from '@heroicons/vue/24/solid'

defineProps<{
  id: number
  name: string
}>()
</script>

<style scoped>
.profile-card {
  background-color: var(--colour-card-bg);
  border: 1px solid var(--colour-border);
  color: var(--colour-text);
}
</style>
