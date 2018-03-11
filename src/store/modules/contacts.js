/* eslint no-shadow:0 */
import { contains, filter, pipe, prop, toLower } from 'ramda';

// state
const state = {
  contacts: [],
  query: '',
};

// getters
const getters = {
  contacts: prop('contacts'),
  query: prop('query'),

  filteredContacts({ contacts, query }) {
    return filter(
      pipe(prop('name'), toLower, contains(query)),
    )(contacts);
  },
};

// actions
const actions = {
  updateQuery({ commit }, query) {
    commit('setQuery', query);
  },
};

// mutations
const mutations = {
  setQuery(state, query) {
    state.query = query;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
