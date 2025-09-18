<template>
  <div class="options-page">
    <h1>Options Page</h1>
    <div class="theme-switch">
      <label>
        <input type="checkbox" v-model="isDark" @change="toggleTheme" />
        <span class="slider"></span>
        Dark Mode
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const isDark = ref(false)

function toggleTheme() {
  const theme = isDark.value ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem('theme', theme)
}

onMounted(() => {
  isDark.value = localStorage.getItem('theme') === 'dark'
})
</script>

<style scoped>
.options-page {
  padding: 2rem;
}
.theme-switch label {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 1.2rem;
}
.theme-switch input[type='checkbox'] {
  display: none;
}
.theme-switch .slider {
  width: 40px;
  height: 22px;
  background: var(--colour-border);
  border-radius: 11px;
  margin-right: 0.5rem;
  position: relative;
  transition: background 0.3s;
}
.theme-switch input[type='checkbox']:checked + .slider {
  background: var(--colour-accent);
}
.theme-switch .slider::before {
  content: '';
  position: absolute;
  left: 3px;
  top: 3px;
  width: 16px;
  height: 16px;
  background: var(--colour-bg);
  border-radius: 50%;
  transition: transform 0.3s;
}
.theme-switch input[type='checkbox']:checked + .slider::before {
  transform: translateX(18px);
}
</style>
