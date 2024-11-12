import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import EventDetails from '../components/event/Details.vue'
import EventRegister from '../components/event/Register.vue'
import EventEdit from '../components/event/Edit.vue'
import AboutView from '../views/AboutView.vue'
import EventLayout from '../components/event/Layout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'eventList',
      component: EventListView,
      props: route => ({ page: parseInt(route.query.page) || 1 })
    },
    {
      path: '/about-us',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/about',
      redirect: {name: 'about'}
    },
    {
      path: '/event/:id',
      name: 'eventLayout',
      props: true,
      component: EventLayout, 
      children: [
        {
          path: '',
          name: 'eventDetails',
          component: EventDetails,
        },
        {
          path: 'register',
          name: 'eventRegister',
          component: EventRegister,
        },
        {
          path: 'edit',
          name: 'eventEdit',
          component: EventEdit,
        }
      ]
    },
  ],
})

export default router
