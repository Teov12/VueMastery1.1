import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import EventDetails from '../components/EventDetails.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'eventList',
      component: EventListView,
      props: (route) => ({ page: parseInt(route.query.page) || '1' }),
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/event/:id',
      name: 'eventDetails',
      props: true,
      component: EventDetails,
    }
  ],
})

export default router
