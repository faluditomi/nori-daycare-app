<template>
  <!-- header / back button -->
  <header class="header-title">
    <button @click="goBack" aria-label="Back">
      <ArrowLeftIcon />
    </button>
    <h1>
      {{ profile?.name }}
    </h1>
  </header>

  <div class="details-view">
    <div v-if="profile">
      <!-- profile header -->
      <div class="bg-[var(--colour-card-bg)] rounded-xl shadow p-6">
        <h1 class="text-2xl font-bold text-[var(--colour-text)]">
          {{ profile.name }}
        </h1>
        <p v-if="profile.note" class="text-[var(--colour-text-muted)] mt-2">
          {{ profile.note }}
        </p>
      </div>

      <!-- Activities -->
      <section class="bg-[var(--colour-card-bg)] rounded-xl shadow p-5">
        <h2 class="text-lg font-semibold text-[var(--colour-text)] mb-2">
          {{ $t('profiles.activities') }}
        </h2>
        <p class="text-sm text-[var(--colour-text-muted)] italic">
          ({{ $t('profiles.activitiesPlaceholder') }})
        </p>
      </section>

      <!-- Going-home Times -->
      <section class="bg-[var(--colour-card-bg)] rounded-xl shadow p-5">
        <h2 class="text-lg font-semibold text-[var(--colour-text)] mb-2">
          {{ $t('profiles.goingHomeTimes') }}
        </h2>
        <p class="text-sm text-[var(--colour-text-muted)] italic">
          ({{ $t('profiles.goingHomePlaceholder') }})
        </p>
      </section>

      <!-- Danger zone -->
      <button
        class="w-full bg-[var(--colour-danger)] text-white px-4 py-3 rounded-xl shadow hover:bg-[var(--colour-danger-hover)] transition active:scale-95"
      >
        {{ $t('profiles.deleteProfile') }}
      </button>
    </div>

    <p v-else class="text-[var(--colour-text-muted)]">{{ $t('common.loading') }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getProfileById } from '@/services/dbService.ts'
import type { Profile } from '@/types/Profile'
import { ArrowLeftIcon } from '@heroicons/vue/24/solid'
import '@/styles/main.css'

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

<style scoped></style>
