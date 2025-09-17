import { createRouter, createWebHistory } from 'vue-router'
import ProfilesView from '@/views/ProfilesView.vue'
import AddProfile from '@/views/AddProfileView.vue'
import CalendarView from '@/views/CalendarView.vue'
import EventsView from '@/views/EventsView.vue'
import NotesView from '@/views/NotesView.vue'
import OptionsView from '@/views/OptionsView.vue'

const routes = [
  { path: '/calendar', component: CalendarView },
  { path: '/events', component: EventsView },
  { path: '/profiles', component: ProfilesView },
  { path: '/profiles/add', component: AddProfile },
  { path: '/notes', component: NotesView },
  { path: '/options', component: OptionsView },
  { path: '/', redirect: '/calendar' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
