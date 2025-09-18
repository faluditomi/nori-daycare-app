import { createRouter, createWebHistory } from 'vue-router'
import ProfilesView from '@/views/profiles/ProfilesView.vue'
import AddProfile from '@/views/profiles/AddProfileView.vue'
import ProfileDetailsView from '@/views/profiles/ProfileDetailsView.vue'
import CalendarView from '@/views/calendar/CalendarView.vue'
import EventsView from '@/views/events/EventsView.vue'
import NotesView from '@/views/notes/NotesView.vue'
import OptionsView from '@/views/options/OptionsView.vue'

const routes = [
  { path: '/calendar', component: CalendarView },
  { path: '/events', component: EventsView },
  { path: '/profiles', component: ProfilesView },
  { path: '/profiles/add', component: AddProfile },
  { path: '/profiles/:id', component: ProfileDetailsView, props: true },
  { path: '/notes', component: NotesView },
  { path: '/options', component: OptionsView },
  { path: '/', redirect: '/calendar' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
