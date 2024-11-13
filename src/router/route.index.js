import { createRouter, createWebHistory } from 'vue-router'
// import EventListView from '../views/EventListView.vue'
// import EventDetails from '../views/event/Details.vue'
// import EventRegister from '../views/event/Register.vue'
// import EventEdit from '../views/event/Edit.vue'
// import AboutView from '../views/AboutView.vue'
// import EventLayout from '../views/event/Layout.vue'
// import NotFound from '../views/NotFound.vue'
// import NetWorkError from '../views/event/netWorkError.vue'
const EventListView = () => import('../views/EventListView.vue')
const EventDetails = () => import('../views/event/Details.vue')
const EventRegister = () => import('../views/event/Register.vue')
const EventEdit = () => import('../views/event/Edit.vue')
const AboutView = () => import('../views/AboutView.vue')
const EventLayout = () => import('../views/event/Layout.vue')
const NotFound = () => import('../views/NotFound.vue')
const NetWorkError = () => import('../views/event/netWorkError.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'eventList',
      component: EventListView,
      props: (route) => ({ page: parseInt(route.query.page) || 1 }),
    },
    {
      path: '/about-us',
      name: 'about',
      component: AboutView,
      alias: '/about',
    },
    {
      path: '/events/:id',
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
        },
      ],
    },
    {
      path: '/event/:id',
      redirect: () => {
        return { name: 'eventDetails' }
      },
      children: [
        { path: 'register', redirect: () => ({ name: 'eventRegister' }) },
        { path: 'edit', redirect: () => ({ name: 'eventEdit' }) },
      ],
    },
    {
      path: '/:catchAll(.*)',
      name: 'notFound',
      component: NotFound,
    },
    {
      path: '/404/:resource',
      name: '404Resource',
      component: NotFound,
      props: true,
    },
    { path: '/newtork-error', name: 'netWorkError', component: NetWorkError },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router
