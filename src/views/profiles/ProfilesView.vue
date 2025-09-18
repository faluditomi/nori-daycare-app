<template>
  <div class="p-4 pb-20 bg-gray-50 min-h-screen">
    <h1 class="text-2xl font-bold text-gray-800 mb-4">Profiles</h1>

    <div v-if="profiles.length > 0">
      <ProfileCard
        v-for="profile in profiles"
        :key="profile.id"
        :id="profile.id"
        :name="profile.name"
      />
    </div>
    <p v-else class="text-gray-500 italic">No profiles yet.</p>

    <!-- floating add button -->
    <button
      @click="goToCreateProfile"
      class="fixed bottom-20 right-5 bg-blue-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-blue-700"
    >
      +
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import ProfileCard from '@/components/ProfileCard.vue'
import { getProfiles } from '@/services/dbService.ts'
import type { Profile } from '@/types/Profile'

const router = useRouter()
const profiles = ref<Profile[]>([])

onMounted(async () => {
  profiles.value = await getProfiles()
})

function goToCreateProfile() {
  router.push('/profiles/create')
}
</script>
