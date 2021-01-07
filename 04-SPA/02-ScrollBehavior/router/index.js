import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// https://router.vuejs.org/guide/advanced/scroll-behavior.html
export function scrollBehavior(to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition; //при переходе назад с savedPosition не изменять положение прокрутки;
  }

  if (to.hash) {
    return {
      selector: to.hash, //при наличии hash в маршруте прокрутить к элементу с идентификатором в hash;
    };
  }

  if (to.meta['saveScrollPosition'] && from.meta['saveScrollPosition']) {
    return false;
  }

  return { x: 0, y: 0 }; //default по умолчанию страница прокручивается вверх;
}

export const router = new VueRouter({
  mode: 'history',

  base: '/04-SPA/02-ScrollBehavior',

  scrollBehavior,

  routes: [
    {
      path: '/',
      name: 'index',
      // alias: 'meeetups'
      // redirect: '/meetups',
      component: () => import('../views/MeetupsPage'),
    },
    {
      path: '/meetups',
      name: 'meetups',
      component: () => import('../views/MeetupsPage'),
    },
    {
      path: '/meetups/:meetupId(\\d+)',
      name: 'meetup',
      redirect: (to) => ({ name: 'meetup-description', params: to.params }),
      meta: {
        showReturnToMeetups: true,
        saveScrollPosition: true,
      },
      component: () => import('../views/MeetupPage'),
      children: [
        {
          path: '',
          alias: 'description',
          name: 'meetup-description',
          props: true,
          component: () => import('../views/MeetupDescriptionPage'),
        },
        {
          path: 'agenda',
          name: 'meetup-agenda',
          props: true,
          component: () => import('../views/MeetupAgendaPage'),
        },
      ],
    },
  ],
});
