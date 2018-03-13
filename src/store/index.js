import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import contacts from '@/store/modules/contacts';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    contacts,
  },
  strict: debug,
  plugins: [
    createPersistedState({ key: 'address-book' }),
  ],
});
