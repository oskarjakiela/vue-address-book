/* eslint no-shadow:0 */
import { contains, filter, map, pipe, prop, toLower } from 'ramda';

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
  editContact({ commit }, contact) {
    commit('setContact', contact);
  },
  updateQuery({ commit }, query) {
    commit('setQuery', query);
  },
};

// mutations
const mutations = {
  setContact(state, { id, name, fields }) {
    state.contacts = map((contact) => {
      if (contact.id === id) {
        return { ...contact, name, fields };
      }

      return contact;
    })(state.contacts);
  },
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
