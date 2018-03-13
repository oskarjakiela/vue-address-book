/* eslint no-shadow:0 */
import {
  contains,
  filter,
  findIndex,
  map,
  pipe,
  prop,
  propEq,
  toLower,
} from 'ramda';

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
  addContact({ commit }, contact) {
    commit('insertContact', contact);
  },

  editContact({ commit }, contact) {
    commit('setContact', contact);
  },

  removeContact({ commit }, id) {
    commit('deleteContact', id);
  },

  updateQuery({ commit }, query) {
    commit('setQuery', query);
  },
};

// mutations
const mutations = {
  deleteContact(state, id) {
    const { contacts } = state;
    const index = findIndex(propEq('id', id))(contacts);

    state.contacts = [
      ...contacts.slice(0, index),
      ...contacts.slice(index + 1),
    ];
  },

  insertContact(state, contact) {
    state.contacts = [
      ...state.contacts,
      contact,
    ];
  },

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
