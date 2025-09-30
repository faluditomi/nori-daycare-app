<template>
  <nav class="bottom-nav">
    <router-link to="/calendar" class="nav-item" active-class="active">
      <CalendarIcon :class="isActive('/calendar')" />
    </router-link>
    <router-link to="/events" class="nav-item" active-class="active">
      <BookmarkIcon :class="isActive('/events')" />
    </router-link>
    <router-link to="/profiles" class="nav-item" active-class="active">
      <UserGroupIcon :class="isActive('/profiles')" />
    </router-link>
    <router-link to="/notes" class="nav-item" active-class="active">
      <PencilIcon :class="isActive('/notes')" />
    </router-link>
    <router-link to="/options" class="nav-item" active-class="active">
      <Cog6ToothIcon :class="isActive('/options')" />
    </router-link>
  </nav>
</template>

<script lang="ts" setup>
import {
  BookmarkIcon,
  CalendarIcon,
  Cog6ToothIcon,
  PencilIcon,
  UserGroupIcon,
} from '@heroicons/vue/24/solid'
import { useRoute } from 'vue-router'
import '@/styles/main.css'

function isActive(path: string) {
  return useRoute().path === path ? 'active' : ''
}
</script>
o
<style scoped></style>
