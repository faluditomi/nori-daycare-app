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

function isActive(path: string) {
  return useRoute().path === path ? 'active' : ''
}
</script>
o
<style scoped>
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: var(--colour-nav-bg);
  border-top: 1px solid var(--colour-border);
  padding: 8px 0;
}
.nav-item {
  transition:
    fill 0.2s,
    transform 0.2s;
}
.nav-item svg {
  width: 2rem;
  height: 2rem;
  fill: var(--colour-text);
}
.nav-item:active {
  transform: scale(0.8);
}
.nav-item.active svg {
  fill: var(--colour-accent);
  transform: scale(1.1);
}
</style>
