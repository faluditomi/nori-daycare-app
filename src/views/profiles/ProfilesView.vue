<template>
  <!-- header -->
  <header class="header-title">
    <h1>
      {{ $t('profiles.title') }}
    </h1>
  </header>

  <div v-if="profiles.length > 0" class="list-view">
    <!-- content -->
    <div>
      <!-- <ProfileCard
        v-for="profile in profiles"
        :key="profile.id"
        :id="profile.id"
        :name="profile.name"
        @click="goToProfileDetail(profile.id)"
      /> -->
      <ProfileCard :key="1" :id="1" :name="'Riedl Nóra'" @click="goToProfileDetail(1)" />
      <ProfileCard :key="1" :id="1" :name="'Riedl Nóra'" @click="goToProfileDetail(1)" />
      <ProfileCard :key="1" :id="1" :name="'Riedl Nóra'" @click="goToProfileDetail(1)" />
    </div>
  </div>
  <p v-if="profiles.length < +0" class="empty-list-text">
    {{ $t('profiles.empty') }}
  </p>

  <!-- floating add button -->
  <button class="add-button" @click="goToCreateProfile" aria-label="Add profile">
    <PlusIcon />
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import ProfileCard from '@/components/ProfileCard.vue'
import { getAllProfiles } from '@/services/dbService.ts'
import type { Profile } from '@/types/Profile'
import { PlusIcon } from '@heroicons/vue/24/solid'
import '@/styles/main.css'

useI18n()
const router = useRouter()
const profiles = ref<Profile[]>([])

onMounted(async () => {
  profiles.value = await getAllProfiles()
})

function goToCreateProfile() {
  router.push('/profiles/add')
}

function goToProfileDetail(id: number) {
  router.push(`/profiles/${id}`)
}
</script>

<style scoped></style>
