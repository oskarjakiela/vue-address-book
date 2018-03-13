import Vue from 'vue';
import Router from 'vue-router';
import contacts from '@/router/modules/contacts';

Vue.use(Router);

export default new Router({
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/contacts',
    },
    contacts,
  ],
});
