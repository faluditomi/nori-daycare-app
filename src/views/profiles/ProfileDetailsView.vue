<template>
  <div class="p-4 pb-20 bg-gray-50 min-h-screen">
    <button @click="goBack" class="text-blue-600 hover:underline mb-3">← Back</button>

    <div v-if="profile" class="space-y-4">
      <h1 class="text-2xl font-bold text-gray-800">{{ profile.name }}</h1>

      <section>
        <h2 class="text-lg font-semibold text-gray-700 mb-2">Activities</h2>
        <p class="text-sm text-gray-500 italic">
          (Here you’ll see the list of activities for this profile)
        </p>
      </section>

      <section>
        <h2 class="text-lg font-semibold text-gray-700 mb-2">Going-home Times</h2>
        <p class="text-sm text-gray-500 italic">(Future: display days of week + editable times)</p>
      </section>

      <button class="bg-red-600 text-white px-4 py-2 rounded-lg shadow hover:bg-red-700">
        Delete Profile
      </button>
    </div>

    <p v-else class="text-gray-500">Loading...</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getProfileById } from '@/services/dbService.ts'
import type { Profile } from '@/types/Profile'

const route = useRoute()
const router = useRouter()
const profile = ref<Profile | null>(null)

onMounted(async () => {
  const id = Number(route.params.id)
  profile.value = await getProfileById(id)
})

function goBack() {
  router.back()
}
</script>
