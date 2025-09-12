<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">{{ $t('profiles') }}</h1>

    <div class="space-y-3">
      <ProfileCard v-for="profile in profiles" :key="profile.id" :profile="profile" />
    </div>

    <button
      class="fixed bottom-6 right-6 bg-blue-500 text-white rounded-full p-4 shadow-lg"
      @click="addProfile"
    >
      +
    </button>
  </div>
</template>

<script lang="ts" setup>
import * as ProfileCard from '@/components/ProfileCard.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const profiles = [
  { id: 1, name: 'Alice', note: 'Loves drawing', colour: '#FF5733' },
  { id: 2, name: 'Bob', note: 'Nap time 2pm', colour: '#33C1FF' },
]

function addProfile() {
  alert('Open add profile modal')
  router.push('/profiles/add')
}
// function goToProfile(id: number) {
//   router.push(`/profiles/${id}`)
// }
</script>
