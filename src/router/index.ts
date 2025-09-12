import { createRouter, createWebHistory } from 'vue-router'
import ProfilesView from '@/views/ProfilesView.vue'
import AddProfile from '@/views/AddProfileView.vue'
// import ProfileDetail from '@/views/ProfileDetail.vue'

const routes = [
  { path: '/', redirect: '/profiles' },
  { path: '/profiles', component: ProfilesView },
  { path: '/profiles/add', component: AddProfile },
  // { path: '/profiles/:id', component: ProfileDetail, props: true },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
